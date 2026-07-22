import FreelancerEarning from "@/Components/MainComponents/FreelancerSection/FreelancerEarning";
import { getFreelancerPaymentByEmail } from "@/lib/actions/payments";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const email = session?.user?.email;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const data = await getFreelancerPaymentByEmail(email, token);

  return (
    <div className="w-11/12 mx-auto my-5 min-h-screen">
      <h1 className="text-2xl font-bold mb-5">My Earnings</h1>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="">
            <Table.Header>
              <Table.Column isRowHeader>Task Title</Table.Column>
              <Table.Column>Client Mail</Table.Column>
              <Table.Column>Amount Made</Table.Column>

              <Table.Column>Completion Date</Table.Column>
            </Table.Header>
            <Table.Body>
              {data?.length > 0 ? (
                data?.map((payment) => (
                  <FreelancerEarning key={payment._id} payment={payment} />
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={4} className="text-center">
                    No earnings found.
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
