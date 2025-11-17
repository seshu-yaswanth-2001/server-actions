"use server";

import connectDB from "@/database";
import User from "@/models";
import { revalidatePath } from "next/cache";

export async function addNewUsers(formData) {
  await connectDB();
  try {
    const data = Object.fromEntries(formData);
    console.log("[addNewUsers] received data:", data);
    const result = await User.create(data);

    if (result) {
      revalidatePath("/user");
      return {
        success: true,
        message: "User added successfull!",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again later.",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Something went wrong! Please try again later.",
    };
  }
}
