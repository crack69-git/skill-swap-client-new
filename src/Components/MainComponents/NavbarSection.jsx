"use client";

import React from "react";
import Link from "next/link";
import { Button, Drawer, Separator, Spinner } from "@heroui/react";
import ToogleTheme from "./ToogleTheme";
import { IoHome, IoMenu } from "react-icons/io5";
import { TbBrowser, TbUser } from "react-icons/tb";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { FiLogOut } from "react-icons/fi";

const NavbarSection = () => {
  const { data, isPending } = authClient.useSession();
  const links = (
    <>
      <NavLink href="/">
        <IoHome />
        Home
      </NavLink>
      <NavLink href="/browse-tasks">
        <TbBrowser />
        Browse Tasks
      </NavLink>

      <NavLink href="/browse-freelancers">
        <TbUser />
        Browse Freelancers
      </NavLink>
    </>
  );
  return (
    <div className="border-b py-4">
      <div className="w-11/12 mx-auto max-sm:flex-wrap max-sm:justify-center flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 ">
            <aside className="lg:hidden">
              {" "}
              <Drawer>
                <Button variant="ghost">
                  <IoMenu />
                </Button>
                <Drawer.Backdrop>
                  <Drawer.Content placement="left">
                    <Drawer.Dialog>
                      <Drawer.Header>
                        <Drawer.Heading>Drawer Title</Drawer.Heading>
                      </Drawer.Header>
                      <Drawer.Body>
                        <div>{links}</div>
                      </Drawer.Body>
                    </Drawer.Dialog>
                  </Drawer.Content>
                </Drawer.Backdrop>
              </Drawer>
            </aside>
            <Link href="/">
              <p className="text-2xl font-bold text-blue-600">SkillSwap</p>
            </Link>
          </div>
          <div className="items-center gap-4 hidden lg:flex">{links}</div>
        </div>

        <div className="flex items-center gap-2">
          <ToogleTheme></ToogleTheme>

          {isPending ? (
            <div className="flex items-center gap-4">
              <Spinner />
            </div>
          ) : data?.user ? (
            <div className="flex flex-wrap max-sm:justify-center items-center gap-4">
              <Button variant="flat">
                <NavLink
                  href={
                    data.user.role === "client"
                      ? "/dashboard/client"
                      : data.user.role === "freelancer"
                        ? "/dashboard/freelancer"
                        : "/dashboard/admin"
                  }
                >
                  Dashboard
                </NavLink>
              </Button>

              <Separator orientation="vertical" className="h-6" />

              <p>Welcome, {data.user.name}</p>

              <Button
                color="danger"
                onPress={() =>
                  authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        window.location.href = "/login";
                      },
                    },
                  })
                }
              >
                <FiLogOut />
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
