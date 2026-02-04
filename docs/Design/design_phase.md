# 🎨 Design Phase - Food Delivery Website (Usaha Personal)

> **Project:** Website Galih Food Delivery  
> **Type:** Usaha Personal (Single Store)  
> **Theme:** Modern, Luxury White & Orange  
> **Fidelity:** Mid-Fi (Grayscale structure with layout focus)  
> **Approach:** Mobile-First

---

## 🎯 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#F97316` | CTA buttons, highlights, active states |
| `--primary-light` | `#FFF7ED` | Backgrounds, hover states |
| `--primary-dark` | `#EA580C` | Pressed states |
| `--white` | `#FFFFFF` | Main background |
| `--gray-50` | `#F9FAFB` | Secondary background |
| `--gray-100` | `#F3F4F6` | Cards, inputs |
| `--gray-500` | `#6B7280` | Secondary text |
| `--gray-900` | `#111827` | Primary text |
| `--success` | `#22C55E` | Success states |
| `--error` | `#EF4444` | Error states |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Inter | 36px/48px | Bold |
| H2 | Inter | 24px/32px | Bold |
| H3 | Inter | 18px/24px | Semibold |                                                                       
| Body | Inter | 14px/16px | Regular |
| Small | Inter | 12px | Regular |
| Button | Inter | 14px | Medium |

### Spacing System

```
4px  → xs    (micro spacing)
8px  → sm    (element spacing)
16px → md    (section spacing)
24px → lg    (card padding)
32px → xl    (section gaps)
48px → 2xl   (major sections)
```

---

## 📋 Screen List

| # | Screen | Priority | Route | States |
|---|--------|----------|-------|--------|
| 1 | Homepage (Jendela Toko) | P0 | `/` | Ideal |
| 2 | Menu (Daftar Produk) | P0 | `/menu` | Empty, Loading, Ideal |
| 3 | Cart | P0 | `/cart` | Empty, Ideal |
| 4 | Checkout | P0 | `/checkout` | Ideal, Error |
| 5 | Login | P0 | `/login` | Ideal, Error |
| 6 | Register | P0 | `/register` | Ideal, Error |
| 7 | Customer Orders | P1 | `/dashboard/orders` | Empty, Ideal |

---

## 🖼️ Wireframes

---

### 1. Homepage (Jendela Toko)

**Route:** `/`  
**Priority:** P0  
**Fungsi:** Memamerkan penawaran terbaik untuk menarik pengunjung

#### Mobile Layout (< 768px)

```
┌──────────────────────────────────────┐
│ 🍽️ Galih Food            🛒 [Masuk] │  ← Header
├──────────────────────────────────────┤
│                                      │
│         📂 Kategori                  │
│                                      │
│  ┌───────────────┐ ┌───────────────┐ │
│  │      🍔       │ │      🥤       │ │
│  │   Makanan     │ │   Minuman     │ │  ← Category Cards
│  └───────────────┘ └───────────────┘ │     (tap to filter)
│                                      │
├──────────────────────────────────────┤
│                                      │
│      ⭐ Menu Unggulan                │
│                                      │
│  ┌──────────────────────────────┐    │
│  │      [PRODUCT IMAGE]         │    │
│  │                              │    │
│  │  Nasi Goreng Spesial         │    │
│  │  Nasi goreng dengan telur... │    │  ← Product Card
│  │                              │    │
│  │  Pilih Ukuran:               │    │
│  │  ┌─────┐ ┌─────┐ ┌─────┐     │    │
│  │  │ S   │ │ M   │ │ L   │     │    │  ← Size Variants
│  │  │15rb │ │20rb │ │25rb │     │    │     (selected = orange)
│  │  └─────┘ └─────┘ └─────┘     │    │
│  │                              │    │
│  │  [ + Keranjang ]             │    │  ← Add button (orange)
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │      [PRODUCT IMAGE]         │    │
│  │  Es Teh Manis                │    │
│  │  Teh manis segar dingin      │    │
│  │  ┌─────┐ ┌─────┐             │    │
│  │  │ M   │ │ L   │             │    │
│  │  │8rb  │ │12rb │             │    │
│  │  └─────┘ └─────┘             │    │
│  │  [ + Keranjang ]             │    │
│  └──────────────────────────────┘    │
│                                      │
│       [ Lihat Semua Menu → ]         │  ← Link to /menu
│                                      │
├──────────────────────────────────────┤
│ 🍽️ Galih Food                        │
│ Makanan & Minuman Lezat              │  ← Footer
│ 📞 0812-xxx-xxxx                     │
│ © 2026                               │
└──────────────────────────────────────┘
```

