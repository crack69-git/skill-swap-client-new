import {
  getAllPayments,
  getFreelancerPaymentByEmail,
} from "@/lib/actions/payments";
import { getTaskProposals } from "@/lib/actions/proposals";
import { getAllTasks } from "@/lib/actions/tasks";
import { getAllUsers } from "@/lib/actions/users";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { FcParallelTasks } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiProgress6Line } from "react-icons/ri";
import { VscCopilotSuccess } from "react-icons/vsc";

const DashboardStat = async ({ user }) => {
  const token = await auth.api.getToken({
    headers: await headers(),
  });

  const totalTasks = await getAllTasks(token.token);
  const pendingTasks = totalTasks.filter((task) => task?.status === "Open");
  const completedTasks =
    totalTasks.filter((task) => task?.status === "completed") || 0;
  const inProgressTasks = totalTasks.filter(
    (task) => task?.status === "in-progress",
  );

  const totalProposals = await getTaskProposals(token.token);
  const pendingProposals = totalProposals.filter(
    (proposal) => proposal?.status === "pending",
  );
  const inProgressProposals = totalProposals.filter(
    (proposal) => proposal?.status === "in-progress",
  );
  const totalEarnings = await getFreelancerPaymentByEmail(
    user?.email,
    token.token,
  );
  const totalEarning = totalEarnings.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount_received,
    0,
  );

  const totalUsers = await getAllUsers(token.token);
  const revenue = await getAllPayments(token.token);
  const totalRevenue = revenue.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount_received,
    0,
  );

  const client = (
    <>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Tasks
        </p>
        <p className="text-3xl font-bold text-center">{totalTasks.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Pending Tasks
        </p>
        <p className="text-3xl font-bold text-center">{pendingTasks.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Completed Tasks
        </p>
        <p className="text-3xl font-bold text-center">
          {completedTasks.length}
        </p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          In Progress
        </p>
        <p className="text-3xl font-bold text-center">
          {inProgressTasks.length}
        </p>
      </div>
    </>
  );

  const freelancer = (
    <>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Proposals
        </p>
        <p className="text-2xl text-center">{totalProposals.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Pending Proposals
        </p>
        <p className="text-2xl text-center">{pendingProposals.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Accepted Proposals
        </p>
        <p className="text-2xl text-center">{inProgressProposals.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          Total Earnings
        </p>
        <p className="text-2xl text-center">${totalEarning ?? 0}</p>
      </div>
    </>
  );

  const admin = (
    <>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <FcParallelTasks />
          Total Users
        </p>
        <p className="text-2xl font-bold text-center">{totalUsers.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <MdOutlinePendingActions />
          Total Tasks
        </p>
        <p className="text-2xl font-bold text-center">{totalTasks.length}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <VscCopilotSuccess />
          Total Revenue
        </p>
        <p className="text-3xl font-bold text-center">${totalRevenue ?? 0}</p>
      </div>
      <div className="border p-4 rounded-2xl h-full">
        <p className="flex items-center gap-2 text-xl font-bold">
          <RiProgress6Line />
          Active Tasks
        </p>
        <p className="text-3xl font-bold text-center">
          {inProgressTasks.length}
        </p>
      </div>
    </>
  );

  return (
    <div className=" mt-10 grid grid-cols-4 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2">
      {user?.role === "client"
        ? client
        : user?.role === "freelancer"
          ? freelancer
          : admin}
    </div>
  );
};

export default DashboardStat;
