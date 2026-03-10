"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Product = {
  id?: string
  name: string
  description: string
  price: number
  image?: string
}

export function ProductForm({
  product,
  onSuccess,
}:{
  product?:Product
  onSuccess:()=>void
}){

  const supabase = createClient()

  const [name,setName] = useState(product?.name || "")
  const [description,setDescription] = useState(product?.description || "")
  const [price,setPrice] = useState(product?.price || 0)
  const [file,setFile] = useState<File | null>(null)

  const handleSubmit = async()=>{

    let imageUrl = product?.image || ""

    if(file){

      const fileName = `${Date.now()}-${file.name}`

      const { data,error } = await supabase.storage
        .from("product-images")
        .upload(fileName,file)

      if(!error){

        const { data:urlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(fileName)

        imageUrl = urlData.publicUrl
      }
    }

    if(product?.id){

      await supabase
        .from("products")
        .update({
          name,
          description,
          price,
          image:imageUrl
        })
        .eq("id",product.id)

    }else{

      await supabase
        .from("products")
        .insert([
          {
            name,
            description,
            price,
            image:imageUrl
          }
        ])
    }

    onSuccess()
  }

  return(

    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      <input
        placeholder="Nama Produk"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <textarea
        placeholder="Deskripsi"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e)=>setPrice(Number(e.target.value))}
        className="border p-2 w-full rounded"
      />

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={handleSubmit}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        {product ? "Update Produk" : "Tambah Produk"}
      </button>

    </div>
  )
}