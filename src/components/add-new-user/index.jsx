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
import { addNewUserFormControls, addNewUserInitialState } from "@/Utils";
import { addNewUsers, updateUsers } from "@/app/actions";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/context";

const AddNewUser = () => {
  const { openDialog, setOpenDialog, editingUser, setEditingUser } =
    useContext(UserContext);

  const [formData, setFormData] = useState(addNewUserInitialState);

  useEffect(() => {
    if (editingUser) {
      setFormData({
        firstName: editingUser.firstName || "",
        lastName: editingUser.lastName || "",
        email: editingUser.email || "",
        address: editingUser.address || "",
      });
    } else {
      setFormData(addNewUserInitialState);
    }
  }, [editingUser, openDialog]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    let response;
    if (editingUser) {
      response = await updateUsers(editingUser._id, form);
    } else {
      response = await addNewUsers(form);
    }

    if (response.success) {
      setOpenDialog(false);
      setEditingUser(null);
      setFormData(addNewUserInitialState);
    } else {
      alert(response.message || "Action failed");
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditingUser(null);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setEditingUser(null);
          setOpenDialog(true);
        }}
      >
        Add new user
      </Button>
      <Dialog open={openDialog} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {editingUser ? "Edit" : "Add"} User Details
            </DialogTitle>
          </DialogHeader>

          <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
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
                  value={formData[controlItem.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <DialogFooter>
              <Button type="submit">{editingUser ? "Update" : "Save"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
