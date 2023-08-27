import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import user from "@/models/user";
export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();
  const hashedPass = await bcrypt.hash(password, 6);
  const newUser = new user({
    name,
    email,
    password: hashedPass,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
