import { useLocation, useNavigate } from "react-router-dom";
import {
  ChartPie,
  CircleQuestionMark,
  SettingsIcon,
  Menu,
  X,
  FileText,
} from "lucide-react";
import { useState } from "react";

export default function AdministratorSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="flex flex-col items-center mt-6">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/admin/dashboard");
            setOpen(false);
          }}
        >
          <img
            src="/K-Logo.png"
            alt="K Logo"
            className="h-22 w-22 object-contain"
          />
        </div>
      </div>
      <div className="space-y-6 mt-7 flex-1">
        {[
          {
            label: "Reports",
            path: "/admin/reports",
            icon: FileText,
          },
          {
            label: "Admin Dashboard",
            path: "/admin/dashboard",
            icon: ChartPie,
          },
          {
            label: "Settings",
            path: "/admin/settings",
            icon: SettingsIcon,
          },
          {
            label: "Support",
            path: "/admin/support",
            icon: CircleQuestionMark,
          },
        ].map(({ label, path, icon: Icon }) => (
          <div
            key={path}
            onClick={() => {
              navigate(path);
              setOpen(false);
            }}
            className={`flex gap-2 p-2 pl-4 text-[16px] font-[500] cursor-pointer
              hover:bg-[#E1FFBB] hover:text-black
              ${isActive(path) ? "bg-[#E1FFBB] text-black font-[700]" : ""}
            `}
          >
            <Icon className="size-4 mt-0.5" />
            {label}
          </div>
        ))}
      </div>
    </>
  );
  return (
    <>
    <div className="">
      <button
        className="lg:hidden fixed top-6 left-3 z-50 py-1 rounded-sm cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-5 h-5 " />
      </button></div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[12.5rem] bg-sidebar 
    flex flex-col overflow-y-auto overscroll-contain
    transform transition-transform duration-300 lg:hidden
    ${open ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <X className="w-4 h-4" />
        </button>
        <SidebarContent />
      </aside>
      <aside className="hidden lg:flex w-[12.5rem] min-h-screen bg-sidebar flex-col shrink-0">
        <SidebarContent />
      </aside>
    </>
  );
}
