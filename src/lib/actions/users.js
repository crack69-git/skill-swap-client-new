"use server";

export const getAllUsers = async (token) => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/user/allusers`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const patchUserInfoById = async (id, updatedUser, token) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/user/patchUserInfoById/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUser),
    },
  );
  return response.json();
};

export const getFreelancer = async (name = "", skill = "") => {
  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (skill) params.append("skill", skill);
  console.log("Fetching freelancers with params:", params.toString());
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/user/freelancer/all?${params.toString()}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  return res.json();
};

export const getAllFreelancer = async () => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/user/freelancer/mostWorkDone`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  return res.json();
};
