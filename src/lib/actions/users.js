"use server";

export const getAllUsers = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/user/allusers`, {
    method: "GET",
  });
  return response.json();
};

export const patchUserInfoById = async (id, updatedUser) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/user/patchUserInfoById/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    },
  );
  return response.json();
};
