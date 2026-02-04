# 🎨 Admin Phase Wireframes - Food Delivery Website

> **Project:** Website Galih Food Delivery  
> **Phase:** Admin Dashboard  
> **Fidelity:** Mid-Fi (Grayscale structure with layout focus)  
> **Approach:** Mobile-First

---

## 📋 Admin Screen List

| # | Screen | Priority | Route | States |
|---|--------|----------|-------|--------|
| 1 | Admin Dashboard (Overview) | P0 | `/dashboard/admin` | Ideal |
| 2 | Products List | P0 | `/dashboard/admin/products` | Empty, Loading, Ideal |
| 3 | Add/Edit Product | P0 | `/dashboard/admin/products/new` | Ideal, Error |
| 4 | Categories | P1 | `/dashboard/admin/categories` | Empty, Ideal |
| 5 | Orders Management | P0 | `/dashboard/admin/orders` | Empty, Loading, Ideal |
| 6 | Order Detail | P0 | `/dashboard/admin/orders/[id]` | Ideal |

---

## 🖼️ Wireframes

---

### 1. Admin Dashboard (Overview)

**Route:** `/dashboard/admin`  
**Priority:** P0  
**Fungsi:** Overview dashboard untuk melihat ringkasan bisnis

#### Mobile Layout (< 768px)

```
┌──────────────────────────────────────┐
│ ☰         Admin Panel          👤    │  ← Header + hamburger menu
├──────────────────────────────────────┤
│                                      │
│  Selamat Datang, Admin!              │
│  2 Feb 2026                          │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  📊 Ringkasan Hari Ini               │
│                                      │
│  ┌────────────┐  ┌────────────┐     │
│  │    📦      │  │    💰      │     │
│  │    12      │  │  850rb     │     │
│  │  Pesanan   │  │ Pendapatan │     │  ← Summary Cards
│  └────────────┘  └────────────┘     │
│                                      │
│  ┌────────────┐  ┌────────────┐     │
│  │    🍔      │  │    ⚠️      │     │
│  │    25      │  │     3      │     │
│  │  Produk    │  │ Stok Habis │     │
│  └────────────┘  └────────────┘     │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  🔔 Pesanan Baru                     │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ #ORD-012         2 menit lalu│    │
│  │ Ahmad • Rp 68.000            │    │
│  │ ┌─────────┐ ┌─────────┐      │    │
│  │ │ Konfirm │ │ Detail  │      │    │  ← Quick actions
│  │ └─────────┘ └─────────┘      │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ #ORD-011         5 menit lalu│    │
│  │ Budi • Rp 45.000             │    │
│  │ ┌─────────┐ ┌─────────┐      │    │
│  │ │ Konfirm │ │ Detail  │      │    │
│  │ └─────────┘ └─────────┘      │    │
│  └──────────────────────────────┘    │
│                                      │
│         [ Lihat Semua → ]            │
│                                      │
├──────────────────────────────────────┤
│  🏠 Home  │  📦 Pesanan  │  🍔 Produk │  ← Bottom nav
└──────────────────────────────────────┘
```

#### Desktop Layout (≥ 1024px)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🍽️ Galih Food Admin                                         👤 Admin ▼     │
├─────────────────────────────────────────────────────────────────────────────┤
│            │                                                                │
│ ┌────────┐ │  Selamat Datang, Admin!                                       │
│ │ 🏠     │ │  Selasa, 2 Februari 2026                                      │
│ │ Home   │ │                                                                │
│ ├────────┤ │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │ 📦     │ │  │   📦     │ │   💰     │ │   🍔     │ │   ⚠️     │          │
│ │ Pesanan│ │  │   12     │ │  850rb   │ │   25     │ │    3     │          │
│ ├────────┤ │  │ Pesanan  │ │Pendapatan│ │ Produk   │ │Stok Habis│          │
│ │ 🍔     │ │  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│ │ Produk │ │                                                                │
│ ├────────┤ ├────────────────────────────────────────────────────────────────│
│ │ 📂     │ │                                                                │
│ │Kategori│ │  🔔 Pesanan Baru                           [ Lihat Semua ]    │
│ ├────────┤ │                                                                │
│ │        │ │  ┌─────────────────────────────────────────────────────────┐  │
│ │        │ │  │ #ORD-012    │ Ahmad    │ Rp 68.000 │ 2m  │ [Konfirm]   │  │
│ │        │ │  ├─────────────────────────────────────────────────────────┤  │
│ │        │ │  │ #ORD-011    │ Budi     │ Rp 45.000 │ 5m  │ [Konfirm]   │  │
│ │ ─────  │ │  ├─────────────────────────────────────────────────────────┤  │
│ │ Logout │ │  │ #ORD-010    │ Citra    │ Rp 32.000 │ 10m │ [Konfirm]   │  │
│ └────────┘ │  └─────────────────────────────────────────────────────────┘  │
│            │                                                                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 2. Products List

