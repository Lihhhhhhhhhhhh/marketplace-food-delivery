import midtransClient from "midtrans-client";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {

  const supabase = await createClient();
  const body = await req.json();

  const items = body.items;

  // kurangi stok produk
  for (const item of items) {
    await supabase.rpc("decrease_stock", {
      product_id: item.id,
      qty: item.quantity
    });
  }

  const snap = new midtransClient.Snap({
  isProduction:false,
  serverKey:process.env.MIDTRANS_SERVER_KEY!,
  clientKey:process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!
});

  const parameter = {
    transaction_details: {
      order_id: "ORDER-" + Date.now(),
      gross_amount: body.total,
    },
    customer_details: {
      first_name: body.name,
      phone: body.phone,
    },
  };

  const transaction = await snap.createTransaction(parameter);

  return NextResponse.json({
    snapToken: transaction.token,
  });
}