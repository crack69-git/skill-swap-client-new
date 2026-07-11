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

export const getTaskById = async (id) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/get/byClient/${id}`,
    {
      method: "GET",
    },
  );
  return response.json();
};

export const getAllTasks = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/task/alltasks`, {
    method: "GET",
  });
  return response.json();
};

export const patchTaskById = async (id, updatedData) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/patch/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    },
  );
  return response.json();
};

export const ddeleteTaskById = async (id) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/delete/${id}`,
    {
      method: "DELETE",
    },
  );
  return response.json();
};
