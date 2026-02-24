-- ============================================
-- MenuOS - Seed Data for Demo
-- Version: 1.0.0
-- Created: 2026-02-21
-- ============================================
-- Este script inserta datos de demostración
-- Ejecutar DESPUÉS de 001_initial_schema.sql
-- ============================================

-- ============================================
-- TENANTS (Restaurantes de demostración)
-- ============================================

INSERT INTO tenants (id, slug, name, tagline, logo_url, cover_image_url, primary_color, secondary_color, accent_color, currency) VALUES
(
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'demo-grill',
    'Demo Grill',
    'Auténtico sabor americano',
    'https://images.unsplash.com/photo-1550537687-9be531a1b5c3?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&h=400&fit=crop',
    '#E63946',
    '#1D3557',
    '#F4A261',
    '$'
),
(
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'sushi-master',
    'Sushi Master',
    'Tradición japonesa contemporánea',
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&h=400&fit=crop',
    '#1B4332',
    '#081C15',
    '#DAD7CD',
    '$'
),
(
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'green-eats',
    'Green Eats',
    'Comida saludable y deliciosa',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=400&fit=crop',
    '#2D6A4F',
    '#1B4332',
    '#95D5B2',
    '$'
);

-- ============================================
-- USERS (Usuarios administradores)
-- ============================================

INSERT INTO users (id, tenant_id, email, full_name, role) VALUES
(
    'u1a2b3c4-d5e6-7890-abcd-ef1234567890',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'admin@demogrill.com',
    'Juan Pérez',
    'admin'
),
(
    'u2b3c4d5-e6f7-8901-bcde-f12345678901',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'admin@sushimaster.com',
    'Kenji Tanaka',
    'admin'
),
(
    'u3c4d5e6-f7a8-9012-cdef-123456789012',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'admin@greeneats.com',
    'María García',
    'admin'
);

-- ============================================
-- CATEGORIES - Demo Grill
-- ============================================

INSERT INTO categories (id, tenant_id, name, slug, description, image_url, display_order) VALUES
('cat-grill-001', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Entradas', 'entradas', 'Para compartir', 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop', 1),
('cat-grill-002', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Hamburguesas', 'hamburguesas', 'Nuestras clásicas burgers', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', 2),
('cat-grill-003', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Cortes', 'cortes', 'Cortes premium a la parrilla', 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop', 3),
('cat-grill-004', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Acompañamientos', 'acompanamientos', 'Side dishes', 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop', 4),
('cat-grill-005', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Bebidas', 'bebidas', 'Refrescos y más', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', 5);

-- ============================================
-- CATEGORIES - Sushi Master
-- ============================================

INSERT INTO categories (id, tenant_id, name, slug, description, image_url, display_order) VALUES
('cat-sushi-001', 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Nigiri', 'nigiri', 'Sushi tradicional', 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop', 1),
('cat-sushi-002', 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Rolls Especiales', 'rolls-especiales', 'Creaciones del chef', 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop', 2),
('cat-sushi-003', 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Sashimi', 'sashimi', 'Pescado fresco', 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=300&fit=crop', 3),
('cat-sushi-004', 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Entradas Calientes', 'entradas-calientes', 'Gyozas y más', 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop', 4),
('cat-sushi-005', 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Bebidas', 'bebidas', 'Sake y té', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', 5);

-- ============================================
-- CATEGORIES - Green Eats
-- ============================================

