import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import EventModel from "@/database/event.model";

export async function GET() {
  return NextResponse.json({
    message: "GET route works",
  });
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    const rawData = Object.fromEntries(formData.entries());
    console.log([...formData.entries()]);
    console.log(rawData);
    console.log(rawData);

    const event = {
      ...rawData,

      // convert JSON strings into arrays
      agenda: rawData.agenda
        ? JSON.parse(rawData.agenda as string)
        : [],

      tags: rawData.tags
        ? JSON.parse(rawData.tags as string)
        : [],
    };

    const createdEvent = await EventModel.create(event);

    return NextResponse.json(
      {
        message: "event created successfully",
        event: createdEvent,
      },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      {
        message: "Event Creation failed",
        error: e instanceof Error ? e.message : "Unknown",
      },
      { status: 500 }
    );
  }
}