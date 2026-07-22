"use server";

export const postATask = async (taskData, token) => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/task/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  return response.json();
};

export const getTaskById = async (id, token) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/get/byClient/${id}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const getAllTasks = async (token) => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/task/alltasks`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const patchTaskById = async (id, updatedData, token) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/patch/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    },
  );
  return response.json();
};

export const deleteTaskById = async (id, token) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const browseOpenTasks = async (
  name = "",
  skill = "",
  currentPage = 1,
) => {
  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (skill) params.append("skill", skill);
  params.append("page", currentPage);
  params.append("limit", 9);

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/browseOpenTasks?${params.toString()}`,
    {
      method: "GET",
    },
  );
  return response.json();
};

export const FeatureTaskSix = async () => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/featureTaskSix`,
    {
      method: "GET",
    },
  );
  return response.json();
};

export const getSingleTaskById = async (id) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/getSingleTaskById/${id}`,
    {
      method: "GET",
    },
  );
  return response.json();
};
