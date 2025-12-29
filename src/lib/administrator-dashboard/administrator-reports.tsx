import { Card } from "@/components/ui/card";
import AdministratorSidebar from "./administrator-sidebar";
import { Droplet, PersonStanding, UserRound } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import * as React from "react";
import { type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import AdminReportsHeader from "./administrator-reports-header";

export default function AdminReports() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });
  return (
    <>
      <AdminReportsHeader />
      <AdministratorSidebar />
      <div className="absolute top-0 ml-52 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[1150px]">
          <Card className="shadow-none h-[88px] rounded-[12px] relative border-none bg-[#F3F5FF]">
            <div className="flex items-center gap-1 absolute top-3 left-1/2 -translate-x-1/2">
              <UserRound className="text-[#F4CC55] size-5" />
              <h1 className="text-[14px] font-[500]">Patient's Name</h1>
            </div>
            <Separator className="!w-[175px] border-t-[1.5px] border-gray-300 mt-5 mx-auto" />
            <div className="absolute top-12 left-1/2 -translate-x-1/2">
              <h1 className="text-[16px] font-[600]">Ruth Langmore</h1>
            </div>
          </Card>
          <Card className="shadow-none h-[88px] rounded-[12px] relative border-none bg-[#FFF6F3]">
            <div className="flex items-center gap-1 absolute top-3 left-1/2 -translate-x-1/2">
              <PersonStanding className="text-[#048D5D] size-5" />
              <h1 className="text-[14px] font-[500]">Gender</h1>
            </div>
            <Separator className="!w-[175px] border-t-[1.5px] border-gray-300 mt-5 mx-auto" />
            <div className="absolute top-12 left-1/2 -translate-x-1/2">
              <h1 className="text-[16px] font-[600]">Female</h1>
            </div>
          </Card>
          <Card className="shadow-none h-[88px] rounded-[12px] relative border-none bg-[#FFF3F5]">
            <div className="flex items-center gap-1 absolute top-3 left-1/2 -translate-x-1/2">
              <Droplet className="text-[#BD0948] size-5" />
              <h1 className="text-[14px] font-[500]">Support Area</h1>
            </div>
            <Separator className="!w-[175px] border-t-[1.5px] border-gray-300 mt-5 mx-auto" />
            <div className="absolute top-12 left-1/2 -translate-x-1/2">
              <h1 className="text-[16px] font-[600]">Anxiety</h1>
            </div>
          </Card>
        </div>
        <div className="mt-10 w-[1150px]">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <Separator className=" bg-gray-400" />
              <AccordionTrigger className="flex justify-between text-left font-[500] text-[24px] cursor-pointer hover:no-underline">
                Monthly Summaries
              </AccordionTrigger>
              <AccordionContent className="flex flex-wrap gap-21 items-center">
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2 mt-2"
                  />
                  <h1 className="text-[14px] font-[500] ml-3">November.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">October.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">September.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">August.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">July.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">June.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">May.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">April.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">March.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">Febuary.pdf</h1>
                </div>
                <div className="flex flex-col items-center text-center w-[90px]">
                  <img
                    src="description.png"
                    alt="description"
                    className="w-20 h-25 mb-2"
                  />
                  <h1 className="text-[14px] font-[500]">January.pdf</h1>
                </div>
              </AccordionContent>
              <Separator className="my-1 bg-gray-400 mb-2" />
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex justify-between text-left font-[500] text-[24px] cursor-pointer hover:no-underline">
                Pre-Session Ad-hoc Report
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 items-center mb-20">
                <div className="h-97 w-220 border-[1.5px] border-[#D9D9D9] mt-10 rounded-[8px]">
                  <h1 className="text-[26px] font-[600] ml-5 mt-3">
                    Select Date Range
                  </h1>
                  <h1 className="text-[#757575] text-[15px] font-[400] ml-5 mt-2">
                    Select the range of time you wish the report to cover.
                  </h1>
                  <h1 className="text-[#757575] text-[15px] font-[400] ml-5">
                    Click Generate to download.
                  </h1>
                  <div className="h-73 w-63 ml-152.5 -mt-22">
                    <Calendar
                      mode="range"
                      defaultMonth={dateRange?.from}
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={1}
                      className="rounded-[5px] border-[1.5px] border-gray-300"
                    />
                  </div>
                  <Button className="ml-195 mt-6 h-8 w-20 text-[14px] font-[400] rounded-[8px] cursor-pointer">
                    Generate
                  </Button>
                </div>

                <div className="text-[#338B32B2] text-[14px] font-[500] ml-128 -mt-2 italic">
                  KP - 12258 - PSS.pdf has successfully downloaded
                </div>
              </AccordionContent>
              <Separator className="bg-gray-400" />
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