#### Desktop Layout (≥ 1024px)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ 🍽️ Galih Food     │    Menu    │    🛒(0)   [ Masuk ]                     │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│                              📂 Kategori                                   │
│                                                                            │
│      ┌────────────────────────────┐    ┌────────────────────────────┐     │
│      │  🍔  Makanan               │    │  🥤  Minuman               │     │
│      └────────────────────────────┘    └────────────────────────────┘     │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                              ⭐ Menu Unggulan                              │
│                                                                            │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐              │
│   │    [IMAGE]     │  │    [IMAGE]     │  │    [IMAGE]     │              │
│   │  Nasi Goreng   │  │  Es Teh Manis  │  │  Ayam Geprek   │              │
│   │  S|M|L         │  │  M|L           │  │  S|M|L         │              │
│   │  15rb - 25rb   │  │  8rb - 12rb    │  │  18rb - 28rb   │              │
│   │ [+ Keranjang]  │  │ [+ Keranjang]  │  │ [+ Keranjang]  │              │
│   └────────────────┘  └────────────────┘  └────────────────┘              │
│                                                                            │
│                        [ Lihat Semua Menu ]                                │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│ 🍽️ Galih Food   │   Menu   │   📞 0812-xxx-xxxx   │   © 2026              │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### 2. Menu (Daftar Produk)

**Route:** `/menu`  
**Priority:** P0

#### Mobile Layout

