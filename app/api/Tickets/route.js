import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // const { formData } = req.body; //! I can't use this in Next.JS
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json(
      { message: "Ticket created successfully", ticket: ticketData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating ticket", error },
      { status: 500 }
    );
  }
}
