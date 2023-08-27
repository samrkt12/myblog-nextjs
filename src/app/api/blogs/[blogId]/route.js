import Blog from "@/models/blog";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { blogId } = params;
  try {
    await connect();
    const singleBlog = await Blog.findById(blogId);
    return new NextResponse(JSON.stringify(singleBlog), { status: 200 });
  } catch (err) {
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { blogId } = params;
  try {
    await connect();

    await Blog.findByIdAndDelete(blogId);
    return new NextResponse("Blog deleted", { status: 200 });
  } catch (err) {
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
};