**Route:** `/dashboard/admin/products`  
**Priority:** P0

#### Mobile Layout - Ideal State

```
┌──────────────────────────────────────┐
│ ← Kembali     Kelola Produk    ➕   │  ← Add button (orange)
├──────────────────────────────────────┤
│                                      │
│  🔍 Cari produk...                   │  ← Search bar
│                                      │
│  Filter:  ┌────────────┐             │
│           │ Semua ▼    │             │  ← Category filter
│           └────────────┘             │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  ┌──────────────────────────────┐    │
│  │ ┌────┐                       │    │
│  │ │IMG │  Nasi Goreng Spesial  │    │
│  │ │    │  🍔 Makanan           │    │
│  │ └────┘                       │    │
│  │                              │    │
│  │  Variasi:                    │    │
│  │  S: Rp 15.000 (Stok: 10)     │    │
│  │  M: Rp 20.000 (Stok: 15)     │    │
│  │  L: Rp 25.000 (Stok: 5)      │    │
│  │                              │    │
│  │  ┌─────────┐              ⋮  │    │  ← More options (edit/delete)
│  │  │ ✅ Aktif │                │    │  ← Toggle status
│  │  └─────────┘                 │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ ┌────┐                       │    │
│  │ │IMG │  Ayam Geprek          │    │
│  │ │    │  🍔 Makanan           │    │
│  │ └────┘                       │    │
│  │                              │    │
│  │  Variasi:                    │    │
│  │  S: Rp 18.000 (Stok: 8)      │    │
│  │  M: Rp 23.000 (Stok: 12)     │    │
│  │  L: Rp 28.000 (Stok: 0) ⚠️   │    │  ← Low stock warning
│  │                              │    │
│  │  ┌─────────┐              ⋮  │    │
│  │  │ ✅ Aktif │                │    │
│  │  └─────────┘                 │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ ┌────┐                       │    │
│  │ │IMG │  Es Teh Manis         │    │
│  │ │    │  🥤 Minuman           │    │
│  │ └────┘                       │    │
│  │                              │    │
│  │  Variasi:                    │    │
│  │  M: Rp 8.000 (Stok: 20)      │    │
│  │  L: Rp 12.000 (Stok: 18)     │    │
│  │                              │    │
│  │  ┌──────────┐             ⋮  │    │
│  │  │ ❌ Nonaktif│               │    │  ← Disabled state
│  │  └──────────┘                │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│  🏠 Home  │  📦 Pesanan  │  🍔 Produk │
└──────────────────────────────────────┘
```

#### Empty State

```
┌──────────────────────────────────────┐
│ ← Kembali     Kelola Produk    ➕   │
├──────────────────────────────────────┤
│                                      │
│                                      │
│               🍔                     │
│                                      │
│       Belum Ada Produk               │
│                                      │
│   Tambahkan produk pertamamu         │
│       untuk mulai berjualan          │
│                                      │
│      [ + Tambah Produk ]             │  ← Orange btn
│                                      │
│                                      │
└──────────────────────────────────────┘
```

#### Loading State

