// app/api/pipedrive/route.ts
import { NextResponse } from "next/server";
import { createLead } from "@/lib/pipedrive";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await createLead(body);
  return NextResponse.json(result, { status: result.success ? 200 : 500 });
}
