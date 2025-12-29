import { ArrowDown, ArrowUp, ChevronDown, ChevronRight } from "lucide-react";

export default function AdministratorEvents() {
  return (
    <>
      <div className="w-120 h-160 ml-53 relative">
        <h1 className="font-[700] text-[16px] mt-3 ml-4">Events</h1>
        <ChevronRight className="size-4 absolute top-80 -ml-3 cursor-pointer" />
        <ChevronDown className="size-4 absolute top-112 -ml-3 cursor-pointer" />
        <div className="flex flex-row">
          <div className="w-60 h-140 ml-4 mt-4">
            <h1 className="text-[14px] font-[500] mb-4">Event Type</h1>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#50AEA8] mt-0.5" />
              <h1 className="text-[14px] font-[400]">AM Check-in</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#FF725C] mt-0.5" />
              <h1 className="text-[14px] font-[400]">PM Check-in</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#6766DE] mt-0.5" />
              <h1 className="text-[14px] font-[400]">988 Calls Recommended</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#DCBB9A] mt-0.5" />
              <h1 className="text-[14px] font-[400]">988 Calls Placed</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#20C4F6] mt-0.5" />
              <h1 className="text-[14px] font-[400]">
                Kay Ventions Recommended
              </h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#DE6666] mt-0.5" />
              <h1 className="text-[14px] font-[400]">Kay Interventions Used</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#FF0202] mt-0.5" />
              <h1 className="text-[14px] font-[400]">Toolbox Views</h1>
              <div className="flex flex-col mt-7 absolute ml-6">
                <div className="flex flex-row gap-6 space-y-2">
                  <h1 className="text-[14px] font-bold">Yes this helped</h1>
                  <h1 className="text-[14px] font-[400]">79%</h1>
                </div>
                <div className="flex flex-row gap-25.5 space-y-2">
                  <h1 className="text-[14px] font-bold">No</h1>
                  <h1 className="text-[14px] font-[400]">20%</h1>
                </div>
                <div className="flex flex-row gap-11">
                  <h1 className="text-[14px] font-bold">No Response</h1>
                  <h1 className="text-[14px] font-[400]">1%</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 space-y-5 mt-22">
              <div className="w-4 h-4 bg-[#EAEA11] mt-0.5" />
              <h1 className="text-[14px] font-[400]">
                Kay Intervention Rating
              </h1>
              <div className="flex flex-col mt-7 absolute ml-6">
                <div className="flex flex-row gap-18 space-y-2">
                  <h1 className="text-[14px] font-bold">Helpful</h1>
                  <h1 className="text-[14px] font-[400]">79%</h1>
                </div>
                <div className="flex flex-row gap-6.5 space-y-2">
                  <h1 className="text-[14px] font-bold">A little helpful</h1>
                  <h1 className="text-[14px] font-[400]">20%</h1>
                </div>
                <div className="flex flex-row gap-13">
                  <h1 className="text-[14px] font-bold">Not helpful</h1>
                  <h1 className="text-[14px] font-[400]">1%</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-15 h-140 mt-4">
            <h1 className="font-[500] text-[14px] ml-6">Value</h1>
            <div className="flex flex-row">
              <div className="flex flex-col gap-2 space-y-2 mt-3">
                <h1 className="text-[14px] font-[400] ml-7">96%</h1>
                <h1 className="text-[14px] font-[400] ml-7">90%</h1>
                <h1 className="text-[14px] font-[400] ml-7 mt-1">10</h1>
                <h1 className="text-[14px] font-[400] ml-7">5</h1>
                <h1 className="text-[14px] font-[400] ml-7 mt-1">30</h1>
                <h1 className="text-[14px] font-[400] ml-7">6</h1>
                <h1 className="text-[14px] font-[400] ml-7">10</h1>
                <h1 className="text-[14px] font-[400] ml-7 mt-23">10</h1>
              </div>
            </div>
          </div>
          <div className="w-42 h-140 mt-4 ml-1">
            <h1 className="font-[500] text-[14px] ml-3">Rate</h1>
            <div className="flex flex-row">
              <div className="flex flex-col gap-2 space-y-2 mt-3">
                <h1 className="text-[14px] font-[400] text-[#25D255] ml-2 flex flex-row gap-1">
                  <ArrowUp className="size-3 mt-1" /> 18% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#25D255] ml-2 flex flex-row gap-1">
                  <ArrowUp className="size-3 mt-1" /> 18% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#D22E25] mt-1 ml-2 flex flex-row gap-1">
                  <ArrowDown className="size-3 mt-1.5" />
                  11% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#D22E25] ml-2 flex flex-row gap-1">
                  <ArrowDown className="size-3 mt-1" />
                  11% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#25D255] mt-1 ml-2 flex flex-row gap-1">
                  <ArrowUp className="size-3 mt-1" /> 18% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#25D255] ml-2 flex flex-row gap-1">
                  <ArrowUp className="size-3 mt-1" /> 18% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#D22E25] ml-2 flex flex-row gap-1">
                  <ArrowDown className="size-3 mt-1.5" />
                  11% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#D22E25] mt-23 ml-2 flex flex-row gap-1">
                  <ArrowDown className="size-3 mt-1" />
                  11% from last month
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
