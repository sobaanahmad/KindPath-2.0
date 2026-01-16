export default function AdministratorHeader() {
  return (
    <div className="bg-[#F3F5FF] h-20 w-full relative flex items-center justify-between px-3 lg:px-1 sm:px-3">
      <h1 className="text-[28px] font-[600] ml-6">Admin Dashboard</h1>
      <div className="flex items-center gap-3 mr-2">
        <div className="w-10 h-10">
          <img
            src="/Ellipse 68.png"
            alt="pfp"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-[600] text-[12px]">Jack Lorrund</h1>
          <h1 className="font-[500] text-[12px] -mt-1">Psychologist</h1>
        </div>
      </div>
    </div>
  );
}
