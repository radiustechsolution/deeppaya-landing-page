// app/api/services/route.ts
import { siteConfig } from "@/config/site";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { meter_number, amount, email, company_code } = body;

    const response = await fetch(
      `${siteConfig.appapiUrl}/landing/resolve_electricity`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          meter_number,
          amount,
          email,
          company_code,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed...");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed..." }, { status: 500 });
  }
}
