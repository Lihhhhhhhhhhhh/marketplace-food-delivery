# 📋 Planning Document - Food Delivery Website

> **Project Name:** Website Galih Food Delivery  
> **Type:** Usaha Personal (Single Store)  
> **Tech Stack:** Next.js 16 + Supabase + Tailwind CSS  
> **Created:** 2026-02-02

---

## 🎯 Ringkasan Proyek

Website untuk usaha personal penjualan makanan dan minuman. Customer dapat melihat menu, menambahkan ke keranjang, dan melakukan checkout. Homepage berfungsi sebagai **jendela toko** yang memamerkan penawaran terbaik untuk menarik pengunjung.

---

## 📊 App Flow Diagram

> 📎 **Referensi:** Lihat gambar app flow yang sudah di-share sebelumnya

### Alur Utama (Customer Journey)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            USER / PELANGGAN                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. Mulai                                                                   │
│     ↓                                                                       │
│  2. Buka Website Galih                                                      │
│     ↓                                                                       │
│  3. Lihat Menu & Penawaran Terbaik                                         │
│     ↓                                                                       │
│  4. Tambah Menu ke Keranjang                                               │
│     ↓                                                                       │
│  5. Klik Tombol Checkout ─────────────────────────────────────┐             │
│                                                                │             │
│  ┌─────────────────────── SISTEM WEBSITE ─────────────────────┼───────────┐ │
│  │                                                             ▼           │ │
│  │  6. Apakah Sudah Login? ──────────────────────────────────────┐        │ │
│  │         │                                                      │        │ │
│  │     ┌───┴───┐                                                  │        │ │
│  │   Belum    Sudah                                               │        │ │
│  │     │        │                                                 │        │ │
│  │     ▼        │                                                 │        │ │
│  │  Tampilkan   │                                                 │        │ │
│  │  Form Login  │                                                 │        │ │
│  │     │        │                                                 │        │ │
│  │     ▼        │                                                 │        │ │
│  │  Input       │                                                 │        │ │
│  │  Username &  │                                                 │        │ │
│  │  Password    │                                                 │        │ │
│  │     │        │                                                 │        │ │
│  │     ▼        │                                                 │        │ │
│  │  Login       │                                                 │        │ │
│  │  Valid? ─────┼─────────────────────────────────────────────────┤        │ │
│  │   │  │       │                                                 │        │ │
│  │ Gagal Sukses─┘                                                 │        │ │
│  │   │    │                                                       │        │ │
│  │   │    └───────────────────────┬───────────────────────────────┘        │ │
│  │   │                            ▼                                        │ │
│  │   │  7. Request Cek Stok ──► DATABASE                                   │ │
│  │   │                            │ ┌─────────────┬─────────────┐          │ │
│  │   │                            │ │  Data User  │ Data Stok   │          │ │
│  │   │                            │ │             │  Produk     │          │ │
│  │   │                            │ └─────────────┴─────────────┘          │ │
│  │   │                            ▼                                        │ │
│  │   │  8. Stok Tersedia? ────────┐                                        │ │
│  │   │         │                  │                                        │ │
│  │   │     ┌───┴───┐              │                                        │ │
│  │   │   Tidak    Ya              │                                        │ │
│  │   │     │       │              │                                        │ │
│  │   │     ▼       ▼              │                                        │ │
│  │   │  Tampilkan  Tampilkan      │                                        │ │
│  │   │  "Stok      Total &        │                                        │ │
│  │   │  Habis"     Metode Bayar   │                                        │ │
│  │   │     │       │              │                                        │ │
│  │   │     │       ▼              │                                        │ │
│  │   │     │  9. Proses           │                                        │ │
│  │   │     │     Penyimpanan      │                                        │ │
│  │   │     │     Data ───────────►│ Simpan Order                           │ │
│  │   │     │       │              │ & Kurangi Stok                         │ │
│  │   │     │       ▼              │                                        │ │
│  │   └─────┼── 10. Lakukan        │                                        │ │
│  │         │      Pembayaran      │                                        │ │
│  │         │       │              │                                        │ │
│  │         │       ▼              │                                        │ │
│  │         │  11. Terima          │                                        │ │
│  │         │      Notifikasi      │                                        │ │
│  │         │      Sukses          │                                        │ │
│  │         │       │              │                                        │ │
│  │         │       ▼              │                                        │ │
│  │         └──► SELESAI           │                                        │ │
│  │                                │                                        │ │
│  └────────────────────────────────┴────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 👥 User Roles

| Role | Deskripsi | Akses |
|------|-----------|-------|
| **Guest** | Pengunjung tanpa login | Browse menu, lihat produk, tambah ke cart |
| **Customer** | User terdaftar (Pembeli) | Semua akses Guest + checkout, order history, profil |
| **Admin** | Pemilik usaha | Full access, manage produk, manage orders, update stok |

