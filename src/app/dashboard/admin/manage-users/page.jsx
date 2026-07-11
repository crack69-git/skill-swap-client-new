import ManageUser from "@/Components/MainComponents/AdminSection/ManageUser";
import { getAllUsers } from "@/lib/actions/users";
import { Table } from "@heroui/react";
import React from "react";

const page = async () => {
  const res = await getAllUsers();
  console.log("Fetched users:", res); // Log the fetched users for debugging
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
                    <Table.Cell>No users found</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
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
