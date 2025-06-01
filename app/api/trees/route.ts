import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import {
  getAllTrees,
  createTree,
  searchTrees,
} from "@/controllers/treeController";

export async function GET(request: NextRequest) {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();
    console.log("Connected to MongoDB successfully");

    // Get search parameters from URL
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const status = searchParams.get("status");
    const family = searchParams.get("family");

    let result;
    if (search || status || family) {
      result = await searchTrees({ search, status, family });
    } else {
      result = await getAllTrees();
    }

    if (!result.success) {
      console.error("Operation failed:", result.error);
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result.data);
  } catch (error: any) {
    console.error("Detailed API Error:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();
    console.log("Connected to MongoDB successfully");

    const body = await request.json();
    console.log("Received body:", body);

    const result = await createTree(body);
    if (!result.success) {
      console.error("Failed to create tree:", result.error);
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result.data, { status: 201 });
  } catch (error: any) {
    console.error("Detailed API Error:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
