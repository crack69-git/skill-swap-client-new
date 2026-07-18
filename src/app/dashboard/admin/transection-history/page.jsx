import TransectionHistory from "@/Components/MainComponents/AdminSection/TransectionHistory";
import { getAllPayments } from "@/lib/actions/payments";

import { Table } from "@heroui/react";
import React from "react";

const page = async () => {
  const payments = await getAllPayments();
  // console.log("Payments:", payments);
  return (
    <div className="w-11/12 mx-auto my-5">
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
                <div>No payments found</div>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
