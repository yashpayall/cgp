import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PayRequests from "@/components/pricing/PayRequests";
import PerfectPlanTable from "@/components/pricing/PerfectPlanTable";
import Pricing from "@/components/pricing/Pricing";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Pricing />
      <PayRequests />
      <PerfectPlanTable />
      <Footer />
    </>
  );
};

export default page;
