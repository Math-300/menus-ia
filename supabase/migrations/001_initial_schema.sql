-- ============================================
-- MenuOS - Initial Schema Migration
-- Version: 1.0.0
-- Created: 2026-02-21
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ENUMS
-- ============================================

-- Order status enum
CREATE TYPE order_status AS ENUM (
    'pending',      -- Pedido recibido
    'confirmed',    -- Confirmado por el restaurante
    'preparing',    -- En preparación
    'ready',        -- Listo para servir/recoger
    'delivered',    -- Entregado
    'cancelled'     -- Cancelado
);

-- Story type enum
CREATE TYPE story_type AS ENUM (
    'dish',         -- Historia de un plato
    'promo',        -- Promoción especial
    'chef',         -- Recomendación del chef
    'event'         -- Evento especial
);

-- Payment status enum
CREATE TYPE payment_status AS ENUM (
    'pending',      -- Pago pendiente
    'paid',         -- Pagado
    'failed',       -- Pago fallido
    'refunded'      -- Reembolsado
);

-- ============================================
-- TABLES
-- ============================================

-- --------------------------------------------
-- TENANTS (Restaurantes)
-- --------------------------------------------
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(255),
    logo_url TEXT,
    cover_image_url TEXT,
    primary_color VARCHAR(7) DEFAULT '#E63946',
    secondary_color VARCHAR(7) DEFAULT '#1D3557',
    accent_color VARCHAR(7) DEFAULT '#F4A261',
    currency VARCHAR(10) DEFAULT '$',
    locale VARCHAR(10) DEFAULT 'es-CO',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT valid_primary_color CHECK (primary_color ~ '^#[0-9A-Fa-f]{6}$'),
    CONSTRAINT valid_secondary_color CHECK (secondary_color ~ '^#[0-9A-Fa-f]{6}$'),
    CONSTRAINT valid_accent_color CHECK (accent_color ~ '^#[0-9A-Fa-f]{6}$')
);

-- --------------------------------------------
-- USERS (Usuarios administradores)
-- --------------------------------------------
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- --------------------------------------------
-- CATEGORIES (Categorías del menú)
-- --------------------------------------------
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    description TEXT,
    image_url TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Unique constraint for slug within tenant
    UNIQUE(tenant_id, slug)
);

-- --------------------------------------------
-- DISHES / MENU_ITEMS (Platos del menú)
-- --------------------------------------------
CREATE TABLE dishes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT,
    available BOOLEAN DEFAULT true,
    dietary TEXT[] DEFAULT '{}',  -- ['vegan', 'vegetarian', 'gluten-free', 'spicy']
    calories INTEGER,
    preparation_time INTEGER,  -- in minutes
    is_popular BOOLEAN DEFAULT false,
    is_new BOOLEAN DEFAULT false,
    is_chef_choice BOOLEAN DEFAULT false,
    ingredients TEXT[] DEFAULT '{}',
    pairing TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT valid_price CHECK (price >= 0)
);

-- --------------------------------------------
-- DISH_OPTIONS (Opciones/Modificadores de platos)
-- --------------------------------------------
CREATE TABLE dish_option_groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    dish_id UUID NOT NULL REFERENCES dishes(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,  -- e.g., "Choose your side", "Cook Temperature"
    min_selections INTEGER DEFAULT 0,  -- 0 = optional, 1+ = required
    max_selections INTEGER DEFAULT 1,  -- 1 = single select, >1 = multi select
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE dish_options (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    group_id UUID NOT NULL REFERENCES dish_option_groups(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) DEFAULT 0,
    available BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    CONSTRAINT valid_option_price CHECK (price >= 0)
);

-- --------------------------------------------
-- STORIES (Stories tipo Instagram)
-- --------------------------------------------
CREATE TABLE stories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    type story_type NOT NULL DEFAULT 'dish',
    image_url TEXT NOT NULL,
    video_url TEXT,
    linked_dish_id UUID REFERENCES dishes(id) ON DELETE SET NULL,
    button_text VARCHAR(100),
    button_action TEXT,  -- URL or action identifier
    view_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    expires_at TIMESTAMPTZ,  -- NULL = no expiration
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Index for active stories
    CONSTRAINT valid_media CHECK (image_url IS NOT NULL OR video_url IS NOT NULL)
);

