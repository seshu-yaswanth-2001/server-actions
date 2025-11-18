"use client";

import { useContext } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { UserContext } from "@/context";

const SingleCard = ({ user }) => {
  const { openDialog, setOpenDialog, editingUser, setEditingUser } =
    useContext(UserContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {user?.firstName} - {user?.lastName}
        </CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setOpenDialog(true)}>Edit</Button>
        <Button>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default SingleCard;
