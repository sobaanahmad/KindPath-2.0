import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function AdminReportsHeader() {
  return (
    <header className="bg-[#F3F5FF] h-20 w-full lg:px-1 sm:px-1 grid grid-cols-3 items-center">
      <h1 className="lg:text-[28px] sm:text-[18px] font-[600] truncate ml-10">
        Ruth Langmore
      </h1>
      <div className="flex justify-center">
        <div
          className="
            flex items-center 
            w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]
            bg-white rounded-[9px] px-2
          "
        >
          <SearchIcon className="h-4 w-4 text-gray-500 shrink-0" />
          <Input
            type="text"
            placeholder="Ruth Langmore"
            className="
              flex-1 border-none shadow-none 
              focus-visible:ring-0 
              text-sm
            "
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 mr-2">
        <div className="w-9 h-9 sm:w-10 sm:h-10">
          <img
            src="/Ellipse 68.png"
            alt="profile picture"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="hidden sm:flex flex-col">
          <h1 className="font-[600] text-[12px]">Jack Lorrund</h1>
          <h1 className="font-[500] text-[12px] -mt-1">Psychologist</h1>
        </div>
      </div>
    </header>
  );
}