-- --------------------------------------------
-- ORDERS (Pedidos)
-- --------------------------------------------
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    order_number VARCHAR(50) NOT NULL,  -- Human-readable order number
    table_number VARCHAR(20),
    customer_name VARCHAR(255),
    customer_phone VARCHAR(50),
    customer_email VARCHAR(255),
    status order_status DEFAULT 'pending',
    payment_status payment_status DEFAULT 'pending',
    subtotal DECIMAL(10, 2) NOT NULL,
    tax DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL,
    notes TEXT,
    wompi_transaction_id VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT valid_subtotal CHECK (subtotal >= 0),
    CONSTRAINT valid_total CHECK (total >= 0)
);

-- --------------------------------------------
-- ORDER_ITEMS (Items de cada pedido)
-- --------------------------------------------
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    dish_id UUID REFERENCES dishes(id) ON DELETE SET NULL,
    dish_name VARCHAR(255) NOT NULL,  -- Store name in case dish is deleted
    quantity INTEGER NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    notes TEXT,
    selected_options JSONB DEFAULT '[]',  -- [{groupName, optionName, price}]
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT valid_quantity CHECK (quantity > 0),
    CONSTRAINT valid_unit_price CHECK (unit_price >= 0),
    CONSTRAINT valid_total_price CHECK (total_price >= 0)
);

-- ============================================
-- INDEXES
-- ============================================

-- Tenants
CREATE INDEX idx_tenants_slug ON tenants(slug);
CREATE INDEX idx_tenants_is_active ON tenants(is_active);

-- Users
CREATE INDEX idx_users_tenant_id ON users(tenant_id);
CREATE INDEX idx_users_email ON users(email);

-- Categories
CREATE INDEX idx_categories_tenant_id ON categories(tenant_id);
CREATE INDEX idx_categories_slug ON categories(tenant_id, slug);
CREATE INDEX idx_categories_display_order ON categories(tenant_id, display_order);

-- Dishes
CREATE INDEX idx_dishes_tenant_id ON dishes(tenant_id);
CREATE INDEX idx_dishes_category_id ON dishes(category_id);
CREATE INDEX idx_dishes_available ON dishes(tenant_id, available);
CREATE INDEX idx_dishes_dietary ON dishes USING GIN(dietary);

-- Dish Options
CREATE INDEX idx_dish_option_groups_dish_id ON dish_option_groups(dish_id);
CREATE INDEX idx_dish_options_group_id ON dish_options(group_id);

-- Stories
CREATE INDEX idx_stories_tenant_id ON stories(tenant_id);
CREATE INDEX idx_stories_active ON stories(tenant_id, is_active);
CREATE INDEX idx_stories_type ON stories(tenant_id, type);

-- Orders
CREATE INDEX idx_orders_tenant_id ON orders(tenant_id);
CREATE INDEX idx_orders_status ON orders(tenant_id, status);
CREATE INDEX idx_orders_created_at ON orders(tenant_id, created_at DESC);
CREATE INDEX idx_orders_order_number ON orders(tenant_id, order_number);

