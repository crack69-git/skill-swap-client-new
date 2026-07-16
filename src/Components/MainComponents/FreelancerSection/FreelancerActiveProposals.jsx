import React from "react";
import { Card, Separator } from "@heroui/react";

const FreelancerActiveProposals = ({ proposal }) => {
  console.log("proposal", proposal);
  return (
    <div>
      <Card
        className="border bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-4 h-full "
        variant="default"
      >
        <Card.Header>
          <Card.Title
            className={`font-semibold w-fit mb-3 px-5 rounded-3xl ${proposal.status === "Open" ? "bg-purple-200 dark:bg-purple-500" : proposal.status === "in-progress" ? "bg-yellow-200 dark:bg-yellow-500" : "bg-green-200 dark:bg-green-500"}`}
          >
            {proposal.status}
          </Card.Title>
          <Card.Title className="text-xl font-semibold flex-1 ">
            {proposal.taskTitle}
          </Card.Title>
          <Card.Description>{proposal.description}</Card.Description>
          <Separator className="my-3" />
          <Card.Description className="text-sm">
            <span className="font-bold">Description:</span> {proposal.note}
          </Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col justify-end">
          <p className="text-sm ">Budget: ${proposal.bid}</p>
          <p className="text-sm">Client: {proposal.clientName}</p>
          <p className="text-sm">Deadline: {proposal.estimateDeliveryDate}</p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default FreelancerActiveProposals;
