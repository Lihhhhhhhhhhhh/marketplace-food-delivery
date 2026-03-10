"use client";

import { useEffect, useState } from "react";
import { MenuCard } from "@/components/menu/menu-card";
import { createClient } from "@/lib/supabase/client";
import { Product } from "@/types/product";

export default function MenuPage() {

  const supabase = createClient();

  const [menus, setMenus] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMenus = async () => {

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setMenus(data);
      }

      setLoading(false);
    };

    fetchMenus();

  }, []);

  return (
    <section className="bg-[#f3eee7] py-20">

      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="mb-14 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Daftar Menu GMRH Kitchen
          </h1>

          <p className="mt-3 text-gray-600">
            Pilih menu favorit Anda dan nikmati kelezatannya
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-500">
            Loading menu...
          </div>
        )}

        {/* Empty */}
        {!loading && menus.length === 0 && (
          <div className="text-center text-gray-500">
            Menu belum tersedia
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {menus.map((menu: Product) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}

        </div>

      </div>

    </section>
  );
}