INSERT INTO categories (id, tenant_id, name, slug, description, image_url, display_order) VALUES
('cat-green-001', 'c3d4e5f6-a7b8-9012-cdef-123456789012', 'Bowls', 'bowls', 'Buddha bowls nutritivos', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', 1),
('cat-green-002', 'c3d4e5f6-a7b8-9012-cdef-123456789012', 'Ensaladas', 'ensaladas', 'Frescas y crujientes', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', 2),
('cat-green-003', 'c3d4e5f6-a7b8-9012-cdef-123456789012', 'Smoothies', 'smoothies', 'Bebidas energizantes', 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop', 3),
('cat-green-004', 'c3d4e5f6-a7b8-9012-cdef-123456789012', 'Wraps', 'wraps', 'Envueltos saludables', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop', 4),
('cat-green-005', 'c3d4e5f6-a7b8-9012-cdef-123456789012', 'Postres', 'postres', 'Dulces sin culpa', 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop', 5);

-- ============================================
-- DISHES - Demo Grill
-- ============================================

INSERT INTO dishes (id, tenant_id, category_id, name, description, price, image_url, available, dietary, calories, is_popular, is_new, is_chef_choice, ingredients) VALUES
-- Entradas
(
    'dish-grill-001',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-001',
    'Nachos Supreme',
    'Crujientes totopos con queso cheddar, jalapeños, crema agria y guacamole',
    28000.00,
    'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&h=400&fit=crop',
    true,
    ARRAY['vegetarian'],
    650,
    true, false, false,
    ARRAY['Totopos', 'Queso cheddar', 'Jalapeños', 'Crema agria', 'Guacamole']
),
(
    'dish-grill-002',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-001',
    'Alitas BBQ',
    '8 alitas de pollo glaseadas en salsa BBQ ahumada con apio y ranch',
    32000.00,
    'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    720,
    true, false, true,
    ARRAY['Alitas de pollo', 'Salsa BBQ', 'Apio', 'Aderezo ranch']
),
(
    'dish-grill-003',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-001',
    'Onion Rings',
    'Aros de cebolla empanizados con salsa especial de la casa',
    18000.00,
    'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&h=400&fit=crop',
    true,
    ARRAY['vegetarian'],
    450,
    false, false, false,
    ARRAY['Cebolla', 'Empanizado', 'Salsa especial']
),
-- Hamburguesas
(
    'dish-grill-004',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-002',
    'Classic Burger',
    'Carne de res 100% angus, lechuga, tomate, cebolla y salsa especial',
    35000.00,
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    850,
    true, false, false,
    ARRAY['Carne angus', 'Lechuga', 'Tomate', 'Cebolla', 'Pan artesanal']
),
(
    'dish-grill-005',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-002',
    'BBQ Bacon Burger',
    'Doble carne, bacon crujiente, queso cheddar y cebolla caramelizada',
    45000.00,
    'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    1100,
    true, false, true,
    ARRAY['Doble carne', 'Bacon', 'Queso cheddar', 'Cebolla caramelizada', 'Salsa BBQ']
),
(
    'dish-grill-006',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-002',
    'Veggie Burger',
    'Hamburguesa de lentejas con aguacate, espinacas y mayonesa vegana',
    32000.00,
    'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian'],
    580,
    false, true, false,
    ARRAY['Lentejas', 'Aguacate', 'Espinacas', 'Mayonesa vegana']
),
-- Cortes
(
    'dish-grill-007',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-003',
    'Ribeye 400g',
    'Corte premium con papas rústicas y vegetales asados',
    85000.00,
    'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    1200,
    true, false, true,
    ARRAY['Ribeye', 'Papas rústicas', 'Vegetales asados', 'Mantequilla de hierbas']
),
(
    'dish-grill-008',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-003',
    'New York Strip 350g',
    'Corte jugoso con salsa de vino tinto y puré de papa',
    75000.00,
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    980,
    false, false, false,
    ARRAY['New York Strip', 'Salsa de vino', 'Puré de papa']
),
-- Acompañamientos
(
    'dish-grill-009',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-004',
    'Papas Fritas',
    'Crujientes papas con sal marina y hierbas',
    12000.00,
    'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian'],
    380,
    true, false, false,
    ARRAY['Papas', 'Sal marina', 'Hierbas']
),
(
    'dish-grill-010',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-004',
    'Ensalada César',
    'Lechuga romana, parmesano, crutones y aderezo césar',
    18000.00,
    'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&h=400&fit=crop',
    true,
    ARRAY['vegetarian'],
    320,
    false, false, false,
    ARRAY['Lechuga romana', 'Parmesano', 'Crutones', 'Aderezo césar']
),
-- Bebidas
(
    'dish-grill-011',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-005',
    'Limonada de la Casa',
    'Limonada fresca con menta y un toque de jengibre',
    8000.00,
    'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian'],
    120,
    true, false, false,
    ARRAY['Limón', 'Menta', 'Jengibre']
),
(
    'dish-grill-012',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'cat-grill-005',
    'Cerveza Artesanal',
    'Selección de cervezas locales de la casa',
    15000.00,
    'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan'],
    180,
    false, false, false,
    ARRAY['Cerveza artesanal']
);

-- ============================================
-- DISHES - Sushi Master
-- ============================================

INSERT INTO dishes (id, tenant_id, category_id, name, description, price, image_url, available, dietary, calories, is_popular, is_new, is_chef_choice, ingredients) VALUES
-- Nigiri
(
    'dish-sushi-001',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-001',
    'Nigiri Salmón (4 pzas)',
    'Fresco salmón sobre arroz de sushi sazonado',
    28000.00,
    'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    180,
    true, false, false,
    ARRAY['Salmón fresco', 'Arroz de sushi', 'Wasabi']
),
(
    'dish-sushi-002',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-001',
    'Nigiri Mixto (8 pzas)',
    'Selección del chef: salmón, atún, camarón y anguila',
    45000.00,
    'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    320,
    true, false, true,
    ARRAY['Salmón', 'Atún', 'Camarón', 'Anguila', 'Arroz de sushi']
),
-- Rolls Especiales
(
    'dish-sushi-003',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-002',
    'Dragon Roll (8 pzas)',
    'Camarón tempura, aguacate y anguila gratinada',
    52000.00,
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    420,
    true, false, true,
    ARRAY['Camarón tempura', 'Aguacate', 'Anguila', 'Salsa unagi']
),
(
    'dish-sushi-004',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-002',
    'Rainbow Roll (8 pzas)',
    'Roll de cangrejo con sashimi variado encima',
    48000.00,
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    380,
    true, true, false,
    ARRAY['Cangrejo', 'Salmón', 'Atún', 'Aguacate', 'Masago']
),
(
    'dish-sushi-005',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-002',
    'Veggie Roll (6 pzas)',
    'Aguacate, pepino, zanahoria y mango',
    24000.00,
    'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian'],
    220,
    false, false, false,
    ARRAY['Aguacate', 'Pepino', 'Zanahoria', 'Mango']
),
-- Sashimi
(
    'dish-sushi-006',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-003',
    'Sashimi de Salmón (10 pzas)',
    'Finas láminas de salmón fresco con jengibre y wasabi',
    42000.00,
    'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&h=400&fit=crop',
    true,
    ARRAY['gluten-free'],
    200,
    true, false, false,
    ARRAY['Salmón fresco', 'Jengibre', 'Wasabi']
),
(
    'dish-sushi-007',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-003',
    'Sashimi Mixto (12 pzas)',
    'Selección de pescados frescos del día',
    58000.00,
    'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&h=400&fit=crop',
    true,
    ARRAY['gluten-free'],
    280,
    false, false, true,
    ARRAY['Salmón', 'Atún', 'Pescado blanco', 'Jengibre', 'Wasabi']
),
-- Entradas Calientes
(
    'dish-sushi-008',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-004',
    'Gyozas (8 pzas)',
    'Empanaditas japonesas de cerdo y vegetales',
    22000.00,
    'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    280,
    true, false, false,
    ARRAY['Cerdo', 'Repollo', 'Cebollín', 'Salsa de soya']
),
(
    'dish-sushi-009',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-004',
    'Edamame',
    'Vainas de soya con sal marina',
    14000.00,
    'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian', 'gluten-free'],
    180,
    false, false, false,
    ARRAY['Edamame', 'Sal marina']
),
-- Bebidas
(
    'dish-sushi-010',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-005',
    'Sake Premium',
    'Sake japonés de alta calidad (180ml)',
    35000.00,
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'gluten-free'],
    150,
    false, false, false,
    ARRAY['Sake premium']
),
(
    'dish-sushi-011',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'cat-sushi-005',
    'Té Verde Matcha',
    'Té verde ceremonial con espuma suave',
    10000.00,
    'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian', 'gluten-free'],
    5,
    true, false, false,
    ARRAY['Matcha ceremonial']
);

