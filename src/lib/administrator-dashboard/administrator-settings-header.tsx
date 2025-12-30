export default function AdminSettingsHeader() {
  return (
      <div className="bg-[#F3F5FF] h-20 w-full">
        <h1 className="text-[28px] font-[600] pt-4 ml-52">Settings</h1>
        <div className="ml-305 absolute top-4 w-10 h-10">
          <img src="Ellipse 68.png" alt="profile picture" />
        </div>
        <div className="flex flex-col ml-317 absolute top-5">
          <h1 className="font-[600] text-[12px]">Jack Lorrund</h1>
          <h1 className="font-[500] text-[12px] -mt-1">Psychologist</h1>
        </div>
      </div>
  );
}
