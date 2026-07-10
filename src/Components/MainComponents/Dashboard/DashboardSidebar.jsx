import React from "react";
import { Button, Drawer } from "@heroui/react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import NavLink from "../NavLink";

const DashboardSideBar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const clientlinks = (
    <>
      <div className="mt-4">
        {session?.user?.role === "client" ? (
          <ul>
            <NavLink href="/dashboard/client">
              <li>Home</li>
            </NavLink>
            <NavLink href="/dashboard/client/post-task">
              <li>Post a Task</li>
            </NavLink>
            <NavLink href="/dashboard/client/my-tasks">
              <li>My Tasks</li>
            </NavLink>
            <NavLink href="/dashboard/client/manage-proposals">
              <li>Manage Proposals</li>
            </NavLink>
          </ul>
        ) : session?.user?.role === "freelancer" ? (
          <ul>
            <NavLink href="/dashboard/freelancer">
              <li>Home</li>
            </NavLink>
            <NavLink href="/dashboard/freelancer/browse-tasks">
              <li>Browse Tasks</li>
            </NavLink>
            <NavLink href="/dashboard/freelancer/my-proposals">
              <li>My Proposals</li>
            </NavLink>
            <NavLink href="/dashboard/freelancer/active-projects">
              <li>Active Projects</li>
            </NavLink>
            <NavLink href="/dashboard/freelancer/my-earnings">
              <li>My Earnings</li>
            </NavLink>
            <NavLink href="/dashboard/freelancer/edit-profile">
              <li>Edit Profile</li>
            </NavLink>
          </ul>
        ) : (
          <ul>
            <NavLink href="/dashboard/admin">
              <li>Home </li>
            </NavLink>
            <NavLink href="/dashboard/admin/manage-users">
              <li>Manage Users </li>
            </NavLink>
            <NavLink href="/dashboard/admin/manage-tasks">
              <li>Manage Tasks </li>
            </NavLink>
            <NavLink href="/dashboard/admin/transections-history">
              <li>Transaction History </li>
            </NavLink>
          </ul>
        )}
      </div>
    </>
  );
  return (
    <div>
      <aside className="hidden lg:block w-64 h-full bg-gray-100 dark:bg-gray-900 p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        {clientlinks}
      </aside>
      <Drawer className=" ">
        <Button variant="secondary" className="rounded-lg ">
          <HiBars3BottomLeft />
        </Button>
        <Drawer.Backdrop>
          {/* 2. Add placement="left" here instead */}
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Dashboard</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{clientlinks}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default DashboardSideBar;
