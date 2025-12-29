export default function AdministratorHeader() {
  return (
      <div className="bg-[#F3F5FF] h-20 w-full">
        <h1 className="text-[28px] font-[600] pt-4 ml-52">Admin Dashboard</h1>
        <div className="ml-305 absolute top-4 w-10 h-10">
          <img src="Ellipse 68.png" alt="profile picture" />
        </div>
        <div className="flex flex-col ml-317 absolute top-5">
          <h1 className="font-[600] text-[12px]">Jack Lorrund</h1>
          <h1 className="font-[500] text-[12px] -mt-1">Psycologist</h1>
        </div>
      </div>
  );
}
