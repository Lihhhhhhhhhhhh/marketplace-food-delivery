export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Hubungi Kami</h1>
          <p className="mt-4 text-lg text-gray-600">
            Ada pertanyaan? Kami siap membantu Anda
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* LEFT INFO */}
          <div className="space-y-10">

            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6 text-gray-600">

                <div>
                  <p className="font-semibold text-gray-900">Alamat</p>
                  <p>Jl. Raya Utama No. 456, Jakarta</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Telepon</p>
                  <p>0896-7654-321</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p>example@gmail.com</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Jam Operasional</p>
                  <p>Senin - Minggu</p>
                  <p>08:30 - 18:00 WIB</p>
                </div>

              </div>
            </div>

            {/* ABOUT */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tentang Kami
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                Marketplace food delivery rumahan dengan menu makanan ringan hingga makanan sedang yang lezat.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Kami menyajikan berbagai makanan khas Indonesia dengan cita rasa rumahan yang autentik.
                Setiap pesanan diantar langsung oleh tim kami untuk memastikan makanan sampai dalam kondisi terbaik.
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Kirim Pesan
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama anda"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukkan email anda"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={6}
                  placeholder="Tulis pesan anda..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
              >
                Kirim Pesan
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}