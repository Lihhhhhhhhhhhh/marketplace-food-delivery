"use client";

import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#e9dfd3] min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-black mb-10">
          Keranjang Pesanan
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center shadow">
            <p className="text-gray-600">Keranjang masih kosong</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm"
                >
                  
                  {/* Menu Info */}
                  <div className="flex items-center gap-4">

                    {/* Image */}
                    <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-500">
                      Img
                    </div>

                    <div>
                      <h2 className="font-semibold text-black">
                        {item.name}
                      </h2>
                      <p className="text-orange-600 font-medium">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">

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

                    {/* Remove */}
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

            {/* Total */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow flex justify-between items-center">

              <div>
                <p className="text-gray-600">Total</p>
                <h2 className="text-xl font-bold text-black">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </h2>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                Checkout
              </button>

            </div>
          </>
        )}
      </div>
    </div>
  );
}