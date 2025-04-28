"use server";
import { NextResponse } from "next/server";
import { registerUser } from "@/lib/brevo";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  try {
    const response = await registerUser(email);
    return NextResponse.json(response);
  } catch (error: any) {
    console.error("Error subscribing to newsletter:", error.response.body);

    if (error.response && error.response.body && error.response.body.message) {
      return NextResponse.json(
        {
          error: error.response.body.message,
        },
        { status: error.response.status || 500 }
      );
    }

    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
