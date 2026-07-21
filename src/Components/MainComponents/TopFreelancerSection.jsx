import { getAllFreelancer } from "@/lib/actions/users";
import { Card, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import img from "@/assets/nullProfile.jpg";
const TopFreelancerSection = async () => {
  const data = await getAllFreelancer();
  console.log("Top freelancers data:", data);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 text-center mb-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold mb-5">World-Class Talent</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our top-rated professionals maintain a 98% satisfaction rating across
          complex high-end deliverables.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.length > 0 ? (
            data?.map((freelancer, index) => (
              <Card
                key={index}
                className="w-full h-full border"
                variant="default"
              >
                <Card.Header>
                  <Card.Title className="text-lg font-bold">
                    <div className="flex justify-center items-center gap-2 mb-2">
                      {""}
                      <Image
                        src={freelancer?.user?.image || img}
                        alt={freelancer?.user?.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    {freelancer?.user?.name}
                  </Card.Title>
                  <Card.Title>{freelancer?.user?.email}</Card.Title>
                  <Card.Description>
                    {freelancer?.user?.bio
                      ? freelancer?.user?.bio
                      : "No bio available"}
                  </Card.Description>
                </Card.Header>
                <Separator orientation="horizontal" className="my-2" />
                <Card.Content>
                  <div className="h-full">
                    {freelancer?.user?.skills &&
                    freelancer?.user?.skills.length > 0 ? (
                      <ul className="list-disc pl-5">
                        {freelancer?.user?.skills.map((skill, index) => (
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
            ))
          ) : (
            <p>No top freelancers available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopFreelancerSection;
