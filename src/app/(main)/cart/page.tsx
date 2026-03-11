"use client";

import { useCart } from "@/context/cart-context";
import Link from "next/link";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#e9dfd3] min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        <h1 className="text-3xl font-bold text-black mb-10">
          Keranjang Belanja
        </h1>

        {cart.length === 0 ? (

          /* EMPTY CART */
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-12 text-center shadow-md max-w-sm">

              <div className="text-orange-500 text-5xl mb-4">
                🧺
              </div>

              <h2 className="text-xl font-semibold text-black">
                Keranjang Anda Kosong
              </h2>

              <p className="text-gray-500 mt-2">
                Belum ada produk di keranjang Anda
              </p>

              <Link
                href="/menu"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Lihat Menu
              </Link>

            </div>
          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm"
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-4">

                    {/* IMAGE */}
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">

                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400 text-sm">
                          Img
                        </span>
                      )}

                    </div>

                    {/* INFO */}
                    <div>
                      <h2 className="font-semibold text-black">
                        {item.name}
                      </h2>

                      <p className="text-sm text-gray-500">
                        Menu GMRH Kitchen
                      </p>

                      <p className="text-orange-600 font-semibold mt-1">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-4">

                    {/* QUANTITY */}
                    <div className="flex items-center border rounded-lg overflow-hidden">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="px-4">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Hapus
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-white p-6 rounded-xl shadow h-fit">

              <h2 className="font-semibold text-lg mb-4">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-2 text-sm text-gray-600">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between"
                  >
                    <span>
                      {item.name} x{item.quantity}
                    </span>

                    <span>
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </span>
                  </div>
                ))}

              </div>

              <hr className="my-6" />

              <div className="flex justify-between font-semibold text-black">
                <span>Total</span>

                <span className="text-orange-600">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>

              <Link
                href="/checkout"
                className="block mt-6 bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-semibold"
              >
                Checkout
              </Link>

            </div>

          </div>

        )}

      </div>
    </div>
  );
}