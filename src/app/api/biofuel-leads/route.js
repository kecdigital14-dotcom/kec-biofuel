// src/app/api/biofuel-leads/route.js
//
// Add to .env.local:
//   GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email } = body;

    // Basic validation
    if (!name?.trim() || !phone?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name, phone and email are required." },
        { status: 400 }
      );
    }

    const sheetUrl = process.env.GOOGLE_SHEET_URL;

    if (!sheetUrl) {
      console.error("❌ GOOGLE_SHEET_URL is not set in .env.local");
      // Still return success so user isn't blocked
      return NextResponse.json({ success: true, note: "Sheet URL not configured" });
    }

    if (!sheetUrl.startsWith("https://script.google.com/macros/s/")) {
      console.error("❌ Wrong URL format! Got:", sheetUrl);
      return NextResponse.json({ success: true, note: "Invalid sheet URL format" });
    }

    if (!sheetUrl.endsWith("/exec")) {
      console.error("❌ URL must end with /exec. Got:", sheetUrl);
      return NextResponse.json({ success: true, note: "URL must end with /exec" });
    }

    const payload = {
      name:      name.trim(),
      phone:     phone.trim(),
      email:     email.trim(),
      timestamp: new Date().toISOString(),
      source:    "KEC BioPulse AI Form",
    };

    // Send as text/plain to avoid CORS preflight + redirect issues with Apps Script
    try {
      const res = await fetch(sheetUrl, {
        method:   "POST",
        redirect: "follow",
        headers:  { "Content-Type": "text/plain;charset=utf-8" },
        body:     JSON.stringify(payload),
        signal:   AbortSignal.timeout(12000),
      });

      const responseText = await res.text();
      console.log("📋 Sheet raw response:", responseText.slice(0, 200));

      if (responseText.trim().startsWith("<")) {
        console.error("❌ Got HTML back — Apps Script not deployed correctly or wrong URL");
      } else {
        try {
          const json = JSON.parse(responseText);
          console.log("✅ Lead saved. Row:", json.row);
        } catch {
          console.log("ℹ️  Non-JSON response:", responseText.slice(0, 100));
        }
      }
    } catch (fetchErr) {
      console.error("❌ Fetch to sheet failed:", fetchErr.message);
      // Don't block the user — lead saving failure is non-fatal
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Biofuel leads API error:", err.message);
    // Always return success so the user can proceed to the ROI tool
    return NextResponse.json({ success: true });
  }
}