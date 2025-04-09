import { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';
import MissingPersonCard from '../components/MissingPersonCard';
import Pagination from '../components/Pagination';
import { fetchPersons } from '../api/api';
import { Person, StatusType } from '../types';

export default function Home() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadPersons = async (params: { name?: string; status?: StatusType; page?: number }) => {
    const data = await fetchPersons(params);
    setPersons(data.results.slice(0, 10)); // Limita a 10 por página
    setTotalPages(Math.ceil(data?.total / 10));
  };

  useEffect(() => {
    loadPersons({ page });
  }, [page]);

  const handleSearch = (params: { name: string; status: string }) => {
    const validStatus = params.status === 'missing' || params.status === 'located'
      ? params.status as StatusType
      : undefined;
    loadPersons({ name: params.name, status: validStatus, page: 1 });
    setPage(1);
  };

  return (
    <Box sx={{ p: 4 }}>
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={3}>
        {persons.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            <MissingPersonCard person={person} />
          </Grid>
        ))}
      </Grid>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </Box>
  );
}