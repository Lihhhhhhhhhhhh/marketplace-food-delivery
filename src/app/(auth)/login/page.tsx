"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/");
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      {/* Title */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Masuk ke GMRH Food
        </h1>
        <p className="mt-2 text-gray-600">
          Silakan login untuk melanjutkan
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-6">

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Email
          </label>

          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-gray-50 px-5 py-4 border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Password
          </label>

          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-gray-50 px-5 py-4 border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-white hover:bg-orange-600"
        >
          Masuk
        </button>

      </form>

      {/* Register Link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Belum punya akun?{" "}
        <Link href="/register" className="text-orange-600 font-semibold">
          Daftar
        </Link>
      </p>

    </div>
  );
}