---

## 📱 Fitur Utama

### 1. **Homepage (Jendela Toko)**
- [ ] Kategori makanan (Makanan, Minuman)
- [ ] Daftar menu unggulan
- [ ] Filter berdasarkan harga

### 2. **Menu & Produk**
- [ ] Daftar semua menu
- [ ] Detail produk:
  - Gambar produk
  - Nama & deskripsi
  - Variasi ukuran dengan harga berbeda
  - Status ketersediaan stok

### 3. **Keranjang (Cart)**
- [ ] Tambah item ke keranjang
- [ ] Ubah quantity item
- [ ] Hapus item dari keranjang
- [ ] Hitung subtotal & total otomatis

### 4. **Authentication**
- [ ] Register (sebagai Pembeli saja)
- [ ] Login (email/password)
- [ ] Logout
- [ ] Forgot password

### 5. **Checkout & Order**
- [ ] Review order summary
- [ ] Input alamat pengiriman
- [ ] Pilih metode pembayaran
- [ ] Validasi stok sebelum order
- [ ] Buat order
- [ ] Kurangi stok produk

### 6. **Pembayaran**
- [ ] Cash on Delivery (COD)
- [ ] Transfer Bank (manual)

### 7. **Order Management (Customer)**
- [ ] Order history
- [ ] Order detail
- [ ] Order status tracking
- [ ] Cancel order (jika masih pending)

### 8. **Admin Dashboard**
- [ ] Manage produk (CRUD)
- [ ] Update stok
- [ ] Lihat incoming orders
- [ ] Update order status

---

## 🗄️ Database Schema (Draft)

```sql
-- Users table
users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  full_name TEXT,
  phone TEXT,
  role ENUM('customer', 'admin'),
  avatar_url TEXT,
  created_at TIMESTAMP
)

-- Categories table
categories (
  id UUID PRIMARY KEY,
  name TEXT,
  slug TEXT UNIQUE,
  icon TEXT
)

-- Products/Menu table
products (
  id UUID PRIMARY KEY,
  category_id UUID REFERENCES categories(id),
  name TEXT,
  description TEXT,
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP
)

-- Product Variants (Size-based pricing)
product_variants (
  id UUID PRIMARY KEY,
  product_id UUID REFERENCES products(id),
  size_name TEXT,
  price DECIMAL(10,2),
  stock INTEGER DEFAULT 0
)

-- Cart Items table
cart_items (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  product_id UUID REFERENCES products(id),
  variant_id UUID REFERENCES product_variants(id),
  quantity INTEGER,
  notes TEXT,
  created_at TIMESTAMP
)

-- Orders table
orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  status ENUM('pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'),
  total_amount DECIMAL(10,2),
  delivery_address TEXT,
  delivery_name TEXT,
  delivery_phone TEXT,
  payment_method TEXT,
  payment_status ENUM('unpaid', 'paid', 'refunded'),
  notes TEXT,
  created_at TIMESTAMP
)

-- Order Items table
order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  variant_id UUID REFERENCES product_variants(id),
  product_name TEXT,
  variant_name TEXT,
  product_price DECIMAL(10,2),
  quantity INTEGER,
  subtotal DECIMAL(10,2)
)
```

---

## 📁 Struktur Folder (Proposed)

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (main)/
│   │   ├── page.tsx              # Homepage (Jendela Toko)
│   │   ├── menu/
│   │   │   └── page.tsx          # Semua Menu
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   └── checkout/
│   │       └── page.tsx
│   ├── dashboard/
│   │   ├── customer/
│   │   │   ├── orders/
│   │   │   └── profile/
│   │   └── admin/
│   │       ├── products/
│   │       ├── orders/
│   │       └── categories/
│   └── api/
├── components/
│   ├── ui/
│   ├── layout/
│   └── features/
├── lib/
│   ├── supabase/
│   └── utils/
├── hooks/
├── types/
└── styles/
```

---

## 🚀 Development Phases

### Phase 1: Foundation (MVP)
1. Setup project structure
2. Authentication (login/register sebagai pembeli)
3. Homepage dengan banner & menu unggulan
4. Daftar menu dengan variasi ukuran
5. Cart functionality
6. Basic checkout (COD only)
7. Order history

### Phase 2: Enhancement
1. Admin dashboard
2. Stock management
3. Order status tracking
4. Filter by price
5. Categories

### Phase 3: Advanced
1. Payment gateway integration
2. Notifications
3. Analytics

---

## ✅ Next Steps

1. **[ ] Review planning document ini**
2. **[ ] Buat database schema di Supabase**
3. **[ ] Setup authentication dengan Supabase Auth**
4. **[ ] Mulai development Phase 1**

---

> 💡 **Note:** Dokumen ini akan di-update seiring progress development.
