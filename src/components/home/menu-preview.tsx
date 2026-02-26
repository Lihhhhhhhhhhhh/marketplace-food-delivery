export function MenuPreview() {
  const menus = [
    {
      id: 1,
      name: "Nasi Goreng",
      description: "Nasi goreng dengan telur, ayam, dan sayuran segar",
      price: "Rp 10.000",
    },
    {
      id: 2,
      name: "Mie Goreng",
      description: "Mie goreng spesial dengan topping pilihan",
      price: "Rp 12.000",
    },
    {
      id: 3,
      name: "Ayam Geprek",
      description: "Ayam crispy dengan sambal pedas khas GMRH",
      price: "Rp 15.000",
    },
  ];

  return (
    <section className="bg-[#e9dfd3] py-20">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-black">
            Pilihan Menu Terbaik Kami
          </h2>
          <p className="mt-2 text-gray-700">
            Pilihlah Menu Yang Pelanggan Inginkan
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="rounded-2xl bg-white shadow-md overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-56 bg-gray-300 flex items-center justify-center text-gray-500">
                Gambar Menu
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg">{menu.name}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {menu.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">{menu.price}</span>
                  <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600">
                    🛒 Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <button className="rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold hover:bg-orange-600">
            Lihat Semua Menu
          </button>
        </div>

      </div>
    </section>
  );
}