```
┌──────────────────────────────────────┐
│ ← Kembali     Kelola Produk    ➕   │
├──────────────────────────────────────┤
│                                      │
│  🔍 Cari produk...                   │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  ┌──────────────────────────────┐    │
│  │ ┌────┐                       │    │
│  │ │▓▓▓▓│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓       │    │
│  │ │▓▓▓▓│  ▓▓▓▓▓▓▓▓             │    │  ← Skeleton
│  │ └────┘  ▓▓▓▓▓▓▓▓▓▓▓          │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ ┌────┐                       │    │
│  │ │▓▓▓▓│  ▓▓▓▓▓▓▓▓▓▓           │    │
│  │ │▓▓▓▓│  ▓▓▓▓▓▓               │    │
│  │ └────┘  ▓▓▓▓▓▓▓▓▓▓▓▓▓        │    │
│  └──────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

---

### 3. Add/Edit Product

**Route:** `/dashboard/admin/products/new` atau `/dashboard/admin/products/[id]/edit`  
**Priority:** P0

#### Mobile Layout

```
┌──────────────────────────────────────┐
│ ← Kembali      Tambah Produk        │
├──────────────────────────────────────┤
│                                      │
│  📸 Foto Produk                      │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │     ┌────────────────┐       │    │
│  │     │       📷       │       │    │
│  │     │  Klik untuk    │       │    │  ← Image upload
│  │     │  upload gambar │       │    │
│  │     └────────────────┘       │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  📝 Informasi Produk                 │
│                                      │
│  Nama Produk *                       │
│  ┌────────────────────────────┐      │
│  │ Nasi Goreng Spesial        │      │
│  └────────────────────────────┘      │
│                                      │
│  Kategori *                          │
│  ┌────────────────────────────┐      │
│  │ Pilih Kategori ▼           │      │
│  └────────────────────────────┘      │
│                                      │
│  Deskripsi                           │
│  ┌────────────────────────────┐      │
│  │ Nasi goreng dengan telur   │      │
│  │ dan ayam suwir spesial     │      │
│  │                            │      │
│  └────────────────────────────┘      │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  📦 Variasi & Harga                  │
│                                      │
│  ┌──────────────────────────────┐    │
│  │  Ukuran: S                   │    │
│  │  ┌────────────┐              │    │
│  │  │ S          │  ✕           │    │  ← Remove variant
│  │  └────────────┘              │    │
│  │                              │    │
│  │  Harga *      Stok *         │    │
│  │  ┌────────┐   ┌────────┐     │    │
│  │  │ 15000  │   │  10    │     │    │
│  │  └────────┘   └────────┘     │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │  Ukuran: M                   │    │
│  │  ┌────────────┐              │    │
│  │  │ M          │  ✕           │    │
│  │  └────────────┘              │    │
│  │                              │    │
│  │  Harga *      Stok *         │    │
│  │  ┌────────┐   ┌────────┐     │    │
│  │  │ 20000  │   │  15    │     │    │
│  │  └────────┘   └────────┘     │    │
│  └──────────────────────────────┘    │
│                                      │
│           [ + Tambah Variasi ]       │  ← Secondary btn
│                                      │
├──────────────────────────────────────┤
│                                      │
│  ⚙️ Pengaturan                        │
│                                      │
│  ┌──────────────────────────────┐    │
│  │  Produk Aktif        [====] │    │  ← Toggle (green = on)
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │  Menu Unggulan       [    ] │    │  ← Toggle (gray = off)
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│        [ Simpan Produk ]             │  ← Orange full-width btn
│                                      │
└──────────────────────────────────────┘
```

#### Error State (Validation)

```
┌──────────────────────────────────────┐
│  Nama Produk *                       │
│  ┌────────────────────────────┐      │
│  │                            │ ← Red │
│  └────────────────────────────┘ border│
│  ⚠️ Nama produk wajib diisi          │  ← Red text
│                                      │
│  Harga *                             │
│  ┌────────────────────────────┐      │
│  │ -5000                      │ ← Red │
│  └────────────────────────────┘ border│
│  ⚠️ Harga harus lebih dari 0         │  ← Red text
│                                      │
└──────────────────────────────────────┘
```

---

### 4. Categories

**Route:** `/dashboard/admin/categories`  
**Priority:** P1

#### Mobile Layout

```
┌──────────────────────────────────────┐
│ ← Kembali     Kelola Kategori   ➕  │
├──────────────────────────────────────┤
│                                      │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │   🍔  Makanan                │    │
│  │                              │    │
│  │   5 Produk                   │    │
│  │                              │    │
│  │   ┌───────┐  ┌───────┐       │    │
│  │   │  ✏️   │  │  🗑️   │       │    │  ← Edit / Delete
│  │   │ Edit  │  │ Hapus │       │    │
│  │   └───────┘  └───────┘       │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │   🥤  Minuman                │    │
│  │                              │    │
│  │   3 Produk                   │    │
│  │                              │    │
│  │   ┌───────┐  ┌───────┐       │    │
│  │   │  ✏️   │  │  🗑️   │       │    │
│  │   │ Edit  │  │ Hapus │       │    │
│  │   └───────┘  └───────┘       │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│  🏠 Home  │  📦 Pesanan  │  🍔 Produk │
└──────────────────────────────────────┘
```

#### Add/Edit Category Modal

```
┌──────────────────────────────────────┐
│                                      │
│  ┌──────────────────────────────┐    │
│  │                          ✕   │    │  ← Close modal
│  │                              │    │
│  │      Tambah Kategori         │    │
│  │                              │    │
│  │  Nama Kategori *             │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ Makanan                │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Icon (Emoji)                │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ 🍔                     │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  ┌────────────────────────┐  │    │
│  │  │     [ Simpan ]         │  │    │  ← Orange btn
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

#### Empty State

