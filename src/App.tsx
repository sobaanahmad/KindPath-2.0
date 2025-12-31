import { Routes, Route, Navigate } from "react-router-dom";
import AdministratorLogin from "./lib/administrator-login/administrator-login";
import AdministratorDashboard from "./lib/administrator-dashboard/administrator-dashboard";
import AdminForgotPassword from "./lib/administrator-login/administrator-forgot-password";
import AdminPasswordOtp from "./lib/administrator-login/administrator-password-otp";
import AdminPasswordReset from "./lib/administrator-login/administrator-password-reset";
import AdminSupport from "./lib/administrator-dashboard/administrator-support";
import AdminReports from "./lib/administrator-dashboard/administrator-reports";
import AdminSettings from "./lib/administrator-dashboard/administrator-settings";
import ClinicLogin from "./lib/clinic-login/clinic-login";
import ClinicForgotPassword from "./lib/clinic-login/clinic-forgot-password";
import ClinicPasswordOtp from "./lib/clinic-login/clinic-password-otp";
import ClinicPasswordReset from "./lib/clinic-login/clinic-password-reset";
import ClinicDashboard from "./lib/clinic-dashboard.tsx/clinic-dashboard";
import ClinicSupport from "./lib/clinic-dashboard.tsx/clinic-support";
import ClinicSettings from "./lib/clinic-dashboard.tsx/clinic-settings";
import ClinicReports from "./lib/clinic-dashboard.tsx/clinic-reports";

export default function App() {
  return (
    <Routes>
      {/*admin routes*/}
      <Route path="/" element={<Navigate to="/admin/login" replace />} />
      <Route path="/admin/login" element={<AdministratorLogin />} />
      <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route path="/admin/password-otp" element={<AdminPasswordOtp />} />
      <Route path="/admin/password-reset" element={<AdminPasswordReset />} />
      <Route path="/admin/dashboard" element={<AdministratorDashboard />} />
      <Route path="/admin/reports" element={<AdminReports />} />
      <Route path="/admin/settings" element={<AdminSettings />} />
      <Route path="/admin/support" element={<AdminSupport />} />
      {/*clinic routes*/}
      <Route path="/clinic/login" element={<ClinicLogin/>} />
      <Route path="/clinic/forgot-password" element={<ClinicForgotPassword />} />
      <Route path="/clinic/password-otp" element={<ClinicPasswordOtp />} />
      <Route path="/clinic/password-reset" element={<ClinicPasswordReset />} />
      <Route path="/clinic/dashboard" element={<ClinicDashboard />} />
      <Route path="/clinic/reports" element={<ClinicReports />} />
      <Route path="/clinic/settings" element={<ClinicSettings />} />
      <Route path="/clinic/support" element={<ClinicSupport />} />
    </Routes>
  );
}
