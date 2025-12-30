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

export default function AdministratorSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider>
      <Sidebar
        style={{
          "--sidebar-width": "12rem",
          "--sidebar-width-icon": "4rem",
        } as React.CSSProperties}
      >
        <SidebarHeader className="flex flex-col items-center mt-6">
          <div
            className="cursor-pointer"
            onClick={() => navigate("/admin-dashboard")}
          >
            <img
              src="K-Logo.png"
              alt="K Logo"
              className="h-22 w-22 object-contain"
            />
          </div>
        </SidebarHeader>
        <SidebarContent className="space-y-2 mt-7">
          <SidebarGroup
            onClick={() => navigate("/admin-reports")}
            className={`flex flex-row gap-2 pl-3 text-[16px] font-[500] text-left cursor-pointer hover:bg-[#E1FFBB] hover:text-black ${
              isActive("/admin-reports") ? "bg-[#E1FFBB] text-black font-[700]" : ""
            }`}
          >
            <FileChartColumnIncreasing className="size-4 mt-0.5" /> Reports
          </SidebarGroup>
          <SidebarGroup
            onClick={() => navigate("/admin-dashboard")}
            className={`flex flex-row gap-2 pl-3 text-[16px] font-[500] text-left cursor-pointer hover:bg-[#E1FFBB] hover:text-black ${
              isActive("/admin-dashboard") ? "bg-[#E1FFBB] text-black font-[700]" : ""
            }`}
          >
            <ChartPie className="size-4 mt-0.5" /> Admin Dashboard
          </SidebarGroup>
          <SidebarGroup
            onClick={() => navigate("/admin-settings")}
            className={`flex flex-row gap-2 pl-3 text-[16px] font-[500] text-left cursor-pointer hover:bg-[#E1FFBB] hover:text-black ${
              isActive("/admin-settings") ? "bg-[#E1FFBB] text-black font-[700]" : ""
            }`}
          >
            <SettingsIcon className="size-4 mt-0.5" /> Settings
          </SidebarGroup>
          <SidebarGroup
            onClick={() => navigate("/admin-support")}
            className={`flex flex-row gap-2 pl-3 text-[16px] font-[500] text-left cursor-pointer hover:bg-[#E1FFBB] hover:text-black ${
              isActive("/admin-support") ? "bg-[#E1FFBB] text-black font-[700]" : ""
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
