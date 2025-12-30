import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function AdminReportsHeader() {
  return (
    <div className="bg-[#F3F5FF] h-20 w-full">
      <h1 className="text-[28px] font-[600] pt-4 ml-52">Ruth Langmore</h1>
      <div
        className="flex items-center space-x-1 w-180 max-w-md ml-145
                 rounded-[9px]
                focus-within:ring-2 focus-within:ring-gray-300
                focus-within:border-gray-300 absolute top-5 bg-white"
      >
        <SearchIcon className="h-3.5 w-3.5 ml-2 text-gray-500" />
        <Input
          type="text"
          placeholder="Ruth Langmore"
          className="flex-1 border-none shadow-none focus-visible:ring-0"
        />
      </div>
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
