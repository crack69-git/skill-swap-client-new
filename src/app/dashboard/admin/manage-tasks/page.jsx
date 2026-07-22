import React from "react";
import { Table } from "@heroui/react";
import { getAllTasks } from "@/lib/actions/tasks";
import ManageTasks from "@/Components/MainComponents/AdminSection/ManageTasks";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
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
  const tasks = await getAllTasks(token);

  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-3xl font-bold">Manage Tasks</h2>
      <div className="mt-5">
        <Table variant="secondary">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Title</Table.Column>
                <Table.Column>Client Name</Table.Column>
                <Table.Column>Description</Table.Column>
                <Table.Column>State</Table.Column>
                <Table.Column>Price</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                {tasks?.length > 0 ? (
                  tasks?.map((task, index) => (
                    <ManageTasks key={index} task={task} />
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell colSpan={6} className="text-center">
                      No tasks found
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
