import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email({ message: "Email does not match" }),
  password: z.string().min(8, { message: "Password does not match" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function ClinicLogin() {
  const navigate = useNavigate();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const onSubmit = (values: LoginFormValues) => {
    console.log("Form submitted:", values);
    navigate("/clinic/dashboard");
  };

  return (
    <div className="relative w-full bg-[#031C3D] min-h-screen overflow-hidden pb-[260px] sm:pb-[320px] lg:pb-[360px]">
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
        <img
          src="/KP Logo - White .png"
          alt="KP Logo"
          className="h-28 sm:h-36 lg:h-48 w-auto ml-5"
        />
        <h1 className="mt-2 text-[20px] font-[600] text-white">
          Administrator Login
        </h1>
        <Card className="mt-2 w-full max-w-sm rounded-[24px]">
          <CardContent className="pt-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder=" "
                        className="h-15 rounded-[12px] bg-[#F2F2F7] px-3 text-[13px] font-[500] text-black border-none shadow-none"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                      />
                      <div className="pointer-events-none absolute left-3 top-3 flex flex-col space-y-1.5">
                        {!emailFocused && !field.value && (
                          <>
                            <span className="text-[14px] font-[500] leading-4 text-black">
                              Email
                            </span>
                            <span className="text-[13px] font-[500] leading-4 text-[#8E8E93]">
                              enter a suitable email
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
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        placeholder=" "
                        className="h-15 rounded-[12px] bg-[#F2F2F7] px-3 text-[13px] font-[500] text-black border-none shadow-none"
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                      />
                      <div className="pointer-events-none absolute left-3 top-3 flex flex-col space-y-1.5">
                        {!passwordFocused && !field.value && (
                          <>
                            <span className="text-[14px] font-[500] leading-4 text-black">
                              Password
                            </span>
                            <span className="text-[13px] font-[500] leading-4 text-[#8E8E93]">
                              a password you can easily remember
                            </span>
                          </>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Link
                  to="/clinic/forgot-password"
                  className="-mt-3 mb-2 text-[14px] font-[600] text-[#8E8E93] hover:text-[#074799]"
                >
                  Forgot Password?
                </Link>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-[12px] bg-[#074799] text-[14px] font-[600] hover:bg-[#074799] cursor-pointer"
                >
                  Log In
                </Button>
              </form>
            </Form>
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
