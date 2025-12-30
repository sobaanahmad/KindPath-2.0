import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import AdministratorSidebar from "./administrator-sidebar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdminSupportHeader from "./administrator-support-header";

export default function AdminSupport() {
  return (
    <>
      <AdminSupportHeader />
      <AdministratorSidebar />
      <div className="h-170 w-140 ml-60 absolute top-30">
        <h1 className="mt-2 text-[20px] font-[600]">
          Need a hand? We are here to support you.
        </h1>
        <h1 className="text-[14px] font-[500] mt-6">
          Have a question? Running into an issue? We’ve got your back.
        </h1>
        <h1 className="text-[14px] font-[500]">
          Submit a request below. Our support team typically responds within 24
          hours.
        </h1>
        <h1 className="text-[14px] font-[500] mt-7">Select a request type:</h1>
        <div className="mt-4">
          <RadioGroup defaultValue="default">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Technical Support</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Portal Enhancement Request</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Other</Label>
            </div>
          </RadioGroup>
        </div>
        <div
          className="flex items-center space-x-1 w-135 
                 rounded-[12px]
                 focus-within:ring-2 focus-within:ring-gray-300
                 focus-within:border-gray-300 absolute top-5 bg-[#F2F2F7] mt-60"
        >
          <Input
            type="text"
            placeholder="Full Name"
            className="flex-1 text-[14px] font-[500] border-none shadow-none focus-visible:ring-0 text-black !placeholder-black"
          />
        </div>

        <div
          className="flex items-center space-x-1 w-135 h-15 
                 rounded-[12px]
                 focus-within:ring-2 focus-within:ring-gray-300
                 focus-within:border-gray-300 absolute top-5 bg-[#F2F2F7] mt-75"
        >
          <Input
            type="text"
            placeholder="Email"
            className="flex flex-col text-[14px] font-[500] border-none shadow-none focus-visible:ring-0 absolute top-0 text-black !placeholder-black"
          />
        </div>

        <div
          className="flex items-center space-x-1 w-135 h-55 
                 rounded-[12px]
                 focus-within:ring-2 focus-within:ring-gray-300
                 focus-within:border-gray-300 absolute top-5 bg-[#F2F2F7] mt-96"
        >
          <Input
            type="text"
            placeholder="Describe your inquiry"
            className="flex flex-col text-[14px] font-[500] border-none shadow-none focus-visible:ring-0 absolute top-0 text-black !placeholder-black"
          />
        </div>

        <Button className="mt-101 w-135 h-12 mb-20 rounded-[12px] bg-[#074799] text-white cursor-pointer hover:bg-[#074799] text-[15px] font-[600]">
          Submit
        </Button>
      </div>

      <div>
        <img
          src="KindPath Social Media Ads - Users 2.png"
          alt=""
          className="w-120 h-155 absolute right-0 top-31"
        />
      </div>
    </>
  );
}
