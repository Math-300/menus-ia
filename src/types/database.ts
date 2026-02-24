export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export interface Database {
    public: {
        Tables: {
            tenants: {
                Row: {
                    id: string;
                    slug: string;
                    name: string;
                    logo_url: string | null;
                    cover_url: string | null;
                    primary_color: string;
                    secondary_color: string | null;
                    font_family: string | null;
                    currency: string;
                    locale: string;
                    tagline: string | null;
                    description: string | null;
                    address: string | null;
                    phone: string | null;
                    whatsapp: string | null;
                    hours: Json | null;
                    social_links: Json | null;
                    settings: Json | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    slug: string;
                    name: string;
                    logo_url?: string | null;
                    cover_url?: string | null;
                    primary_color?: string;
                    secondary_color?: string | null;
                    font_family?: string | null;
                    currency?: string;
                    locale?: string;
                    tagline?: string | null;
                    description?: string | null;
                    address?: string | null;
                    phone?: string | null;
                    whatsapp?: string | null;
                    hours?: Json | null;
                    social_links?: Json | null;
                    settings?: Json | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    slug?: string;
                    name?: string;
                    logo_url?: string | null;
                    cover_url?: string | null;
                    primary_color?: string;
                    secondary_color?: string | null;
                    font_family?: string | null;
                    currency?: string;
                    locale?: string;
                    tagline?: string | null;
                    description?: string | null;
                    address?: string | null;
                    phone?: string | null;
                    whatsapp?: string | null;
                    hours?: Json | null;
                    social_links?: Json | null;
                    settings?: Json | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            users: {
                Row: {
                    id: string;
                    tenant_id: string;
                    email: string;
                    full_name: string | null;
                    role: string;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    tenant_id: string;
                    email: string;
                    full_name?: string | null;
                    role?: string;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    tenant_id?: string;
                    email?: string;
                    full_name?: string | null;
                    role?: string;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            categories: {
                Row: {
                    id: string;
                    tenant_id: string;
                    name: string;
                    slug: string;
                    image_url: string | null;
                    display_order: number;
                    is_active: boolean;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    tenant_id: string;
                    name: string;
                    slug: string;
                    image_url?: string | null;
                    display_order?: number;
                    is_active?: boolean;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    tenant_id?: string;
                    name?: string;
                    slug?: string;
                    image_url?: string | null;
                    display_order?: number;
                    is_active?: boolean;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            dishes: {
                Row: {
                    id: string;
                    tenant_id: string;
                    category_id: string | null;
                    name: string;
                    description: string | null;
                    price: number;
                    image_url: string | null;
                    available: boolean;
                    dietary: string[];
                    is_popular: boolean;
                    is_chef_choice: boolean;
                    is_new: boolean;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    tenant_id: string;
                    category_id?: string | null;
                    name: string;
                    description?: string | null;
                    price: number;
                    image_url?: string | null;
                    available?: boolean;
                    dietary?: string[];
                    is_popular?: boolean;
                    is_chef_choice?: boolean;
                    is_new?: boolean;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    tenant_id?: string;
                    category_id?: string | null;
                    name?: string;
                    description?: string | null;
                    price?: number;
                    image_url?: string | null;
                    available?: boolean;
                    dietary?: string[];
                    is_popular?: boolean;
                    is_chef_choice?: boolean;
                    is_new?: boolean;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            dish_option_groups: {
                Row: {
                    id: string;
                    dish_id: string;
                    name: string;
                    min_selections: number;
                    max_selections: number;
                    display_order: number;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    dish_id: string;
                    name: string;
                    min_selections?: number;
                    max_selections?: number;
                    display_order?: number;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    dish_id?: string;
                    name?: string;
                    min_selections?: number;
                    max_selections?: number;
                    display_order?: number;
                    created_at?: string;
                };
            };
            dish_options: {
                Row: {
                    id: string;
                    group_id: string;
                    name: string;
                    price: number;
                    available: boolean;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    group_id: string;
                    name: string;
                    price?: number;
                    available?: boolean;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    group_id?: string;
                    name?: string;
                    price?: number;
                    available?: boolean;
                    created_at?: string;
                };
            };
            stories: {
                Row: {
                    id: string;
                    tenant_id: string;
                    title: string;
                    type: string;
                    image_url: string | null;
                    video_url: string | null;
                    linked_dish_id: string | null;
                    is_active: boolean;
                    view_count: number;
                    expires_at: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    tenant_id: string;
                    title: string;
                    type: string;
                    image_url?: string | null;
                    video_url?: string | null;
                    linked_dish_id?: string | null;
                    is_active?: boolean;
                    view_count?: number;
                    expires_at?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    tenant_id?: string;
                    title?: string;
                    type?: string;
                    image_url?: string | null;
                    video_url?: string | null;
                    linked_dish_id?: string | null;
                    is_active?: boolean;
                    view_count?: number;
                    expires_at?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            orders: {
                Row: {
                    id: string;
                    tenant_id: string;
                    customer_name: string;
                    customer_phone: string | null;
                    customer_email: string | null;
                    status: string;
                    total: number;
                    payment_status: string;
                    payment_method: string | null;
                    payment_id: string | null;
                    notes: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    tenant_id: string;
                    customer_name: string;
                    customer_phone?: string | null;
                    customer_email?: string | null;
                    status?: string;
                    total: number;
                    payment_status?: string;
                    payment_method?: string | null;
                    payment_id?: string | null;
                    notes?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    tenant_id?: string;
                    customer_name?: string;
                    customer_phone?: string | null;
                    customer_email?: string | null;
                    status?: string;
                    total?: number;
                    payment_status?: string;
                    payment_method?: string | null;
                    payment_id?: string | null;
                    notes?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            order_items: {
                Row: {
                    id: string;
                    order_id: string;
                    dish_id: string | null;
                    dish_name: string;
                    quantity: number;
                    unit_price: number;
                    total_price: number;
                    notes: string | null;
                    selected_options: Json | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    order_id: string;
                    dish_id?: string | null;
                    dish_name: string;
                    quantity: number;
                    unit_price: number;
                    total_price: number;
                    notes?: string | null;
                    selected_options?: Json | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    order_id?: string;
                    dish_id?: string | null;
                    dish_name?: string;
                    quantity?: number;
                    unit_price?: number;
                    total_price?: number;
                    notes?: string | null;
                    selected_options?: Json | null;
                    created_at?: string;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
    };
}

export type Tables<T extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][T]['Row'];

export type InsertTables<T extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][T]['Insert'];

export type UpdateTables<T extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][T]['Update'];

// API Response Types
export interface ApiResponse<T> {
    data?: T;
    error?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// Admin-specific types
export interface CategoryWithDishes extends Tables<'categories'> {
    dishes: Tables<'dishes'>[];
}

export interface DishWithCategory extends Tables<'dishes'> {
    categories: Tables<'categories'> | null;
}

export interface DishWithModifiers extends Tables<'dishes'> {
    categories: Tables<'categories'> | null;
    dish_option_groups: (Tables<'dish_option_groups'> & {
        dish_options: Tables<'dish_options'>[];
    })[];
}

export interface StoryWithDish extends Tables<'stories'> {
    dishes: Tables<'dishes'> | null;
}

export interface OrderWithItems extends Tables<'orders'> {
    order_items: Tables<'order_items'>[];
}
