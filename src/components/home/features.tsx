export function Features() {
  const features = [
    {
      id: 1,
      icon: "🍲",
      title: "Menu Berkualitas",
      description: "Masakan rumahan dengan bahan segar dan berkualitas",
    },
    {
      id: 2,
      icon: "🛵",
      title: "Pengiriman Cepat",
      description: "Diantar langsung oleh kami dengan cepat dan aman",
    },
    {
      id: 3,
      icon: "💰",
      title: "Harga Terjangkau",
      description: "Harga bersahabat dengan kualitas terbaik",
    },
  ];

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-6">

        <div className="grid gap-10 md:grid-cols-3 text-center">
          {features.map((item) => (
            <div key={item.id} className="space-y-4">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}