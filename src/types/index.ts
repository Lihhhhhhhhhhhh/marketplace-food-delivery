import type { Database } from "./supabase";

// Re-export database types
export type { Database };

// User types
export type UserRole = "customer" | "seller" | "admin";

export interface User {
    id: string;
    email: string;
    full_name: string | null;
    phone: string | null;
    role: UserRole;
    avatar_url: string | null;
    created_at: string;
}

// Store types
export interface Store {
    id: string;
    owner_id: string;
    name: string;
    slug: string;
    description: string | null;
    logo_url: string | null;
    address: string | null;
    is_open: boolean;
    created_at: string;
}

// Category types
export type CategorySlug = "makanan" | "minuman";

export interface Category {
    id: string;
    name: string;
    slug: CategorySlug;
    icon: string | null;
}

// Product types
export interface Product {
    id: string;
    store_id: string;
    category_id: string;
    name: string;
    description: string | null;
    image_url: string | null;
    stock: number;
    is_available: boolean;
    created_at: string;
    // Relations
    store?: Store;
    category?: Category;
    variants?: ProductVariant[];
}

// Product Variant (size-based pricing)
export interface ProductVariant {
    id: string;
    product_id: string;
    size_name: string; // e.g., "Small", "Medium", "Large"
    price: number;
    stock: number;
}

// Cart types
export interface CartItem {
    id: string;
    user_id: string;
    product_id: string;
    variant_id: string | null;
    quantity: number;
    notes: string | null;
    created_at: string;
    // Relations
    product?: Product;
    variant?: ProductVariant;
}

// Order types
export type OrderStatus =
    | "pending"
    | "confirmed"
    | "preparing"
    | "ready"
    | "delivered"
    | "cancelled";

export type PaymentStatus = "unpaid" | "paid" | "refunded";

export interface Order {
    id: string;
    user_id: string;
    store_id: string;
    status: OrderStatus;
    total_amount: number;
    delivery_address: string;
    payment_method: string;
    payment_status: PaymentStatus;
    notes: string | null;
    created_at: string;
    // Relations
    user?: User;
    store?: Store;
    items?: OrderItem[];
}

export interface OrderItem {
    id: string;
    order_id: string;
    product_id: string;
    variant_id: string | null;
    product_name: string;
    variant_name: string | null;
    product_price: number;
    quantity: number;
    subtotal: number;
}
