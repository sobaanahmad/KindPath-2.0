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

export default function AdministratorLogin() {
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
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-[#031C3D] relative pb-[360px]">
      <div className="flex flex-col items-center relative z-10">
        <img
          src="KP Logo - White .png"
          alt="KP Logo"
          className="h-48 w-100 ml-5"
        />
        <h1 className="text-[20px] font-[600] text-white mt-4">
          Administrator Login
        </h1>
        <Card className="w-full max-w-sm mt-2 rounded-[24px]">
          <CardContent>
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
                        className="border-none shadow-none bg-[#F2F2F7] text-[13px] font-[500] text-black h-15 px-3 rounded-[12px]"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                      />
                      <div className="absolute left-3 top-3 pointer-events-none flex flex-col space-y-1.5">
                        {!emailFocused && !field.value && (
                          <>
                            <span className="text-black text-[14px] font-[500] leading-4">
                              Email
                            </span>
                            <span className="text-[#8E8E93] text-[13px] font-[500] leading-4">
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
                        className="border-none shadow-none bg-[#F2F2F7] text-[13px] font-[500] text-black h-15 px-3 rounded-[12px]"
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                      />
                      <div className="absolute left-3 top-3 pointer-events-none flex flex-col space-y-1.5">
                        {!passwordFocused && !field.value && (
                          <>
                            <span className="text-black text-[14px] font-[500] leading-4">
                              Password
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
                <Link
                  to="/admin-forgot-password"
                  className="inline-block -mt-3 mb-2 hover:text-[#074799] text-[14px] font-[600] text-[#8E8E93]"
                >
                  Forgot Password?
                </Link>
                <Button
                  type="submit"
                  className="w-full h-10 text-[14px] font-[600] bg-[#074799] hover:bg-[#074799] rounded-[12px] cursor-pointer"
                >
                  Log In
                </Button>
              </form>
            </Form>
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
