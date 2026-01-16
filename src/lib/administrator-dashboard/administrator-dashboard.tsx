import AdministratorHeader from "./administrator-header";
import AdministratorSidebar from "./administrator-sidebar";
import AdministratorLineChart from "./administrator-linechart";
import AdministratorCards from "./administrator-cards";
import AdministratorEvents from "./administrator-events";
import AdministratorTable from "./administrator-table";
import AdministratorBarchart from "./administrator-barchart";

export default function AdministratorDashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <AdministratorSidebar />
      <main className="flex-1 flex flex-col">
        <AdministratorHeader />
        <div className="flex-1 p-4 sm:p-6 space-y-3 overflow-auto">
          <AdministratorCards />
          <AdministratorLineChart />
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 mt-8 lg:mt-15">
            <AdministratorEvents />
            <div className=" mr-30">
              <AdministratorBarchart />
            </div>
          </div>
          <AdministratorTable />
        </div>
      </main>
    </div>
  );
}
