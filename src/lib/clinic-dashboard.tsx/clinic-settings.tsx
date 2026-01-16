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
import ClinicSidebar from "./clinic-sidebar";
import ClinicSettingsHeader from "./clinic-settings-header";

export default function ClinicSettings() {
  const [firstName, setFirstName] = useState("Jack");
  const [lastName, setLastName] = useState("Lorrund");
  const [title1, setTitle1] = useState("Psychologist");
  const [title2, setTitle2] = useState("Psychologist");
  const [editingField, setEditingField] = useState<
    "First Name" | "Last Name" | "Title 1" | "Title 2" | null
  >(null);
  const [tempValue, setTempValue] = useState("");

  const openDialog = (
    field: "First Name" | "Last Name" | "Title 1" | "Title 2",
    currentValue: string
  ) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const saveChanges = () => {
    if (editingField === "First Name") setFirstName(tempValue);
    if (editingField === "Last Name") setLastName(tempValue);
    if (editingField === "Title 1") setTitle1(tempValue);
    if (editingField === "Title 2") setTitle2(tempValue);
    setEditingField(null);
  };

  return (
    <div className="flex min-h-screen w-full">
      <ClinicSidebar />
      <main className="flex-1 flex flex-col">
        <ClinicSettingsHeader />
        <div className="flex-1 p-7 overflow-auto">
          <h1 className="font-[600] text-[20px] mb-6">Profile</h1>
          <div className="space-y-7 max-w-2xl">
            <div className="flex flex-row items-center gap-8">
              <h1 className="font-[500] text-[14px] w-24 text-[#26243E]">First Name</h1>
              <div className="bg-[#F2F2F7] rounded-lg flex-1 h-9 flex items-center justify-between px-3">
                <h1 className="font-[500] text-[14px]">{firstName}</h1>
                <h1
                  className="font-[600] text-[12px] cursor-pointer text-[#26243E]"
                  onClick={() => openDialog("First Name", firstName)}
                >
                  Update
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-8">
              <h1 className="font-[500] text-[14px] w-24 text-[#26243E]">Last Name</h1>
              <div className="bg-[#F2F2F7] rounded-lg flex-1 h-9 flex items-center justify-between px-3">
                <h1 className="font-[500] text-[14px]">{lastName}</h1>
                <h1
                  className="font-[600] text-[12px] cursor-pointer text-[#154440]"
                  onClick={() => openDialog("Last Name", lastName)}
                >
                  Update
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-8">
              <h1 className="font-[500] text-[14px] w-24 text-[#26243E]">Title</h1>
              <div className="bg-[#F2F2F7] rounded-lg flex-1 h-9 flex items-center justify-between px-3">
                <h1 className="font-[500] text-[14px]">{title1}</h1>
                <h1
                  className="font-[600] text-[12px] cursor-pointer text-[#154440]"
                  onClick={() => openDialog("Title 1", title1)}
                >
                  Update
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-8">
              <h1 className="font-[500] text-[14px] w-24 text-[#26243E]">Title</h1>
              <div className="bg-[#F2F2F7] rounded-lg flex-1 h-9 flex items-center justify-between px-3">
                <h1 className="font-[500] text-[14px]">{title2}</h1>
                <h1
                  className="font-[600] text-[12px] cursor-pointer text-[#154440]"
                  onClick={() => openDialog("Title 2", title2)}
                >
                  Update
                </h1>
              </div>
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
      </main>
    </div>
  );
}
