// lib/pipedrive.ts
interface PipedrivePerson {
  name: string;
  email?: { value: string; primary: true }[];
  phone?: { value: string; primary: true }[];
}

interface PipedriveDeal {
  title: string;
  value: number;
  currency: string;
  person_id?: number;
}

interface PipedriveNote {
  content: string;
  deal_id?: number;
}

const API_BASE = process.env.NEXT_PUBLIC_PIPEDRIVE_BASE || "https://api.pipedrive.com/v1";
const TOKEN = process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN;

export async function createPerson(person: PipedrivePerson) {
  const res = await fetch(`${API_BASE}/persons?api_token=${TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(person),
  });
  return res.json();
}

export async function createDeal(deal: PipedriveDeal) {
  const res = await fetch(`${API_BASE}/deals?api_token=${TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(deal),
  });
  return res.json();
}

export async function createNote(note: PipedriveNote) {
  const res = await fetch(`${API_BASE}/notes?api_token=${TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
}

export async function createLead(data: {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  value?: number;
  currency?: string;
  note?: string;
}) {
  try {
    // 1. Créer une personne
    const person = await createPerson({
      name: data.name,
      email: data.email ? [{ value: data.email, primary: true }] : undefined,
      phone: data.phone ? [{ value: data.phone, primary: true }] : undefined,
    });
    const personId = person.data?.id;

    // 2. Créer un deal lié à la personne
    const deal = await createDeal({
      title: data.company ? `${data.company} — ${data.name}` : `Lead — ${data.name}`,
      value: data.value || 0,
      currency: data.currency || "XOF", // Devise par défaut pour l'Afrique de l'Ouest
      person_id: personId,
    });
    const dealId = deal.data?.id;

    // 3. Ajouter une note si fournie
    if (data.note) {
      await createNote({ content: data.note, deal_id: dealId });
    }

    return { success: true, personId, dealId };
  } catch (err) {
    console.error("Pipedrive error:", err);
    return { success: false, error: String(err) };
  }
}
