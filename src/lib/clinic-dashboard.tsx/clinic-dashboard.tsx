import ClinicHeader from "./clinic-header";
import ClinicSidebar from "./clinic-sidebar";
import ClinicLineChart from "./clinic-linechart";
import ClinicCards from "./clinic-cards";
import ClinicEvents from "./clinic-events";
import ClinicTable from "./clinic-table";
import ClinicBarchart from "./clinic-barchart";

export default function ClinicDashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <ClinicSidebar />
      <main className="flex-1 flex flex-col">
        <ClinicHeader />
        <div className="flex-1 p-4 sm:p-6 space-y-3 overflow-auto">
          <ClinicCards />
          <ClinicLineChart />
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 mt-8 lg:mt-15">
            <ClinicEvents />
            <div className=" mr-30">
              <ClinicBarchart />
            </div>
          </div>
          <ClinicTable />
        </div>
      </main>
    </div>
  );
}
