import { Card, Separator } from "@heroui/react";
import React from "react";

const FreelancerBrowse = ({ data }) => {
  return (
    <div>
      {" "}
      <Card className="w-full h-full border" variant="default">
        <Card.Header>
          <Card.Title className="text-lg font-bold">{data.name}</Card.Title>
          <Card.Title>{data.email}</Card.Title>
          <Card.Description>
            {data.bio ? data.bio : "No bio available"}
          </Card.Description>
        </Card.Header>
        <Separator orientation="horizontal" className="my-2" />
        <Card.Content>
          <div className="h-full">
            {data.skills && data.skills.length > 0 ? (
              <ul className="list-disc pl-5">
                {data.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap items-center text-sm bg-sky-100 dark:bg-sky-500 px-6 w-fit rounded-3xl my-3"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No skills available</p>
            )}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default FreelancerBrowse;
