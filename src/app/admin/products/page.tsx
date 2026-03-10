"use client";

import { useEffect,useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ProductForm } from "@/components/admin/product-form";

type Product = {
  id: string
  name: string
  description: string
  price: number
}

export default function ProductsPage(){

  const supabase = createClient()

  const [products,setProducts] = useState<Product[]>([])
  const [editing,setEditing] = useState<Product | null>(null)

  const fetchProducts = async ()=>{

    const {data} = await supabase
      .from("products")
      .select("*")
      .order("created_at",{ascending:false})

    if(data){
      setProducts(data)
    }
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  const deleteProduct = async (id:string)=>{

    await supabase
      .from("products")
      .delete()
      .eq("id",id)

    fetchProducts()
  }

  return(

    <div className="p-8 space-y-8">

      <h1 className="text-2xl font-bold">
        Products Manager
      </h1>

      <ProductForm
        product={editing || undefined}
        onSuccess={()=>{
          setEditing(null)
          fetchProducts()
        }}
      />

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr className="text-left">
              <th className="p-3">Nama</th>
              <th className="p-3">Harga</th>
              <th className="p-3">Aksi</th>
            </tr>

          </thead>

          <tbody>

            {products.map((product)=>(
              <tr key={product.id} className="border-t">

                <td className="p-3">
                  {product.name}
                </td>

                <td className="p-3">
                  Rp {product.price.toLocaleString("id-ID")}
                </td>

                <td className="p-3 space-x-2">

                  <button
                    onClick={()=>setEditing(product)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={()=>deleteProduct(product.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}