import axios from 'axios';

axios.defaults.baseURL = 'https://6464ab86043c103502bf91c0.mockapi.io/';

export const fetchUsers = async (page, per_page) => {
  const result = await axios.get(`users/?page=${page}&limit=${per_page}`);
  return result.data;
};

export const updateUsersData = async (id, { checked, followers }) => {
  await axios.put(`users/${id}`, { checked, followers }).then(({ data }) => {
    return data;
  });
};
