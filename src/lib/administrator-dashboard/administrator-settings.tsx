import AdministratorSidebar from "./administrator-sidebar";
import AdminSettingsHeader from "./administrator-settings-header";

export default function AdminSettings() {
  return (
    <>
      <AdminSettingsHeader />
      <AdministratorSidebar />
      <div className="h-70 w-170 ml-52 absolute top-25">
        <h1 className="font-[600] text-[20px] mt-4">Profile</h1>
        <div className="flex flex-row gap-15">
          <h1 className="font-[400] text-[14px] mt-6">First Name</h1>
          <div className="bg-[#F2F2F7] rounded-lg w-120 h-9 mt-4 flex flex-row items-center gap-94">
            <h1 className="font-[500] text-[15px] ml-3">Jack</h1>
            <h1 className="font-[600] text-[12px] cursor-pointer text-[#154440]">Update</h1>
          </div>
        </div>
        <div className="flex flex-row gap-15">
          <h1 className="font-[400] text-[14px] mt-9">Last Name</h1>
          <div className="bg-[#F2F2F7] rounded-lg w-120 h-9 mt-7 flex flex-row items-center gap-87.5">
            <h1 className="font-[500] text-[15px] ml-3">Lorrund</h1>
            <h1 className="font-[600] text-[12px] cursor-pointer text-[#154440] ml-1">Update</h1>
          </div>
        </div>
        <div className="flex flex-row gap-15">
          <h1 className="font-[400] text-[14px] mt-9">Title</h1>
          <div className="bg-[#F2F2F7] rounded-lg w-120 h-9 mt-7 flex flex-row items-center gap-81 ml-10.5">
            <h1 className="font-[500] text-[15px] ml-3">Psycologist</h1>
            <h1 className="font-[600] text-[12px] cursor-pointer text-[#154440] ml-1.5">Update</h1>
          </div>
        </div>
      </div>
    </>
  );
}
