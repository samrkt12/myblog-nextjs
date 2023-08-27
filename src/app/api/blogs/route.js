import Blog from "@/models/blog";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();
    const blogs = await Blog.find(username && { username });
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (err) {
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newBlog = new Blog(body);
  try {
    await connect();
    await newBlog.save();
    return new NextResponse("Blog uploaded.", { status: 201 });
  } catch (err) {
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
};
