import ProposalForm from "@/Components/MainComponents/FreelancerSection/ProposalForm";
import { getSingleTaskById } from "@/lib/actions/tasks";
import { auth } from "@/lib/auth";
import { Separator } from "@heroui/react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { IoTimer } from "react-icons/io5";
import { LuTimerOff } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
export const metadata = {
  title: "Task Details - Freelancer",
  description: "View the details of a specific task on the SkillSwap platform.",
};
const page = async ({ params }) => {
  const { id } = await params;

  const data = await getSingleTaskById(id);

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.role !== "freelancer") {
    redirect("/unauthorized");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  const role = session?.user?.role;

  return (
    <div className="w-11/12 max-md:grid-cols-1 mx-auto my-5 grid grid-cols-3 gap-4">
      <div className="col-span-2  rounded-lg p-5 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">{data.TaskTitle}</h2>
          <p>
            Budget: $<span className="font-bold text-xl">{data.budget}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <p className="flex gap-2 items-center text-lg text-gray-500">
            <MdCategory />
            {data.category}
          </p>
          <p className="flex gap-2 items-center text-lg text-gray-500">
            <IoTimer />
            Posted On: {data.createdAt}
          </p>
        </div>
        <p className="flex gap-2 items-center text-lg text-gray-500">
          <LuTimerOff />
          Deadline: {data.deadline}
        </p>
        <Separator className="my-4" />
        <p className="font-semibold text-xl">Task Description</p>
        <p>{data.description}</p>
        <Separator className="my-4" />
        <p className=" text-gray-500">Posted By: {data.clientName}</p>
      </div>
      <ProposalForm data={data} />
    </div>
  );
};

export default page;
