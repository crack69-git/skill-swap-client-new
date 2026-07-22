import ManageUser from "@/Components/MainComponents/AdminSection/ManageUser";
import { getAllUsers } from "@/lib/actions/users";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Manage Users - Admin",
  description:
    "Manage and administer user accounts within the SkillSwap platform.",
};
const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.role !== "admin") {
    redirect("/unauthorized");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await getAllUsers(token);
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-3xl font-bold">Manage Users</h2>
      <div className="mt-5">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Status</Table.Column>
              </Table.Header>
              <Table.Body>
                {res.length > 0 ? (
                  res.map((user, index) => (
                    <ManageUser key={index} user={user} />
                  ))
                ) : (
                  // Safe fallback if there are zero users or connection is broken
                  <Table.Row>
                    <Table.Cell colSpan={4} className="text-center">
                      No users found
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default page;
