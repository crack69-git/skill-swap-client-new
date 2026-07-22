import TransectionHistory from "@/Components/MainComponents/AdminSection/TransectionHistory";
import { getAllPayments } from "@/lib/actions/payments";
import { auth } from "@/lib/auth";

import { Table } from "@heroui/react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Transaction History - Admin",
  description:
    "View and manage transaction history within the SkillSwap platform.",
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
  const payments = await getAllPayments(token);

  return (
    <div className="w-11/12 mx-auto my-5 min-h-screen">
      <h1 className="mb-5 text-3xl font-bold">Transaction History</h1>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="">
            <Table.Header>
              <Table.Column isRowHeader>Client Email</Table.Column>
              <Table.Column>Freelancer Email</Table.Column>
              <Table.Column>Payout Size</Table.Column>
              <Table.Column>Payment Date</Table.Column>
              <Table.Column>Payment Status</Table.Column>
            </Table.Header>
            <Table.Body>
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <TransectionHistory key={payment._id} payment={payment} />
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={5} className="text-center">
                    No users found
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