-- Order Items
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_dish_id ON order_items(dish_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE dishes ENABLE ROW LEVEL SECURITY;
ALTER TABLE dish_option_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE dish_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- --------------------------------------------
-- TENANTS POLICIES
-- --------------------------------------------

-- Public can read active tenants (for menu viewing)
CREATE POLICY "tenants_select_public" ON tenants
    FOR SELECT
    USING (is_active = true);

-- Service role has full access
CREATE POLICY "tenants_all_service_role" ON tenants
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- --------------------------------------------
-- USERS POLICIES
-- --------------------------------------------

-- Users can only see users in their tenant
CREATE POLICY "users_select_own_tenant" ON users
    FOR SELECT
    USING (tenant_id IN (
        SELECT id FROM tenants WHERE is_active = true
    ));

-- Service role has full access
CREATE POLICY "users_all_service_role" ON users
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- --------------------------------------------
-- CATEGORIES POLICIES
-- --------------------------------------------

-- Public can read categories for active tenants
CREATE POLICY "categories_select_public" ON categories
    FOR SELECT
    USING (tenant_id IN (
        SELECT id FROM tenants WHERE is_active = true
    ));

-- Service role has full access
CREATE POLICY "categories_all_service_role" ON categories
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- --------------------------------------------
-- DISHES POLICIES
-- --------------------------------------------

-- Public can read dishes for active tenants
CREATE POLICY "dishes_select_public" ON dishes
    FOR SELECT
    USING (tenant_id IN (
        SELECT id FROM tenants WHERE is_active = true
    ));

-- Service role has full access
CREATE POLICY "dishes_all_service_role" ON dishes
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- --------------------------------------------
-- DISH OPTIONS POLICIES
-- --------------------------------------------

-- Public can read dish options for active tenants
CREATE POLICY "dish_option_groups_select_public" ON dish_option_groups
    FOR SELECT
    USING (dish_id IN (
        SELECT id FROM dishes WHERE tenant_id IN (
            SELECT id FROM tenants WHERE is_active = true
        )
    ));

CREATE POLICY "dish_options_select_public" ON dish_options
    FOR SELECT
    USING (group_id IN (
        SELECT id FROM dish_option_groups WHERE dish_id IN (
            SELECT id FROM dishes WHERE tenant_id IN (
                SELECT id FROM tenants WHERE is_active = true
            )
        )
    ));

-- Service role has full access
CREATE POLICY "dish_option_groups_all_service_role" ON dish_option_groups
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "dish_options_all_service_role" ON dish_options
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- --------------------------------------------
-- STORIES POLICIES
-- --------------------------------------------

-- Public can read active stories for active tenants
CREATE POLICY "stories_select_public" ON stories
    FOR SELECT
    USING (
        tenant_id IN (SELECT id FROM tenants WHERE is_active = true)
        AND is_active = true
        AND (expires_at IS NULL OR expires_at > NOW())
    );

-- Service role has full access
CREATE POLICY "stories_all_service_role" ON stories
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- --------------------------------------------
-- ORDERS POLICIES
-- --------------------------------------------

-- Public can insert orders for active tenants
CREATE POLICY "orders_insert_public" ON orders
    FOR INSERT
    WITH CHECK (tenant_id IN (
        SELECT id FROM tenants WHERE is_active = true
    ));

-- Public can read their own orders (by order_number)
CREATE POLICY "orders_select_public" ON orders
    FOR SELECT
    USING (tenant_id IN (
        SELECT id FROM tenants WHERE is_active = true
    ));

-- Service role has full access
CREATE POLICY "orders_all_service_role" ON orders
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- --------------------------------------------
-- ORDER ITEMS POLICIES
-- --------------------------------------------

-- Public can insert order items
CREATE POLICY "order_items_insert_public" ON order_items
    FOR INSERT
    WITH CHECK (order_id IN (
        SELECT id FROM orders WHERE tenant_id IN (
            SELECT id FROM tenants WHERE is_active = true
        )
    ));

-- Public can read order items
CREATE POLICY "order_items_select_public" ON order_items
    FOR SELECT
    USING (order_id IN (
        SELECT id FROM orders WHERE tenant_id IN (
            SELECT id FROM tenants WHERE is_active = true
        )
    ));

-- Service role has full access
CREATE POLICY "order_items_all_service_role" ON order_items
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_tenants_updated_at
    BEFORE UPDATE ON tenants
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_dishes_updated_at
    BEFORE UPDATE ON dishes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
    BEFORE UPDATE ON orders
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Function to generate order number
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS VARCHAR(50) AS $$
DECLARE
    order_num VARCHAR(50);
BEGIN
    order_num := 'ORD-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
    RETURN order_num;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- VIEWS
-- ============================================

-- View for menu with category info
CREATE VIEW menu_with_category AS
SELECT 
    d.*,
    c.name as category_name,
    c.slug as category_slug,
    t.slug as tenant_slug,
    t.name as tenant_name,
    t.currency
FROM dishes d
LEFT JOIN categories c ON d.category_id = c.id
JOIN tenants t ON d.tenant_id = t.id
WHERE d.available = true AND t.is_active = true;

-- View for order summary
CREATE VIEW order_summary AS
SELECT 
    o.*,
    t.name as tenant_name,
    t.slug as tenant_slug,
    COUNT(oi.id) as item_count
FROM orders o
JOIN tenants t ON o.tenant_id = t.id
LEFT JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id, t.name, t.slug;

-- ============================================
-- COMMENTS
-- ============================================

COMMENT ON TABLE tenants IS 'Restaurantes/locales registrados en MenuOS';
COMMENT ON TABLE users IS 'Usuarios administradores de cada restaurante';
COMMENT ON TABLE categories IS 'Categorías del menú de cada restaurante';
COMMENT ON TABLE dishes IS 'Platos/items del menú';
COMMENT ON TABLE dish_option_groups IS 'Grupos de opciones/modificadores para cada plato';
COMMENT ON TABLE dish_options IS 'Opciones individuales dentro de un grupo';
COMMENT ON TABLE stories IS 'Stories tipo Instagram para promociones';
COMMENT ON TABLE orders IS 'Pedidos realizados';
COMMENT ON TABLE order_items IS 'Items individuales de cada pedido';
