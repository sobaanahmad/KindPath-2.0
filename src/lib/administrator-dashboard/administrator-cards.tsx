import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";

import { Card, CardAction } from "@/components/ui/card";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdministratorCards() {
  return (
    <>
      <div className="flex flex-row gap-2 absolute top-30">
        <ButtonGroup className="ml-52">
          <Button className="cursor-pointer rounded-[8px] w-15 h-12.5 bg-[#EDF1F8] hover:bg-[#EDF1F8] text-black text-[13px] font-[400]">
            All
          </Button>
        </ButtonGroup>
        <ButtonGroup className="ml-147">
          <Button className="cursor-pointer rounded-[8px] w-25 h-12.5 bg-[#EDF1F8] hover:bg-[#EDF1F8] text-black text-[13px] font-[400]">
            This Month
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button className="cursor-pointer rounded-[8px] w-26 py-6 bg-white hover:bg-white text-black text-[13px] font-[400] border border-gray-200">
            This Year
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button className="cursor-pointer rounded-[8px] w-37 py-6 bg-white hover:bg-white text-black text-[13px] font-[400] border border-gray-200">
            Custom Date
            <ChevronDown className="cursor-pointer size-5" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button className="cursor-pointer rounded-[8px] w-35 py-6 bg-[#162958] hover:bg-[#162958] text-white text-[13px] font-[400]">
            Download Data
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-row gap-2 w-full absolute top-49">
        <Card className="w-[182px] h-[135px] rounded-[8px] relative ml-52 border border-gray-200 shadow-none">
          <CardHeader>
            <CardTitle className="text-[13px] font-[500] absolute top-4 left-3">
              Connect + Subscribers
            </CardTitle>
            <CardDescription className="text-[38px] font-[500] absolute top-9 left-3 text-black">
              156
            </CardDescription>
            <CardDescription className="text-[13px] font-[400] absolute top-20 left-3 text-[#D22E25]">
              <div className="flex gap-1 mt-4">
                <ArrowDown className="size-3 mt-1" />
                11% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="w-[182px] h-[135px] rounded-[8px] relative border border-gray-200 shadow-none">
          <CardHeader>
            <CardTitle className="text-[13px] font-[500] absolute top-4 left-3">
              Connect Subscribers
            </CardTitle>
            <CardDescription className="text-[38px] font-[500] absolute top-9 left-3 text-black">
              25
            </CardDescription>
            <CardDescription className="text-[13px] font-[400] absolute top-20 left-3 text-[#25D255]">
              <div className="flex gap-1 mt-4">
                <ArrowUp className="size-3 mt-1" />
                18% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="w-[178px] h-[135px] rounded-[8px] relative border border-gray-200 shadow-none">
          <CardHeader>
            <CardTitle className="text-[13px] font-[500] absolute top-4 left-3">
              Clinic/Health Systems
            </CardTitle>
            <CardDescription className="text-[38px] font-[500] absolute top-9 left-3 text-black">
              4
            </CardDescription>
            <CardDescription className="text-[13px] font-[400] absolute top-20 left-3 text-[#25D255]">
              <div className="flex gap-1 mt-4">
                <ArrowUp className="size-3 mt-1" />
                7% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="w-[178px] h-[135px] rounded-[8px] relative border border-gray-200 shadow-none">
          <CardHeader>
            <CardTitle className="text-[13px] font-[500] absolute top-4 left-3">
              Total Providers
            </CardTitle>
            <CardDescription className="text-[38px] font-[500] absolute top-9 left-3 text-black">
              43
            </CardDescription>
            <CardDescription className="text-[13px] font-[400] absolute top-20 left-3 text-[#25D255]">
              <div className="flex gap-1 mt-4">
                <ArrowUp className="size-3 mt-1" />
                7% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="w-[234px] h-[135px] rounded-[8px] relative border border-gray-200 shadow-none">
          <CardHeader>
            <CardTitle className="text-[13px] font-[500] absolute top-4 left-2">
              Connect Subscription Revenue
            </CardTitle>
            <CardDescription className="text-[38px] font-[500] absolute top-9 left-2 text-black">
              $4,289
            </CardDescription>
            <CardDescription className="text-[13px] font-[400] absolute top-20 left-2 text-[#D22E25]">
              <div className="flex gap-1 mt-4">
                <ArrowDown className="size-3 mt-1" />
                18% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="w-[180px] h-[135px] rounded-[8px] relative border border-gray-200 shadow-none">
          <CardHeader>
            <CardTitle className="text-[13px] font-[500] absolute top-4 left-2">
              Health System Revenue
            </CardTitle>
            <CardDescription className="text-[38px] font-[500] absolute top-9 left-3 text-black">
              1.9M
            </CardDescription>
            <CardDescription className="text-[13px] font-[400] absolute top-20 left-3 text-[#25D255]">
              <div className="flex gap-1 mt-4">
                <ArrowUp className="size-3 mt-1" />
                2.3% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
