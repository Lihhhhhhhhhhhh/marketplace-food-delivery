"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Products",
      path: "/admin/products",
    },
    {
      name: "Orders",
      path: "/admin/orders",
    },
    {
      name: "Customers",
      path: "/admin/customers",
    },
  ];

  return (

    <aside className="w-64 bg-black text-white p-6">

      <h2 className="text-xl font-bold mb-10">
        GMRH Admin
      </h2>

      <nav className="space-y-3">

        {menu.map((item) => (

          <Link
            key={item.path}
            href={item.path}
            className={`block p-3 rounded ${
              pathname === item.path
                ? "bg-orange-500"
                : "hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>

        ))}

      </nav>

    </aside>
  );
}