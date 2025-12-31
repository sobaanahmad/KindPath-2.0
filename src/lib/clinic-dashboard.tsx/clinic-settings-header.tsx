export default function ClinicSettingsHeader() {
  return (
      <div className="bg-[#F3F5FF] h-20 w-full">
        <h1 className="text-[28px] font-[600] pt-4 ml-52">Settings</h1>
        <div className="right-35 absolute top-4.5 w-10 h-10">
          <img src="/Ellipse 68.png" alt="profile picture" />
        </div>
        <div className="flex flex-col right-14 absolute top-5.5">
          <h1 className="font-[600] text-[12px]">Jack Lorrund</h1>
          <h1 className="font-[500] text-[12px] -mt-1">Psychologist</h1>
        </div>
      </div>
  );
}
