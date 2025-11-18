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
  const { setOpenDialog, setEditingUser } = useContext(UserContext);

  const handleEdit = () => {
    setOpenDialog(true);
    setEditingUser(user);
  };

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
        <Button onClick={handleEdit}>Edit</Button>
        <Button>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default SingleCard;
