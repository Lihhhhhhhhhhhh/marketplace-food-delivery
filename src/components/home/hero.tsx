export function Hero() {
  return (
    <section className="bg-[#e9dfd3] py-16">
      <div className="container mx-auto px-6">
        
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#f5c98b] p-12 text-center shadow-lg">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Pesan Makanan Favorit dan
            <br />
            Murah di{" "}
            <span className="text-orange-600">GMRH Food</span>
          </h1>

          <p className="mt-6 text-lg text-gray-800 max-w-3xl mx-auto">
            Jelajahi penawaran terbaik kami, mulai dari menu utama yang kaya rasa hingga 
            minuman segar yang disiapkan secara dadakan. Setiap pesanan Anda akan diantar 
            langsung oleh keluarga kami guna menjamin kualitas, kecepatan, dan keramahan 
            yang sampai dengan selamat ke tangan Anda.
          </p>

          <div className="mt-10">
            <button className="rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold text-lg shadow-md transition hover:bg-orange-600">
              Pesan Sekarang →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}