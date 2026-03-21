import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";

export const runtime = "nodejs";

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = str(formData.get("name"));
    const phone = str(formData.get("phone"));
    const scope = str(formData.get("scope"));
    const area = str(formData.get("area"));

    if (!name || name.length > 200) {
      return NextResponse.json({ error: "Nieprawidłowe imię." }, { status: 400 });
    }
    if (!phone || phone.length > 40) {
      return NextResponse.json({ error: "Nieprawidłowy telefon." }, { status: 400 });
    }
    if (!scope || scope.length > 8000) {
      return NextResponse.json({ error: "Uzupełnij zakres prac." }, { status: 400 });
    }
    if (area.length > 120) {
      return NextResponse.json({ error: "Nieprawidłowy metraż." }, { status: 400 });
    }

    const db = getAdminDb();
    const ref = db.collection("leads").doc();

    await ref.set({
      name,
      phone,
      scope,
      area: area || null,
      createdAt: FieldValue.serverTimestamp(),
      source: "site",
    });

    return NextResponse.json({ ok: true, id: ref.id }, { status: 201 });
  } catch (e) {
    console.error("[api/leads]", e);
    const message = e instanceof Error ? e.message : "Server error";
    if (message.includes("Brak zmiennych")) {
      return NextResponse.json(
        { error: "Serwer nie jest skonfigurowany do zapisu leadów (Firebase)." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "Nie udało się zapisać zgłoszenia." }, { status: 500 });
  }
}