```
┌──────────────────────────────────────┐
│ ← Kembali        Menu          🛒(2) │
├──────────────────────────────────────┤
│                                      │
│  Filter:                             │
│  ┌────────────┐ ┌────────────┐       │
│  │ Kategori ▼ │ │ Harga ▼    │       │
│  └────────────┘ └────────────┘       │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  🍔 Makanan                          │  ← Category Header
│                                      │
│  ┌──────────────────────────────┐    │
│  │      [PRODUCT IMAGE]         │    │
│  │                              │    │
│  │  Nasi Goreng Spesial         │    │
│  │  Nasi goreng dengan telur    │    │
│  │  dan ayam suwir              │    │
│  │                              │    │
│  │  Pilih Ukuran:               │    │
│  │  ┌─────┐ ┌─────┐ ┌─────┐     │    │
│  │  │ S   │ │ M   │ │ L   │     │    │
│  │  │15rb │ │20rb │ │25rb │     │    │
│  │  └─────┘ └─────┘ └─────┘     │    │
│  │                              │    │
│  │  Stok: ✅ Tersedia           │    │
│  │                              │    │
│  │  [ + Tambah ke Keranjang ]   │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │      [PRODUCT IMAGE]         │    │
│  │  Ayam Geprek                 │    │
│  │  Ayam geprek sambal pedas    │    │
│  │  ┌─────┐ ┌─────┐ ┌─────┐     │    │
│  │  │ S   │ │ M   │ │ L   │     │    │
│  │  │18rb │ │23rb │ │28rb │     │    │
│  │  └─────┘ └─────┘ └─────┘     │    │
│  │  Stok: ✅ Tersedia           │    │
│  │  [ + Tambah ke Keranjang ]   │    │
│  └──────────────────────────────┘    │
│                                      │
│  🥤 Minuman                          │  ← Category Header
│                                      │
│  ┌──────────────────────────────┐    │
│  │      [PRODUCT IMAGE]         │    │
│  │  Es Teh Manis                │    │
│  │  Teh manis segar dingin      │    │
│  │  ┌─────┐ ┌─────┐             │    │
│  │  │ M   │ │ L   │             │    │
│  │  │8rb  │ │12rb │             │    │
│  │  └─────┘ └─────┘             │    │
│  │  Stok: ✅ Tersedia           │    │
│  │  [ + Tambah ke Keranjang ]   │    │
│  └──────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

#### Product Out of Stock State

```
┌──────────────────────────────────────┐
│  ┌──────────────────────────────┐    │
│  │      [PRODUCT IMAGE]         │    │
│  │         (dimmed)             │    │
│  │    ┌─────────────────┐       │    │
│  │    │   STOK HABIS    │       │    │  ← Overlay badge
│  │    └─────────────────┘       │    │
│  │                              │    │
│  │  Mie Goreng                  │    │
│  │  Mie goreng spesial...       │    │
│  │                              │    │
│  │  Stok: ❌ Habis              │    │  ← Red text
│  │                              │    │
│  │  [ Tidak Tersedia ]          │    │  ← Disabled button
│  │       (gray)                 │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
```

#### Empty State

```
┌──────────────────────────────────────┐
│ ← Kembali        Menu          🛒(0) │
├──────────────────────────────────────┤
│                                      │
│                                      │
│               🍽️                     │
│                                      │
│        Menu Belum Tersedia           │
│                                      │
│     Silakan cek kembali nanti        │
│                                      │
│        [ Kembali ke Home ]           │
│                                      │
│                                      │
└──────────────────────────────────────┘
```

---

### 3. Cart

**Route:** `/cart`  
**Priority:** P0

#### Mobile Layout - With Items

```
┌──────────────────────────────────────┐
│ ← Kembali       Keranjang     🗑️    │
├──────────────────────────────────────┤
│                                      │
│  ┌────┐ Nasi Goreng Spesial    ✕     │
│  │IMG │ Ukuran: L                    │
│  │    │ Rp 25.000                    │
│  └────┘ [-] 2 [+]                    │  ← Qty controls
│                                      │
│  ──────────────────────────────────  │
│                                      │
│  ┌────┐ Es Teh Manis           ✕     │
│  │IMG │ Ukuran: M                    │
│  │    │ Rp 8.000                     │
│  └────┘ [-] 2 [+]                    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  ┌──────────────────────────────┐    │
│  │  Ringkasan Pesanan           │    │
│  │                              │    │
│  │  Subtotal         Rp 66.000  │    │
│  │  Biaya Layanan    Rp  2.000  │    │
│  │  ─────────────────────────── │    │
│  │  Total            Rp 68.000  │    │  ← Orange bold
│  │                              │    │
│  │  [ Checkout ]                │    │  ← Orange full-width
│  └──────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

#### Empty State

```
┌──────────────────────────────────────┐
│ ← Kembali       Keranjang           │
├──────────────────────────────────────┤
│                                      │
│                                      │
│                                      │
│               🛒                     │
│                                      │
│       Keranjang Masih Kosong         │
│                                      │
│    Tambahkan makanan favoritmu       │
│         untuk mulai memesan          │
│                                      │
│       [ Lihat Menu ]                 │  ← Orange btn
│                                      │
│                                      │
│                                      │
└──────────────────────────────────────┘
```

---

### 4. Checkout

**Route:** `/checkout`  
**Priority:** P0

#### Mobile Layout

