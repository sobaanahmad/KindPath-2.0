import { Routes, Route, Navigate } from "react-router-dom";
import AdministratorLogin from "./lib/administrator-login/administrator-login";
import AdministratorDashboard from "./lib/administrator-dashboard/administrator-dashboard";
import AdminForgotPassword from "./lib/administrator-login/administrator-forgot-password";
import AdminPasswordOtp from "./lib/administrator-login/administrator-password-otp";
import AdminPasswordReset from "./lib/administrator-login/administrator-password-reset";
import AdminSupport from "./lib/administrator-dashboard/administrator-support";
import AdminReports from "./lib/administrator-dashboard/administrator-reports";
import AdminSettings from "./lib/administrator-dashboard/administrator-settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" replace />} />
      <Route path="/admin/login" element={<AdministratorLogin />} />
      <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route path="/admin/password-otp" element={<AdminPasswordOtp />} />
      <Route path="/admin/password-reset" element={<AdminPasswordReset />} />
      <Route path="/admin/dashboard" element={<AdministratorDashboard />} />
      <Route path="/admin/reports" element={<AdminReports />} />
      <Route path="/admin/settings" element={<AdminSettings />} />
      <Route path="/admin/support" element={<AdminSupport />} />
    </Routes>
  );
}
