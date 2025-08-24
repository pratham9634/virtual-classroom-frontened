import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";


export default function AppLayout({ role }) {
return (
<div className="min-h-screen grid grid-rows-[auto_1fr]">
<Navbar />
<div className="grid md:grid-cols-[260px_1fr] gap-4">
<Sidebar role={role} />
<main className="container py-6">
<Outlet />
</main>
</div>
</div>
);
}