"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { addNewUserFormControls } from "@/Utils";
import { addNewUsers } from "@/app/actions";
import { useState } from "react";

const AddNewUser = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpenDialog(true)}>Add new user</Button>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" action={addNewUsers}>
            {addNewUserFormControls.map((controlItem) => (
              <div key={controlItem.name} className="mb-5">
                <Label htmlFor={controlItem.name} className="text-right mb-5">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  type={controlItem.type}
                  placeholder={controlItem.placeholder}
                  name={controlItem.name}
                  defaultValue=""
                />
              </div>
            ))}
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
