import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import AdministratorSidebar from "./administrator-sidebar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdminSupportHeader from "./administrator-support-header";

export default function AdminSupport() {
  return (
    <div className="flex min-h-screen w-full">
      <AdministratorSidebar />
      <main className="flex-1 flex flex-col">
        <AdminSupportHeader />
        <div className="flex-1 p-12 overflow-auto flex md:justify-center lg:justify-start">
          <div className="flex-1 max-w-xl space-y-6">
            <h1 className="text-[20px] font-[600]">
              Need a hand? We are here to support you.
            </h1>
            <div>
              <h1 className="text-[14px] font-[500]">
                Have a question? Running into an issue? We've got your back.
              </h1>
              <h1 className="text-[14px] font-[500]">
                Submit a request below. Our support team typically responds
                within 24 hours.
              </h1>
            </div>
            <div>
              <h1 className="text-[#363434] text-[14px] font-[500] mb-4">
                Select a request type:
              </h1>
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
            <div className="space-y-4">
              <div className="bg-[#F2F2F7] rounded-[12px]">
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="text-[14px] font-[500] border-none shadow-none focus-visible:ring-0 text-[#363434] !placeholder-black"
                />
              </div>
              <div className="bg-[#F2F2F7] rounded-[12px]">
                <Input
                  type="text"
                  placeholder="Email"
                  className="text-[14px] font-[500] border-none shadow-none focus-visible:ring-0 text-[#363434] !placeholder-black"
                />
              </div>
              <div className="bg-[#F2F2F7] rounded-[12px]">
                <textarea
                  placeholder="Describe your inquiry"
                  className="w-full h-40 p-3 text-[14px] font-[500] border-none bg-transparent focus:outline-none resize-none text-[#363434] placeholder-black"
                />
              </div>
              <Button className="w-full h-12 rounded-[12px] bg-[#074799] text-white cursor-pointer hover:bg-[#074799] text-[15px] font-[600]">
                Submit
              </Button>
            </div>
          </div>
          <div className="hidden xl:block flex-1 absolute right-0">
            <img
              src="/KindPath Social Media Ads - Users 2.png"
              alt=""
              className="w-full max-w-md ml-auto object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