```
┌──────────────────────────────────────┐
│ ← Kembali       Checkout            │
├──────────────────────────────────────┤
│                                      │
│  📍 Alamat Pengiriman                │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │  Nama Penerima               │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ Ahmad                  │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Nomor Telepon               │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ 08123456789            │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Alamat Lengkap              │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ Jl. Merdeka No. 123    │  │    │
│  │  │ RT 01/02 Kel...        │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Catatan (Opsional)          │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ Rumah warna putih...   │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  💳 Metode Pembayaran                │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │  ● Cash on Delivery (COD)    │    │  ← Radio selected
│  │     Bayar saat pesanan tiba  │    │     (orange border)
│  │                              │    │
│  │  ○ Transfer Bank             │    │
│  │     BCA, BNI, BRI, Mandiri   │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  📋 Ringkasan Pesanan                │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │  Nasi Goreng (L) x2  50.000  │    │
│  │  Es Teh Manis (M) x2 16.000  │    │
│  │  ─────────────────────────── │    │
│  │  Subtotal           66.000   │    │
│  │  Biaya Layanan       2.000   │    │
│  │  ─────────────────────────── │    │
│  │  Total             68.000    │    │  ← Orange bold
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │     [ Buat Pesanan ]         │    │  ← Orange full-width
│  └──────────────────────────────┘    │
│                                      │
│  Dengan menekan tombol di atas,      │
│  kamu menyetujui syarat & ketentuan  │
│                                      │
└──────────────────────────────────────┘
```

#### Error State (Validation)

```
┌──────────────────────────────────────┐
│  Nama Penerima                       │
│  ┌────────────────────────┐          │
│  │                        │ ← Red    │
│  └────────────────────────┘  border  │
│  ⚠️ Nama wajib diisi                 │  ← Red text
│                                      │
└──────────────────────────────────────┘
```

---

### 5. Login

**Route:** `/login`  
**Priority:** P0

#### Mobile Layout

```
┌──────────────────────────────────────┐
│                                      │
│          (Orange gradient bg)        │
│                                      │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │     🍽️ Galih Food            │    │
│  │                              │    │
│  │         Masuk                │    │
│  │                              │    │
│  │  Selamat datang kembali!     │    │
│  │  Silakan masuk ke akun kamu  │    │
│  │                              │    │
│  │  Email                       │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ nama@email.com         │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Password                    │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ ••••••••               │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  ☐ Ingat saya   Lupa password?│   │
│  │                              │    │
│  │  [ Masuk ]                   │    │  ← Orange btn
│  │                              │    │
│  │  Belum punya akun?           │    │
│  │  Daftar sekarang             │    │  ← Orange link
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

#### Error State

```
┌──────────────────────────────────────┐
│  ┌──────────────────────────────┐    │
│  │  ⚠️ Email atau password      │    │
│  │     salah. Silakan coba      │    │  ← Red alert box
│  │     lagi.                    │    │
│  └──────────────────────────────┘    │
│                                      │
│  Email                               │
│  ┌────────────────────────┐          │
│  │ nama@email.com         │ ← Red    │
│  └────────────────────────┘  border  │
└──────────────────────────────────────┘
```

---

### 6. Register

**Route:** `/register`  
**Priority:** P0  
**Note:** Hanya untuk pendaftaran sebagai Pembeli

#### Mobile Layout

```
┌──────────────────────────────────────┐
│                                      │
│          (Orange gradient bg)        │
│                                      │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │     🍽️ Galih Food            │    │
│  │                              │    │
│  │         Daftar               │    │
│  │                              │    │
│  │  Buat akun untuk mulai       │    │
│  │  memesan makanan favoritmu   │    │
│  │                              │    │
│  │  Nama Lengkap                │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ Nama kamu              │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Email                       │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ nama@email.com         │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Nomor Telepon               │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ 08xxxxxxxxxx           │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Password                    │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ Min 8 karakter         │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  Konfirmasi Password         │    │
│  │  ┌────────────────────────┐  │    │
│  │  │ Ulangi password        │  │    │
│  │  └────────────────────────┘  │    │
│  │                              │    │
│  │  ☐ Saya setuju dengan        │    │
│  │    Syarat & Ketentuan        │    │
│  │                              │    │
│  │  [ Daftar ]                  │    │  ← Orange btn
│  │                              │    │
│  │  Sudah punya akun? Masuk     │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

