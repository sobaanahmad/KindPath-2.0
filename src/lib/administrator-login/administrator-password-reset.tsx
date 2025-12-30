import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

const loginSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "New password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password must be at least 8 characters" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type LoginFormValues = z.infer<typeof loginSchema>;

export default function AdminPasswordReset() {
  const navigate = useNavigate();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const onSubmit = (values: LoginFormValues) => {
    console.log("Form submitted:", values);
    navigate("/admin/login"); 
  };
  return (
    <div className="min-h-screen bg-[#031C3D] relative pb-[360px]">
      <div className="flex flex-col items-center relative z-10">
        <img
          src="/KP Logo - White .png"
          alt="KP Logo"
          className="h-48 w-100 ml-5"
        />
        <h1 className="text-[20px] font-[600] text-white mt-4">Password Reset</h1>

        <Card className="w-full max-w-sm mt-2 rounded-[24px]">
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 mt-2"
              >
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <Input
                        {...field}
                        type="password"
                        placeholder=" "
                        className="border-none shadow-none bg-[#F2F2F7] text-[13px] font-[500] text-black h-15 px-3 rounded-[12px]"
                        onFocus={() => setFocusedField("new")}
                        onBlur={() => setFocusedField(null)}
                      />
                      <div className="absolute left-3 top-3 pointer-events-none flex flex-col space-y-1.5">
                        {focusedField !== "new" && !field.value && (
                          <>
                            <span className="text-black text-[14px] font-[500] leading-4">
                              Enter New Password
                            </span>
                            <span className="text-[#8E8E93] text-[13px] font-[500] leading-4">
                              a password you can easily remember
                            </span>
                          </>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <Input
                        {...field}
                        type="password"
                        placeholder=" "
                        className="border-none shadow-none bg-[#F2F2F7] text-[13px] font-[500] text-black h-15 px-3 rounded-[12px]"
                        onFocus={() => setFocusedField("confirm")}
                        onBlur={() => setFocusedField(null)}
                      />
                      <div className="absolute left-3 top-3 pointer-events-none flex flex-col space-y-1.5">
                        {focusedField !== "confirm" && !field.value && (
                          <>
                            <span className="text-black text-[14px] font-[500] leading-4">
                              Confirm Password
                            </span>
                            <span className="text-[#8E8E93] text-[13px] font-[500] leading-4">
                              enter your new password again
                            </span>
                          </>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full text-[14px] font-[600] h-10 bg-[#074799] hover:bg-[#074799] rounded-[12px] cursor-pointer mt-2"
                >
                  Continue
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="absolute left-0 top-[50vh] z-0">
        <img
          src="/KindPath Social Media Ads - Users.png"
          alt="KP Social Media Ads - Users"
          className="h-140 w-106"
        />
      </div>
    </div>
  );
}
