"use server";

import connectDB from "@/database";
import User from "@/models";
import Joi from "joi";
import { revalidatePath } from "next/cache";

const userSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().required(),
  address: Joi.string().min(3).max(30).alphanum().required(),
});

export async function addNewUsers(formData) {
  await connectDB();
  try {
    const data = Object.fromEntries(formData);

    const { error } = userSchema.validate(data);

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

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

export async function getUsers() {
  await connectDB();
  try {
    const listOfUsers = await User.find({});

    if (listOfUsers) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
      };
    } else {
      return {
        success: false,
        message: "Something Went Wrong",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Something went wrong, Please try again later!",
    };
  }
}

export async function updateUsers(userId, formData) {
  await connectDB();
  try {
    const data = Object.fromEntries(formData);

    const { error } = userSchema.validate(data);

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    if (!ObjectId.isValid(userId)) {
      return {
        success: false,
        message: "Invalid user ID",
      };
    }

    const result = await User.findByIdAndUpdate(userId, data, { new: true });

    if (result) {
      revalidatePath("/user");
      return {
        success: true,
        message: "User updated successfully",
        data: JSON.parse(JSON.stringify(result)),
      };
    } else {
      return {
        success: false,
        message: "User Not found",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Something went wrong! Please try again later",
    };
  }
}
