import { useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  ChartPie,
  CircleQuestionMark,
  FileChartColumnIncreasing,
  SettingsIcon,
} from "lucide-react";

export default function ClinicSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider>
      <Sidebar
        style={
          {
            "--sidebar-width": "12.2rem",
            "--sidebar-width-icon": "4rem",
          } as React.CSSProperties
        }
      >
        <SidebarHeader className="flex flex-col items-center mt-6">
          <div
            className="cursor-pointer"
            onClick={() => navigate("/clinic/dashboard")}
          >
            <img
              src="/K-Logo.png"
              alt="K Logo"
              className="h-22 w-22 object-contain"
            />
          </div>
        </SidebarHeader>
        <SidebarContent className="space-y-2 mt-7">
          <SidebarGroup
            onClick={() => navigate("/clinic/reports")}
            className={`flex flex-row gap-2 pl-3 text-[15px] font-[500] text-left cursor-pointer hover:bg-[#E1FFBB] hover:text-black ${
              isActive("/clinic/reports")
                ? "bg-[#E1FFBB] text-black font-[700]"
                : ""
            }`}
          >
            <FileChartColumnIncreasing className="size-4 mt-1" /> Reports
          </SidebarGroup>
          <SidebarGroup
            onClick={() => navigate("/clinic/dashboard")}
            className={`flex flex-row gap-2 pl-3 text-[15px] font-[500] text-left cursor-pointer hover:bg-[#E1FFBB] hover:text-black ${
              isActive("/clinic/dashboard")
                ? "bg-[#E1FFBB] text-black font-[700]"
                : ""
            }`}
          >
            <ChartPie className="size-4 mt-1" /> Admin Dashboard
          </SidebarGroup>
          <SidebarGroup
            onClick={() => navigate("/clinic/settings")}
            className={`flex flex-row gap-2 pl-3 text-[15px] font-[500] text-left cursor-pointer hover:bg-[#E1FFBB] hover:text-black ${
              isActive("/clinic/settings")
                ? "bg-[#E1FFBB] text-black font-[700]"
                : ""
            }`}
          >
            <SettingsIcon className="size-4 mt-1" /> Settings
          </SidebarGroup>
          <SidebarGroup
            onClick={() => navigate("/clinic/support")}
            className={`flex flex-row gap-2 pl-3 text-[15px] font-[500] text-left cursor-pointer hover:bg-[#E1FFBB] hover:text-black ${
              isActive("/clinic/support")
                ? "bg-[#E1FFBB] text-black font-[700]"
                : ""
            }`}
          >
            <CircleQuestionMark className="size-4 mt-0.5" /> Support
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  );
}
