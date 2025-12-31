import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdministratorSidebar from "./administrator-sidebar";
import AdminSettingsHeader from "./administrator-settings-header";

export default function AdminSettings() {
  const [firstName, setFirstName] = useState("Jack");
  const [lastName, setLastName] = useState("Lorrund");
  const [title, setTitle] = useState("Psycologist");
  const [editingField, setEditingField] = useState<
    "First Name" | "Last Name" | "Title" | null
  >(null);
  const [tempValue, setTempValue] = useState("");

  const openDialog = (
    field: "First Name" | "Last Name" | "Title",
    currentValue: string
  ) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const saveChanges = () => {
    if (editingField === "First Name") setFirstName(tempValue);
    if (editingField === "Last Name") setLastName(tempValue);
    if (editingField === "Title") setTitle(tempValue);
    setEditingField(null);
  };

  return (
    <>
      <AdminSettingsHeader />
      <AdministratorSidebar />
      <div className="h-70 w-170 ml-52 absolute top-25">
        <h1 className="font-[600] text-[20px] mt-4">Profile</h1>
        <div className="flex flex-row gap-15">
          <h1 className="font-[400] text-[14px] mt-6">First Name</h1>
          <div className="bg-[#F2F2F7] rounded-lg w-120 h-9 mt-4 flex items-center justify-between px-3">
            <h1 className="font-[500] text-[15px]">{firstName}</h1>
            <h1
              className="font-[600] text-[12px] cursor-pointer text-[#154440]"
              onClick={() => openDialog("First Name", firstName)}
            >
              Update
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-15">
          <h1 className="font-[400] text-[14px] mt-9">Last Name</h1>
          <div className="bg-[#F2F2F7] rounded-lg w-120 h-9 mt-7 flex items-center justify-between px-3">
            <h1 className="font-[500] text-[15px]">{lastName}</h1>
            <h1
              className="font-[600] text-[12px] cursor-pointer text-[#154440]"
              onClick={() => openDialog("Last Name", lastName)}
            >
              Update
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-15">
          <h1 className="font-[400] text-[14px] mt-9">Title</h1>
          <div className="bg-[#F2F2F7] rounded-lg w-120 h-9 mt-7 flex items-center justify-between px-3 ml-9">
            <h1 className="font-[500] text-[15px]">{title}</h1>
            <h1
              className="font-[600] text-[12px] cursor-pointer text-[#154440]"
              onClick={() => openDialog("Title", title)}
            >
              Update
            </h1>
          </div>
        </div>
        <Dialog
          open={!!editingField}
          onOpenChange={() => setEditingField(null)}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-[20px]">
                Update {editingField}
              </DialogTitle>
              <DialogDescription className="text-[15px]">
                Modify the {editingField} below and save changes.
              </DialogDescription>
            </DialogHeader>
            <Input
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="mt-4"
            />
            <DialogFooter className="flex justify-end gap-2 mt-4">
              <Button
                className="cursor-pointer font-[500]"
                variant="destructive"
                onClick={() => setEditingField(null)}
              >
                Cancel
              </Button>
              <Button
                className="bg-[#074799] hover:bg-[#074799] cursor-pointer font-[600]"
                onClick={saveChanges}
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
