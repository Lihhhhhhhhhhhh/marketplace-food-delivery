"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Akun berhasil dibuat");
    router.push("/login");
  };

  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">

      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Daftar Akun
      </h1>

      <form onSubmit={handleRegister} className="space-y-5">

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-orange-500 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-orange-500 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 transition"
        >
          Daftar
        </button>

      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Sudah punya akun?{" "}
        <Link
          href="/login"
          className="text-orange-500 font-semibold"
        >
          Login
        </Link>
      </p>

    </div>
  );
}