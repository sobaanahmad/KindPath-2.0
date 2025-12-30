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
    navigate("/admin-password-reset");
  };

  return (
    <div className="min-h-screen bg-[#031C3D] relative pb-[360px]">
      <div className="flex flex-col items-center relative z-10">
        <img
          src="KP Logo - White .png"
          alt="KP Logo"
          className="h-48 w-100 ml-5"
        />
        <h1 className="text-[20px] font-[600] text-white mt-4">Forgot Password</h1>
        <Card className="w-full max-w-sm mt-2 rounded-[24px]">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <h1 className="text-center text-[16px] font-500">
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
                      <InputOTPGroup className="flex gap-6">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                )}
              />
              <Button
                type="submit"
                className="w-full text-[14px] font-[600] h-10 bg-[#074799] hover:bg-[#074799] rounded-[12px] cursor-pointer mb-6"
              >
                Continue
              </Button>
            </form>
            <div className="flex flex-row gap-1 text-[16px] justify-center">
              <h1 className="font-500">Didn't receive code?</h1>
              <h1 className="font-semibold cursor-pointer hover:underline">
                Resend Code
              </h1>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="absolute left-0 top-[50vh] z-0">
        <img
          src="KindPath Social Media Ads - Users.png"
          alt="KP Social Media Ads - Users"
          className="h-140 w-106"
        />
      </div>
    </div>
  );
}
