export default function AdminSupportHeader() {
  return (
    <div className="bg-[#F3F5FF] h-20 w-full flex items-center justify-between px-6">
      <h1 className="text-[28px] font-[600]">Support</h1>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10">
          <img
            src="/Ellipse 68.png"
            alt="profile picture"
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
