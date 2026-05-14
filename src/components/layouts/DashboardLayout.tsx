// import { Outlet } from "react-router-dom";
// import Sidebar from "../dashboard/Sidebar";
// import DashboardNavbar from "../dashboard/Navbar";

// const DashboardLayout = () => {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Sidebar />
//       <DashboardNavbar />

//       <main className="ml-64 pt-20 p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;

import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../dashboard/Sidebar";
import DashboardNavbar from "../dashboard/Navbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <DashboardNavbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="lg:ml-64 pt-20 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;