```
┌──────────────────────────────────────┐
│ ← Kembali     Kelola Kategori   ➕  │
├──────────────────────────────────────┤
│                                      │
│                                      │
│               📂                     │
│                                      │
│      Belum Ada Kategori              │
│                                      │
│   Tambahkan kategori untuk           │
│   mengelompokkan produk kamu         │
│                                      │
│     [ + Tambah Kategori ]            │
│                                      │
│                                      │
└──────────────────────────────────────┘
```

---

### 5. Orders Management

**Route:** `/dashboard/admin/orders`  
**Priority:** P0

#### Mobile Layout

```
┌──────────────────────────────────────┐
│ ← Kembali     Kelola Pesanan        │
├──────────────────────────────────────┤
│                                      │
│  Filter Status:                      │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │Semua │ │Pending│ │Proses│         │  ← Status tabs
│  │ (12) │ │  (5) │ │ (3) │         │     (selected = orange)
│  └──────┘ └──────┘ └──────┘         │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │Siap  │ │Dikirim│ │Selesai│        │
│  │ (2) │ │  (1) │ │ (1) │         │
│  └──────┘ └──────┘ └──────┘         │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  ┌──────────────────────────────┐    │
│  │ #ORD-012       🟡 Pending    │    │  ← Status badge
│  │ 2 Feb 2026, 14:30            │    │
│  │                              │    │
│  │ 👤 Ahmad                     │    │
│  │ 📞 081234567890              │    │
│  │                              │    │
│  │ ────────────────────────     │    │
│  │ • Nasi Goreng (L) x2         │    │
│  │ • Es Teh Manis (M) x2        │    │
│  │ ────────────────────────     │    │
│  │                              │    │
│  │ Total: Rp 68.000             │    │
│  │ 💳 COD                       │    │  ← Payment method
│  │                              │    │
│  │ ┌────────────────────────┐   │    │
│  │ │  Update Status ▼       │   │    │  ← Dropdown action
│  │ └────────────────────────┘   │    │
│  │                              │    │
│  │ [ Lihat Detail ]             │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ #ORD-011       🟠 Diproses   │    │
│  │ 2 Feb 2026, 14:00            │    │
│  │                              │    │
│  │ 👤 Budi                      │    │
│  │ 📞 082345678901              │    │
│  │                              │    │
│  │ • Ayam Geprek (M) x1         │    │
│  │                              │    │
│  │ Total: Rp 23.000             │    │
│  │ 💳 Transfer Bank             │    │
│  │                              │    │
│  │ ┌────────────────────────┐   │    │
│  │ │  Update Status ▼       │   │    │
│  │ └────────────────────────┘   │    │
│  │                              │    │
│  │ [ Lihat Detail ]             │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│  🏠 Home  │  📦 Pesanan  │  🍔 Produk │
└──────────────────────────────────────┘
```

#### Status Update Dropdown

```
┌──────────────────────────────────────┐
│                                      │
│  ┌────────────────────────────┐      │
│  │  Update Status             │      │
│  ├────────────────────────────┤      │
│  │  ○ Pending                 │      │
│  ├────────────────────────────┤      │
│  │  ● Konfirmasi → Diproses   │      │  ← Selected (orange)
│  ├────────────────────────────┤      │
│  │  ○ Siap Diambil/Dikirim    │      │
│  ├────────────────────────────┤      │
│  │  ○ Sedang Dikirim          │      │
│  ├────────────────────────────┤      │
│  │  ○ Selesai                 │      │
│  ├────────────────────────────┤      │
│  │  ○ Batalkan                │      │  ← Red text
│  └────────────────────────────┘      │
│                                      │
└──────────────────────────────────────┘
```

#### Empty State

```
┌──────────────────────────────────────┐
│ ← Kembali     Kelola Pesanan        │
├──────────────────────────────────────┤
│                                      │
│  Filter Status:                      │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │Semua │ │Pending│ │Proses│         │
│  │ (0) │ │  (0) │ │ (0) │         │
│  └──────┘ └──────┘ └──────┘         │
│                                      │
├──────────────────────────────────────┤
│                                      │
│                                      │
│               📋                     │
│                                      │
│       Belum Ada Pesanan              │
│                                      │
│    Pesanan dari customer akan        │
│       muncul di sini                 │
│                                      │
│                                      │
│                                      │
└──────────────────────────────────────┘
```

---

### 6. Order Detail

**Route:** `/dashboard/admin/orders/[id]`  
**Priority:** P0

#### Mobile Layout

