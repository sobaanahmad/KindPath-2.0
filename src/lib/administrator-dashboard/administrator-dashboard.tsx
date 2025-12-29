"use client";
import AdministratorHeader from "./administrator-header";
import AdministratorSidebar from "./administrator-sidebar";
import AdministratorLineChart from "./administrator-linechart";
import AdministratorCards from "./administrator-cards";
import AdministratorEvents from "./administrator-events";
import AdministratorTable from "./administrator-table";
import AdministratorBarchart from "./administrator-barchart";


export default function AdministratorDashboard() {
  return (
    <>
      <AdministratorHeader />
      <AdministratorSidebar />
      <AdministratorCards/>
      <AdministratorLineChart/>
      <div className="flex flex-row gap-30">
      <AdministratorEvents/>
      <AdministratorBarchart/>
      </div>
      <AdministratorTable/>
    </>
  );
}
