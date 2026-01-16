import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction } from "@/components/ui/card";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdministratorCards() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap">
        <ButtonGroup>
          <Button className="cursor-pointer rounded-[8px] w-full sm:w-auto lg:w-15 h-12.5 bg-[#EDF1F8] hover:bg-[#EDF1F8] text-black text-[14px] font-[400] sansfont">
            All
          </Button>
        </ButtonGroup>
        <div className="hidden xl:flex flex-1" />
        <ButtonGroup>
          <Button className="cursor-pointer rounded-[8px] w-full sm:w-auto lg:w-25 h-12.5 bg-[#EDF1F8] hover:bg-[#EDF1F8] text-black text-[14px] font-[400] sansfont">
            This Month
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            variant="secondary"
            className="cursor-pointer rounded-[8px] w-full sm:w-auto lg:w-26 py-6 bg-white text-black text-[14px] font-[400] border border-gray-200 sansfont"
          >
            This Year
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            variant="secondary"
            className="cursor-pointer rounded-[8px] w-full sm:w-auto lg:w-37 py-6 bg-white text-black text-[14px] font-[400] border border-gray-200 sansfont flex items-center gap-2"
          >
            Custom Date
            <ChevronDown className="size-4" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button className="cursor-pointer rounded-[8px] w-full sm:w-auto lg:w-35 py-6 bg-[#162958] hover:bg-[#162958] text-white text-[14px] font-[400] sansfont">
            Download Data
          </Button>
        </ButtonGroup>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-3 w-full">
        <Card className="h-[150px] rounded-[8px] border border-gray-200 shadow-none">
          <CardHeader className="p-1">
            <CardTitle className="text-[14px] font-[500] sansfont ml-4 -mt-2">
              Connect + Subscribers
            </CardTitle>
            <CardDescription className="text-[40px] font-[500] text-black sansfont ml-4 -mt-2">
              156
            </CardDescription>
            <CardDescription className="text-[14px] font-[400] text-[#D22E25] sansfont ml-4 -mt-2">
              <div className="flex gap-1">
                <ArrowDown className="size-3 mt-1" />
                11% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="h-[150px] rounded-[8px] border border-gray-200 shadow-none">
          <CardHeader className="p-1">
            <CardTitle className="text-[14px] font-[500] sansfont ml-4 -mt-2">
              Connect Subscribers
            </CardTitle>
            <CardDescription className="text-[40px] font-[500] text-black sansfont ml-4 -mt-2">
              25
            </CardDescription>
            <CardDescription className="text-[14px] font-[400] text-[#25D255] sansfont ml-4 -mt-2">
              <div className="flex gap-1">
                <ArrowUp className="size-3 mt-1" />
                18% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="h-[150px] rounded-[8px] border border-gray-200 shadow-none">
          <CardHeader className="p-1">
            <CardTitle className="text-[14px] font-[500] sansfont ml-4 -mt-2">
              Clinic/Health Systems
            </CardTitle>
            <CardDescription className="text-[40px] font-[500] text-black sansfont ml-4 -mt-2">
              4
            </CardDescription>
            <CardDescription className="text-[14px] font-[400] text-[#25D255] sansfont ml-4 -mt-2">
              <div className="flex gap-1">
                <ArrowUp className="size-3 mt-1" />
                7% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="h-[150px] rounded-[8px] border border-gray-200 shadow-none">
          <CardHeader className="p-1">
            <CardTitle className="text-[14px] font-[500] sansfont ml-4 -mt-2">
              Total Providers
            </CardTitle>
            <CardDescription className="text-[40px] font-[500] text-black sansfont ml-4 -mt-2">
              43
            </CardDescription>
            <CardDescription className="text-[14px] font-[400] text-[#25D255] sansfont ml-4 -mt-2">
              <div className="flex gap-1">
                <ArrowUp className="size-3 mt-1" />
                7% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="h-[150px] rounded-[8px] border border-gray-200 shadow-none">
          <CardHeader className="p-1">
            <CardTitle className="text-[14px] font-[500] sansfont ml-4 -mt-2">
              Connect Subscription Revenue
            </CardTitle>
            <CardDescription className="text-[40px] font-[500] text-black sansfont ml-4 -mt-2">
              $4,289
            </CardDescription>
            <CardDescription className="text-[14px] font-[400] text-[#D22E25] sansfont ml-4 -mt-2">
              <div className="flex gap-1">
                <ArrowDown className="size-3 mt-1" />
                18% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
        <Card className="h-[150px] rounded-[8px] border border-gray-200 shadow-none">
          <CardHeader className="p-1">
            <CardTitle className="text-[14px] font-[500] sansfont ml-4 -mt-2">
              Health System Revenue
            </CardTitle>
            <CardDescription className="text-[40px] font-[500] text-black sansfont ml-4 -mt-2">
              1.9M
            </CardDescription>
            <CardDescription className="text-[14px] font-[400] text-[#25D255] sansfont ml-4 -mt-2">
              <div className="flex gap-1">
                <ArrowUp className="size-3 mt-1" />
                2.3% from last month
              </div>
            </CardDescription>
            <CardAction />
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
