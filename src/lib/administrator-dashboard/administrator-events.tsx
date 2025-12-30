import { ArrowDown, ArrowUp } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function AdministratorEvents() {
  return (
    <>
      <div className="w-120 h-160 ml-53 relative">
        <h1 className="font-[700] text-[16px] mt-3 ml-4 sansfont">Events</h1>
        <div className="flex flex-row">
          <div className="w-60 h-140 ml-4 mt-4">
            <h1 className="text-[14px] font-[500] mb-4 sansfont">Event Type</h1>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#50AEA8] mt-0.5" />
              <h1 className="text-[14px] font-[400] sansfont">AM Check-in</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#FF725C] mt-0.5" />
              <h1 className="text-[14px] font-[400] sansfont">PM Check-in</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#6766DE] mt-0.5" />
              <h1 className="text-[14px] font-[400] sansfont">988 Calls Recommended</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#DCBB9A] mt-0.5" />
              <h1 className="text-[14px] font-[400] sansfont">988 Calls Placed</h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#20C4F6] mt-0.5" />
              <h1 className="text-[14px] font-[400] sansfont">
                Kay Intervention Recommended
              </h1>
            </div>
            <div className="flex flex-row gap-2 space-y-5">
              <div className="w-4 h-4 bg-[#DE6666] mt-0.5" />
              <h1 className="text-[14px] font-[400] sansfont">Kay Interventions Used</h1>
            </div>
            <div className="flex flex-row gap-2 w-55 relative">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="toolbox" className="border-none">
                  <AccordionTrigger className="flex items-start gap-[2px] p-0 hover:no-underline cursor-pointer">
                    <div className="w-4 h-4 bg-[#FF0202] mt-0.5" />
                    <h1 className="absolute left-6 text-[14px] font-[400] sansfont">
                      Toolbox Views
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 pt-2">
                    <div className="flex flex-col gap-2 mt-1">
                      <div className="flex flex-row justify-between">
                        <h1 className="text-[14px] font-bold sansfont">
                          Yes this helped
                        </h1>
                        <h1 className="text-[14px] font-[400] sansfont">79%</h1>
                      </div>
                      <div className="flex flex-row justify-between">
                        <h1 className="text-[14px] font-bold sansfont">No</h1>
                        <h1 className="text-[14px] font-[400] sansfont">20%</h1>
                      </div>
                      <div className="flex flex-row justify-between">
                        <h1 className="text-[14px] font-bold sansfont">No Response</h1>
                        <h1 className="text-[14px] font-[400] sansfont">1%</h1>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex flex-row gap-2 mt-5 w-55 relative">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="rating" className="border-none">
                  <AccordionTrigger className="flex items-start gap-[2px] p-0 hover:no-underline cursor-pointer">
                    <div className="w-4 h-4 bg-[#EAEA11] mt-0.5" />
                    <h1 className="absolute left-6 text-[14px] font-[400] sansfont">
                      Kay Intervention Rating
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 pt-2">
                    <div className="flex flex-col gap-2 mt-1">
                      <div className="flex flex-row justify-between">
                        <h1 className="text-[14px] font-bold sansfont">Helpful</h1>
                        <h1 className="text-[14px] font-[400] sansfont">79%</h1>
                      </div>
                      <div className="flex flex-row justify-between">
                        <h1 className="text-[14px] font-bold sansfont">
                          A little helpful
                        </h1>
                        <h1 className="text-[14px] font-[400] sansfont">20%</h1>
                      </div>
                      <div className="flex flex-row justify-between">
                        <h1 className="text-[14px] font-bold sansfont">Not helpful</h1>
                        <h1 className="text-[14px] font-[400] sansfont">1%</h1>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-15 h-140 mt-4">
            <h1 className="font-[500] text-[14px] ml-6 sansfont">Value</h1>
            <div className="flex flex-row">
              <div className="flex flex-col gap-2 space-y-2 mt-3">
                <h1 className="text-[14px] font-[400] ml-7 sansfont">96%</h1>
                <h1 className="text-[14px] font-[400] ml-7 sansfont">90%</h1>
                <h1 className="text-[14px] font-[400] ml-7 mt-1 sansfont">10</h1>
                <h1 className="text-[14px] font-[400] ml-7 sansfont">5</h1>
                <h1 className="text-[14px] font-[400] ml-7 mt-1 sansfont">30</h1>
                <h1 className="text-[14px] font-[400] ml-7 sansfont">6</h1>
                <h1 className="text-[14px] font-[400] ml-7 sansfont">10</h1>
                <h1 className="text-[14px] font-[400] ml-7 mt-0.5 sansfont">10</h1>
              </div>
            </div>
          </div>
          <div className="w-42 h-140 mt-4 ml-1">
            <h1 className="font-[500] text-[14px] ml-3 sansfont">Rate</h1>
            <div className="flex flex-row">
              <div className="flex flex-col gap-2 space-y-2 mt-3">
                <h1 className="text-[14px] font-[400] text-[#25D255] ml-2 flex flex-row gap-1 sansfont">
                  <ArrowUp className="size-3 mt-1" /> 18% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#25D255] ml-2 flex flex-row gap-1 sansfont">
                  <ArrowUp className="size-3 mt-1" /> 18% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#D22E25] mt-1 ml-2 flex flex-row gap-1 sansfont">
                  <ArrowDown className="size-3 mt-1.5" />
                  11% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#D22E25] ml-2 flex flex-row gap-1 sansfont">
                  <ArrowDown className="size-3 mt-1" />
                  11% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#25D255] mt-1 ml-2 flex flex-row gap-1 sansfont">
                  <ArrowUp className="size-3 mt-1" /> 18% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#25D255] ml-2 flex flex-row gap-1 sansfont">
                  <ArrowUp className="size-3 mt-1" /> 18% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#D22E25] ml-2 flex flex-row gap-1 sansfont">
                  <ArrowDown className="size-3 mt-1.5" />
                  11% from last month
                </h1>
                <h1 className="text-[14px] font-[400] text-[#D22E25] mt-0.5 ml-2 flex flex-row gap-1 sansfont">
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
