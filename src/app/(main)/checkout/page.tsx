"use client";

import { useCart } from "@/context/cart-context";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");

  const handleCheckout = async () => {

    const res = await fetch("/api/create-transaction",{
      method:"POST",
      body:JSON.stringify({
        name,
        phone,
        address,
        cart
      })
    });

    const data = await res.json();

    window.snap.pay(data.snapToken);
    

  };

  return (
    <div className="container mx-auto p-10">

      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <input
        placeholder="Nama"
        onChange={(e)=>setName(e.target.value)}
        className="border p-3 w-full mb-4"
      />

      <input
        placeholder="No HP"
        onChange={(e)=>setPhone(e.target.value)}
        className="border p-3 w-full mb-4"
      />

      <textarea
        placeholder="Alamat"
        onChange={(e)=>setAddress(e.target.value)}
        className="border p-3 w-full mb-4"
      />

      <button
        onClick={handleCheckout}
        className="bg-orange-500 text-white px-6 py-3 rounded"
      >
        Bayar Sekarang
      </button>

    </div>
  );
}