-- ============================================
-- DISHES - Green Eats
-- ============================================

INSERT INTO dishes (id, tenant_id, category_id, name, description, price, image_url, available, dietary, calories, is_popular, is_new, is_chef_choice, ingredients) VALUES
-- Bowls
(
    'dish-green-001',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-001',
    'Buddha Bowl',
    'Quinoa, garbanzos asados, aguacate, kale y aderezo de tahini',
    32000.00,
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian', 'gluten-free'],
    480,
    true, false, true,
    ARRAY['Quinoa', 'Garbanzos', 'Aguacate', 'Kale', 'Tahini']
),
(
    'dish-green-002',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-001',
    'Poke Bowl de Salmón',
    'Salmón fresco, arroz integral, edamame, mango y salsa ponzu',
    42000.00,
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
    true,
    ARRAY['gluten-free'],
    520,
    true, true, false,
    ARRAY['Salmón', 'Arroz integral', 'Edamame', 'Mango', 'Salsa ponzu']
),
(
    'dish-green-003',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-001',
    'Bowl de Pollo',
    'Pechuga grillada, camote, frijoles negros y salsa de aguacate',
    36000.00,
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop',
    true,
    ARRAY['gluten-free'],
    580,
    true, false, false,
    ARRAY['Pechuga de pollo', 'Camote', 'Frijoles negros', 'Aguacate']
),
-- Ensaladas
(
    'dish-green-004',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-002',
    'Ensalada Mediterránea',
    'Lechuga, tomates cherry, aceitunas, queso feta y aderezo de hierbas',
    26000.00,
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop',
    true,
    ARRAY['vegetarian', 'gluten-free'],
    320,
    false, false, false,
    ARRAY['Lechuga', 'Tomates cherry', 'Aceitunas', 'Queso feta']
),
(
    'dish-green-005',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-002',
    'Ensalada de Quinoa',
    'Quinoa, pepino, tomate, menta y limón',
    28000.00,
    'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian', 'gluten-free'],
    380,
    true, false, false,
    ARRAY['Quinoa', 'Pepino', 'Tomate', 'Menta', 'Limón']
),
-- Smoothies
(
    'dish-green-006',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-003',
    'Green Power',
    'Espinaca, plátano, manzana verde y leche de almendras',
    16000.00,
    'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian', 'gluten-free'],
    220,
    true, false, false,
    ARRAY['Espinaca', 'Plátano', 'Manzana verde', 'Leche de almendras']
),
(
    'dish-green-007',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-003',
    'Berry Blast',
    'Mix de berries, plátano y yogurt griego',
    18000.00,
    'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop',
    true,
    ARRAY['vegetarian', 'gluten-free'],
    280,
    true, true, false,
    ARRAY['Moras', 'Fresas', 'Arándanos', 'Plátano', 'Yogurt griego']
),
-- Wraps
(
    'dish-green-008',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-004',
    'Wrap Mediterráneo',
    'Hummus, vegetales asados, queso feta y rúcula',
    24000.00,
    'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop',
    true,
    ARRAY['vegetarian'],
    420,
    false, false, false,
    ARRAY['Hummus', 'Vegetales asados', 'Queso feta', 'Rúcula']
),
(
    'dish-green-009',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-004',
    'Wrap de Pollo',
    'Pechuga a la plancha, aguacate, lechuga y aderezo de yogurt',
    28000.00,
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop',
    true,
    ARRAY[]::TEXT[],
    480,
    true, false, false,
    ARRAY['Pechuga de pollo', 'Aguacate', 'Lechuga', 'Yogurt']
),
-- Postres
(
    'dish-green-010',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-005',
    'Açaí Bowl',
    'Base de açaí con granola, plátano, fresas y miel',
    22000.00,
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop',
    true,
    ARRAY['vegetarian', 'gluten-free'],
    350,
    true, false, true,
    ARRAY['Açaí', 'Granola', 'Plátano', 'Fresas', 'Miel']
),
(
    'dish-green-011',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    'cat-green-005',
    'Energy Balls',
    'Bolitas de dátiles, avena y mantequilla de maní (4 pzas)',
    14000.00,
    'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop',
    true,
    ARRAY['vegan', 'vegetarian'],
    280,
    false, true, false,
    ARRAY['Dátiles', 'Avena', 'Mantequilla de maní']
);

