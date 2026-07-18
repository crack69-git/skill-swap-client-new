import React, { Suspense } from "react";
// import InfoTrace from "../InfoTrace";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Spinner } from "@heroui/react";
import { redirect } from "next/navigation";
import DashboardStat from "@/Components/MainComponents/DashboardStat";
import ProfileSection from "@/Components/MainComponents/FreelancerSection/ProfileSection";
const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  if (session?.user?.role !== "freelancer") {
    redirect("/unauthorize");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  return (
    <div className="w-11/12 mx-auto mt-5 min-h-screen">
      <h3 className="text-3xl font-bold">Freelancer Dashboard</h3>
      <p>Welcome, {session?.user?.name}! This is your freelancer dashboard.</p>
      <Suspense
        fallback={
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xl" />
            <span className="text-xs text-muted">...Loading</span>
          </div>
        }
      >
        <DashboardStat user={user} />
        <ProfileSection user={user} />
      </Suspense>
    </div>
  );
};

export default page;
