import midtransClient from "midtrans-client";
import { NextResponse } from "next/server";

export async function POST(req:Request){

 const body = await req.json();

 const snap = new midtransClient.Snap({
  isProduction:false,
  serverKey:process.env.MIDTRANS_SERVER_KEY
 });

 const parameter = {
  transaction_details:{
   order_id:"ORDER-"+Date.now(),
   gross_amount:100000
  },
  customer_details:{
   first_name:body.name,
   phone:body.phone
  }
 };

 const transaction = await snap.createTransaction(parameter);

 return NextResponse.json({
  snapToken:transaction.token
 });

}