import axios from 'axios';

const api = axios.create({
  baseURL: 'https://abitus-api.geia.vip',
});

export const fetchPersons = async (params: { name?: string; status?: string; page?: number }) => {
  const response = await api.get('/persons', { params });
  return response.data;
};

export const fetchPersonById = async (id: string) => {
  const response = await api.get(`/persons/${id}`);
  return response.data;
};

export const submitInfo = async (id: string, data: FormData) => {
  const response = await api.post(`/persons/${id}/info`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};