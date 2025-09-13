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

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json(
      { tickets, message: "Tickets fetched successfully! " },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating ticket", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { id } = body;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "The ticket was deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "We could not delete this ticket. Please try again later.",
        error,
      },
      { status: 500 }
    );
  }
}