-- ============================================
-- DISH OPTIONS - Demo Grill (para hamburguesas)
-- ============================================

-- Opciones para Classic Burger
INSERT INTO dish_option_groups (id, dish_id, name, min_selections, max_selections, display_order) VALUES
('opt-grp-001', 'dish-grill-004', 'Término de la Carne', 1, 1, 1),
('opt-grp-002', 'dish-grill-004', 'Adiciones', 0, 5, 2);

INSERT INTO dish_options (id, group_id, name, price, available, display_order) VALUES
-- Término de la Carne
('opt-001', 'opt-grp-001', 'Término 3/4 (Medio)', 0, true, 1),
('opt-002', 'opt-grp-001', 'Bien cocido', 0, true, 2),
('opt-003', 'opt-grp-001', 'Medio rojo', 0, true, 3),
-- Adiciones
('opt-004', 'opt-grp-002', 'Queso extra', 5000.00, true, 1),
('opt-005', 'opt-grp-002', 'Bacon', 8000.00, true, 2),
('opt-006', 'opt-grp-002', 'Huevo frito', 6000.00, true, 3),
('opt-007', 'opt-grp-002', 'Aguacate', 7000.00, true, 4),
('opt-008', 'opt-grp-002', 'Jalapeños extra', 3000.00, true, 5);

