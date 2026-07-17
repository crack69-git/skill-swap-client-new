import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import EditProfileSection from "@/Components/MainComponents/FreelancerSection/EditProfileSection";
const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // if (session?.user?.role !== "freelancer") {
  //   redirect("/unauthorize");
  // }
  // if (session?.user?.userStatus === "blocked") {
  //   redirect("/access-blocked");
  // }
  return (
    <div className="w-11/12 mx-auto my-5 min-h-screen">
      <p className="text-3xl font-bold">Profile Settings</p>
      <p>Update your profile information.</p>
      <EditProfileSection user={session?.user} />
    </div>
  );
};

export default page;