---

### 7. Customer Orders

**Route:** `/dashboard/orders`  
**Priority:** P1

#### Mobile Layout

```
┌──────────────────────────────────────┐
│ ☰ Menu       Pesanan Saya     👤    │
├──────────────────────────────────────┤
│                                      │
│  ┌──────────────────────────────┐    │
│  │ #ORD-001                     │    │
│  │ 2 Feb 2026, 14:30            │    │
│  │                              │    │
│  │ • Nasi Goreng (L) x2         │    │
│  │ • Es Teh Manis (M) x2        │    │
│  │                              │    │
│  │ Total: Rp 68.000             │    │
│  │                              │    │
│  │ ┌─────────────┐              │    │
│  │ │ 🟠 Diproses │              │    │  ← Status badge
│  │ └─────────────┘              │    │
│  │                              │    │
│  │ [ Lihat Detail ]             │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ #ORD-002                     │    │
│  │ 1 Feb 2026, 12:00            │    │
│  │                              │    │
│  │ • Kopi Susu (M) x1           │    │
│  │                              │    │
│  │ Total: Rp 20.000             │    │
│  │                              │    │
│  │ ┌─────────────┐              │    │
│  │ │ ✅ Selesai  │              │    │
│  │ └─────────────┘              │    │
│  │                              │    │
│  │ [ Lihat Detail ]             │    │
│  └──────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

#### Empty State

```
┌──────────────────────────────────────┐
│ ☰ Menu       Pesanan Saya     👤    │
├──────────────────────────────────────┤
│                                      │
│                                      │
│               📋                     │
│                                      │
│     Belum Ada Pesanan                │
│                                      │
│     Kamu belum pernah memesan.       │
│     Mulai pesan makanan sekarang!    │
│                                      │
│        [ Pesan Sekarang ]            │
│                                      │
│                                      │
└──────────────────────────────────────┘
```

---

## 🎨 UI Components Reference

| Component | States | Notes |
|-----------|--------|-------|
| **Button Primary** | Default, Hover, Active, Disabled, Loading | Orange bg, white text |
| **Button Secondary** | Default, Hover, Active, Disabled | White bg, gray border |
| **Input Field** | Default, Focus, Error, Disabled | Orange focus ring |
| **Card** | Default, Hover | Shadow on hover |
| **Product Card** | Available, Out of Stock | Dimmed when OOS |
| **Size Pill** | Default, Selected | Orange when selected |
| **Badge Status** | Pending, Processing, Ready, Done, Cancelled | Color-coded |
| **Alert** | Info, Success, Warning, Error | Color-coded |

---

## 📐 Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | 1 column |
| Tablet | 640px - 1023px | 2 columns |
| Desktop | ≥ 1024px | 3-4 columns |

---

## ✅ Wireframe Checklist

| Screen | Mobile | Desktop | Empty | Loading | Error |
|--------|--------|---------|-------|---------|-------|
| Homepage | ✅ | ✅ | N/A | N/A | N/A |
| Menu | ✅ | - | ✅ | N/A | N/A |
| Cart | ✅ | - | ✅ | N/A | N/A |
| Checkout | ✅ | - | N/A | N/A | ✅ |
| Login | ✅ | - | N/A | N/A | ✅ |
| Register | ✅ | - | N/A | N/A | N/A |
| Customer Orders | ✅ | - | ✅ | N/A | N/A |

---

## 🔄 Perubahan dari Versi Sebelumnya

| Dihapus | Alasan |
|---------|--------|
| Stores Listing | Usaha personal, tidak ada multi-toko |
| Store Detail | Langsung tampil di Homepage & Menu |
| Toko Populer | Tidak relevan untuk single store |
| Register as Seller | Hanya pemilik yang manage (Admin) |
| Google OAuth Button | Disederhanakan, hanya email/password |

---

> 📎 **Next Steps:**
> 1. Review wireframes
> 2. Approve design direction
> 3. Proceed to implementation
