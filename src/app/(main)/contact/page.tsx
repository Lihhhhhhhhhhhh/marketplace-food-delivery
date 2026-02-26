export default function ContactPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                
                <div>
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Hubungi Kami</h1>
                    <p className="mb-10 text-lg text-gray-600">Ada pertanyaan? Kami siap membantu Anda</p>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Alamat</h3>
                            <p className="mt-2 text-gray-600">Jl. Raya Utama No. 456, Jakarta</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Telepon</h3>
                            <p className="mt-2 text-gray-600">08967654321</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Email</h3>
                            <p className="mt-2 text-gray-600">Example@gmail..com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Jam Operasional</h3>
                            <p className="mt-2 text-gray-600">Senin - Minggu: 08:30-18:00 WIB</p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">Tentang Kami</h2>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                            Marketplace food delivery rumahan dengan menu makanan ringan ke sedang yang lezat.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Kami menyajikan berbagai  makanan ringan ke sedang Indonesia dengan cita rasa rumahan yang autentik. Setiap pesanan diantar langsung oleh tim kami untuk memastikan makanan sampai dalam kondisi terbaik.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl lg:p-10">
                        <form className="space-y-6">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-900">Nama</label>
                                <input 
                                    type="text" 
                                    className="w-full rounded-xl bg-gray-50 px-5 py-4 text-gray-900 border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" 
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-900">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full rounded-xl bg-gray-50 px-5 py-4 text-gray-900 border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" 
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-900">Pesan</label>
                                <textarea 
                                    rows={6} 
                                    className="w-full rounded-xl bg-gray-50 px-5 py-4 text-gray-900 border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="mt-4 w-full rounded-xl bg-orange-500 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-600"
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