-- Opciones para Ribeye
INSERT INTO dish_option_groups (id, dish_id, name, min_selections, max_selections, display_order) VALUES
('opt-grp-003', 'dish-grill-007', 'Término del Corte', 1, 1, 1),
('opt-grp-004', 'dish-grill-007', 'Salsa', 0, 2, 2);

INSERT INTO dish_options (id, group_id, name, price, available, display_order) VALUES
-- Término del Corte
('opt-009', 'opt-grp-003', 'Medio rojo', 0, true, 1),
('opt-010', 'opt-grp-003', 'Término 3/4', 0, true, 2),
('opt-011', 'opt-grp-003', 'Bien cocido', 0, true, 3),
-- Salsas
('opt-012', 'opt-grp-004', 'Salsa de vino tinto', 0, true, 1),
('opt-013', 'opt-grp-004', 'Salsa de champiñones', 0, true, 2),
('opt-014', 'opt-grp-004', 'Mantequilla de hierbas', 0, true, 3);

-- ============================================
-- STORIES - Demo Grill
-- ============================================

INSERT INTO stories (id, tenant_id, title, type, image_url, linked_dish_id, button_text, view_count, is_active) VALUES
(
    'story-grill-001',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    '🔥 Nueva BBQ Bacon Burger',
    'dish',
    'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=1000&fit=crop',
    'dish-grill-005',
    'Ver plato',
    245,
    true
),
(
    'story-grill-002',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    '👨‍🍳 Especial del Chef: Ribeye',
    'chef',
    'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=1000&fit=crop',
    'dish-grill-007',
    'Ordenar ahora',
    189,
    true
),
(
    'story-grill-003',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    '🎉 2x1 en Alitas los Martes',
    'promo',
    'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&h=1000&fit=crop',
    'dish-grill-002',
    'Ver promoción',
    567,
    true
);

-- ============================================
-- STORIES - Sushi Master
-- ============================================

INSERT INTO stories (id, tenant_id, title, type, image_url, linked_dish_id, button_text, view_count, is_active) VALUES
(
    'story-sushi-001',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    '🐉 Dragon Roll Especial',
    'dish',
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=1000&fit=crop',
    'dish-sushi-003',
    'Ver plato',
    312,
    true
),
(
    'story-sushi-002',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    '✨ Nuevo: Rainbow Roll',
    'dish',
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&h=1000&fit=crop',
    'dish-sushi-004',
    'Probar ahora',
    178,
    true
),
(
    'story-sushi-003',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    '🍣 Omakase Experience',
    'chef',
    'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&h=1000&fit=crop',
    'dish-sushi-007',
    'Reservar',
    423,
    true
);

-- ============================================
-- STORIES - Green Eats
-- ============================================

INSERT INTO stories (id, tenant_id, title, type, image_url, linked_dish_id, button_text, view_count, is_active) VALUES
(
    'story-green-001',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    '🥗 Buddha Bowl del Día',
    'dish',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=1000&fit=crop',
    'dish-green-001',
    'Ver plato',
    234,
    true
),
(
    'story-green-002',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    '🍓 Smoothie Berry Blast',
    'dish',
    'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=1000&fit=crop',
    'dish-green-007',
    'Ordenar',
    156,
    true
),
(
    'story-green-003',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    '💚 Detox Week: 20% OFF',
    'promo',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=1000&fit=crop',
    'dish-green-002',
    'Ver oferta',
    389,
    true
);

-- ============================================
-- VERIFICATION
-- ============================================

-- Verificar inserciones
SELECT 'Tenants' as tabla, COUNT(*) as registros FROM tenants
UNION ALL
SELECT 'Users', COUNT(*) FROM users
UNION ALL
SELECT 'Categories', COUNT(*) FROM categories
UNION ALL
SELECT 'Dishes', COUNT(*) FROM dishes
UNION ALL
SELECT 'Dish Option Groups', COUNT(*) FROM dish_option_groups
UNION ALL
SELECT 'Dish Options', COUNT(*) FROM dish_options
UNION ALL
SELECT 'Stories', COUNT(*) FROM stories;

-- ============================================
-- FIN DEL SEED
-- ============================================
