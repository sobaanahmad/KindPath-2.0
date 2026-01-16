import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const otpSchema = z.object({
  otp: z.string().length(4, { message: "OTP must be 4 digits" }),
});
type OTPFormValues = z.infer<typeof otpSchema>;

export default function AdminPasswordOtp() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<OTPFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (values: OTPFormValues) => {
    console.log("OTP submitted:", values);
    navigate("/admin/password-reset");
  };

  return (
    <div className="relative w-full bg-[#031C3D] min-h-screen overflow-hidden pb-[260px] sm:pb-[320px] lg:pb-[360px]">
      <div className="flex flex-col items-center relative z-10 px-4">
        <img
          src="/KP Logo - White .png"
          alt="KP Logo"
          className="sm:h-36 lg:h-48 w-auto ml-5"
        />
        <h1 className="text-[20px] font-[600] text-white mt-2">
          Forgot Password
        </h1>
        <Card className="w-full max-w-sm mt-2 rounded-[24px]">
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <h1 className="text-center text-[14px] sm:text-[16px] font-[500] text-[#1F1F1F]">
                We have sent a code to mel@kindpath.health. Enter the code to
                get started.
              </h1>
              <Controller
                name="otp"
                control={control}
                render={({ field }) => (
                  <div className="flex justify-center mb-2">
                    <InputOTP
                      value={field.value}
                      onChange={field.onChange}
                      maxLength={4}
                    >
                      <InputOTPGroup className="flex gap-4 sm:gap-6">
                        <InputOTPSlot
                          index={0}
                          className="w-12 sm:w-14 h-12 sm:h-14 text-center text-[14px] sm:text-[16px] rounded-[12px]"
                        />
                        <InputOTPSlot
                          index={1}
                          className="w-12 sm:w-14 h-12 sm:h-14 text-center text-[14px] sm:text-[16px] rounded-[12px]"
                        />
                        <InputOTPSlot
                          index={2}
                          className="w-12 sm:w-14 h-12 sm:h-14 text-center text-[14px] sm:text-[16px] rounded-[12px]"
                        />
                        <InputOTPSlot
                          index={3}
                          className="w-12 sm:w-14 h-12 sm:h-14 text-center text-[14px] sm:text-[16px] rounded-[12px]"
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                )}
              />
              <Button
                type="submit"
                className="w-full text-[14px] font-[600] h-12 bg-[#074799] hover:bg-[#074799] rounded-[12px] cursor-pointer"
              >
                Continue
              </Button>
              <div className="flex flex-row gap-1 text-[16px] justify-center">
                <h1 className="font-500">Didn't receive code?</h1>
                <h1 className="font-semibold cursor-pointer hover:underline">
                  Resend Code
                </h1>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="absolute left-0 top-[55vh] sm:top-[52vh] lg:top-[45vh] z-0">
        <img
          src="/KindPath Social Media Ads - Users.png"
          alt="KP Social Media Ads - Users"
          className="h-96 sm:h-[420px] lg:h-[560px] w-auto"
        />
      </div>
    </div>
  );
}
