"use server";

export const postATask = async (taskData) => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/task/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  return response.json();
};