```
┌──────────────────────────────────────┐
│ ← Kembali      Detail Pesanan       │
├──────────────────────────────────────┤
│                                      │
│  #ORD-012                           │
│  ┌──────────────┐                   │
│  │ 🟡 Pending   │                   │  ← Current status
│  └──────────────┘                   │
│  2 Februari 2026, 14:30             │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  👤 Informasi Pemesan                │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │  Nama:    Ahmad              │    │
│  │  Telepon: 081234567890       │    │
│  │  Alamat:                     │    │
│  │  Jl. Merdeka No. 123,        │    │
│  │  RT 01/02 Kel. Sukamaju      │    │
│  │                              │    │
│  │  Catatan:                    │    │
│  │  Rumah warna putih,          │    │
│  │  pagar hijau                 │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  🛒 Item Pesanan                     │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │  ┌────┐ Nasi Goreng (L)      │    │
│  │  │IMG │ x2          Rp50.000 │    │
│  │  └────┘                      │    │
│  │                              │    │
│  │  ┌────┐ Es Teh Manis (M)     │    │
│  │  │IMG │ x2          Rp16.000 │    │
│  │  └────┘                      │    │
│  │                              │    │
│  │  ────────────────────────    │    │
│  │  Subtotal          Rp66.000  │    │
│  │  Biaya Layanan      Rp2.000  │    │
│  │  ────────────────────────    │    │
│  │  Total             Rp68.000  │    │  ← Orange bold
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  💳 Pembayaran                       │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │  Metode:   Cash on Delivery  │    │
│  │  Status:   ⏳ Belum Dibayar  │    │  ← Yellow badge
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  📊 Riwayat Status                   │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │  ○ Pesanan Dibuat            │    │
│  │  │ 2 Feb 2026, 14:30         │    │  ← Timeline
│  │  │                           │    │
│  │  ● Menunggu Konfirmasi       │    │  ← Current (orange dot)
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  ┌────────────────────────────┐      │
│  │  Update Status ▼           │      │
│  └────────────────────────────┘      │
│                                      │
│  ┌────────────────────────────────┐  │
│  │      [ Konfirmasi Pesanan ]   │  │  ← Orange btn
│  └────────────────────────────────┘  │
│                                      │
│  ┌────────────────────────────────┐  │
│  │      [ Batalkan Pesanan ]     │  │  ← Red outline btn
│  └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

---

## 🎨 Admin Component Reference

| Component | States | Notes |
|-----------|--------|-------|
| **Sidebar** | Collapsed (mobile), Expanded (desktop) | Orange accent on active |
| **Data Table** | Default, Loading, Empty | Sortable headers |
| **Status Badge** | Pending (yellow), Processing (orange), Ready (blue), Delivered (green), Cancelled (red) | |
| **Toggle Switch** | On (green), Off (gray) | For product status |
| **Action Menu** | Dropdown with Edit/Delete | ⋮ trigger |
| **Modal** | Default, Confirm, Delete | Backdrop blur |
| **Stat Card** | Default, Highlight | Icon + number + label |
| **Search Bar** | Default, Focus, With results | Auto-suggest |

---

## 📐 Admin Layout Patterns

### Mobile Navigation
- **Bottom Nav**: 3 items (Home, Pesanan, Produk)
- **Hamburger Menu**: Full sidebar untuk akses Kategori & Settings

### Desktop Layout
- **Fixed Sidebar**: 200px width, collapsible
- **Main Content**: Fluid, max-width 1400px
- **Top Bar**: Breadcrumb + User dropdown

---

## ✅ Admin Wireframe Checklist

| Screen | Mobile | Desktop | Empty | Loading | Error |
|--------|--------|---------|-------|---------|-------|
| Dashboard | ✅ | ✅ | N/A | N/A | N/A |
| Products List | ✅ | - | ✅ | ✅ | N/A |
| Add/Edit Product | ✅ | - | N/A | N/A | ✅ |
| Categories | ✅ | - | ✅ | N/A | N/A |
| Orders Management | ✅ | - | ✅ | N/A | N/A |
| Order Detail | ✅ | - | N/A | N/A | N/A |

---

## 🔄 Admin Status Flow

```
Pesanan Dibuat (Pending)
        ↓
   [Konfirmasi]
        ↓
   Diproses (Preparing)
        ↓
   [Siap]
        ↓
  Siap Diambil/Dikirim (Ready)
        ↓
   [Kirim]
        ↓
  Sedang Dikirim (Delivering)
        ↓
   [Selesai]
        ↓
    Selesai (Delivered)

    --- atau ---

  [Batalkan] → Dibatalkan (Cancelled)
```

---

> 📎 **Next Steps:**
> 1. Review admin wireframes
> 2. Approve design direction
> 3. Proceed to implementation atau tambahkan desktop version untuk admin screens
