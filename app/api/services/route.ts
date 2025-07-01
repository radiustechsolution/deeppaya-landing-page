// app/api/services/route.ts
import { siteConfig } from "@/config/site";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${siteConfig.appapiUrl}/landing/services`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
