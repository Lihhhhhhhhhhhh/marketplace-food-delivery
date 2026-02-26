export default function MenuPage() {
    
    const dataDariDatabaseAdmin = [
        {
            id: 1,
            nama: "Nasi Goreng Spesial",
            deskripsi: "Nasi goreng dengan telur, ayam, dan sayuran segar",
            harga: 25000,
            gambar: "gambar-nasi-goreng.jpg",
            kategori: "Makanan",
            stok: 50,
            status: "Tersedia"
        },
        {
            id: 2,
            nama: "Es Kelapa Muda",
            deskripsi: "Kelapa muda segar dengan es",
            harga: 10000,
            gambar: "gambar-es-kelapa.jpg",
            kategori: "Minuman",
            stok: 100,
            status: "Tersedia"
        }
    ];

    const produkTersedia = dataDariDatabaseAdmin.filter(
        (produk) => produk.status === "Tersedia" && produk.stok > 0
    );

    return (
        <div className="mx-auto max-w-7xl px-4 py-12">
            <h1 className="mb-10 text-3xl font-bold text-gray-900">
                Selamat Datang di Menu Kami
            </h1>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {produkTersedia.map((produk) => (
                    <div key={produk.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex h-48 items-center justify-center bg-gray-100 text-gray-400">
                            <span className="text-sm">{produk.kategori} - Gambar</span>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-gray-900">{produk.nama}</h3>
                            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{produk.deskripsi}</p>
                            <div className="mt-5 flex items-center justify-between">
                                <span className="font-bold text-gray-900">
                                    Rp {produk.harga.toLocaleString('id-ID')}
                                </span>
                                <button className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
                                    Keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}