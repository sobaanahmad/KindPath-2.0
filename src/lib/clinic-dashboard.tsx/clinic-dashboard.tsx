import ClinicBarchart from "./clinic-barchart";
import ClinicCards from "./clinic-cards";
import ClinicEvents from "./clinic-events";
import ClinicHeader from "./clinic-header";
import ClinicLineChart from "./clinic-linechart";
import ClinicSidebar from "./clinic-sidebar";
import ClinicTable from "./clinic-table";

export default function ClinicDashboard() {
  return (
    <>
      <ClinicHeader />
      <ClinicSidebar />
      <ClinicCards />
      <ClinicLineChart />
      <div className="flex flex-row gap-25">
      <ClinicEvents />
      <ClinicBarchart />
      </div>
      <ClinicTable />
    </>
  );
}
