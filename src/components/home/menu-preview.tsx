"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { menus } from "@/data/menu";
import { MenuCard } from "@/components/menu/menu-card";

export function MenuPreview() {
  return (
    <section className="bg-[#e9dfd3] py-20">

      <div className="container mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-black">
            Menu Pilihan
          </h2>
          <p className="text-gray-700">
            Beberapa menu terbaik dari GMRH Food
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {menus.slice(0,3).map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className="rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold hover:bg-orange-600"
          >
            Lihat Semua Menu
          </Link>
        </div>
        

      </div>
    </section>
  );
}