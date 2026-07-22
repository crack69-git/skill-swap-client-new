import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import React from "react";
import heroImg from "@/assets/nullProfile.jpg";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const ProfileSection = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log("user", user);
  return (
    <div>
      <Card className="w-full items-stretch md:flex-row mt-5 border">
        <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
          <Image
            src={user.image}
            alt="user profile image"
            width={120}
            height={190}
            loading="lazy"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8 text-xl font-bold">
              {user.name}
            </Card.Title>
            <Card.Description className="text-[16px]">
              {user.email}
            </Card.Description>
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className=" text-foreground">
                Hourly Rate: {user.hourlyRate || "Not specified"}
              </span>
              <span className="text-muted">
                {user?.skills?.length > 0
                  ? `Skills: ${user?.skills?.join(", ")}`
                  : "Skills: Not specified"}
              </span>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default ProfileSection;
