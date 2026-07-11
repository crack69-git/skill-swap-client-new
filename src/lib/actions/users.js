"use server";

export const getAllUsers = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/user/allusers`, {
    method: "GET",
  });
  return response.json();
};
