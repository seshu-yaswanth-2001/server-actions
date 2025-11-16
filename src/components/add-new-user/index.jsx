"use client";

import { useContext } from "react";
import { Button } from "../ui/button";
import { UserContext } from "../../context";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { addNewuserFormControls } from "@/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const AddNewUser = () => {
  const {
    openUp,
    setOpenUp,
    addNewUserFormData,
    setNewUserFormData,
    currentEditId,
    setCurrentEditId,
  } = useContext(UserContext);

  return (
    <div>
      <Button onClick={() => setOpenUp(true)}>Add New User</Button>
      <Dialog open={openUp} onOpenChange={()=> {
        setOpenUp(true)
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            {addNewuserFormControls?.map((controlItem) => (
              <div key={controlItem.name} className="mb-5">
                <Label className="text-right" htmlFor={controlItem.name}>
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  type={controlItem.type}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  className="col-span-3"
                  value={addNewUserFormData[controlItem.name]}
                  onChange={(event) => {
                    setNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: event.target.value,
                    });
                  }}
                />
              </div>
            ))}
            <DialogFooter>
              <Button
                className="disabled:opacity-55"
                disabled={{}}
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
