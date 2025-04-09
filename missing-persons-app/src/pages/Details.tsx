import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { fetchPersonById } from '../api/api';
import { Person } from '../types';

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    const loadPerson = async () => {
      if (id) {
        const data = await fetchPersonById(id);
        setPerson(data);
      }
    };
    loadPerson();
  }, [id]);

  if (!person) return <div>Carregando...</div>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">{person.name}</Typography>
      <Typography sx={{ color: person.status === 'missing' ? 'red' : 'green' }}>
        Status: {person.status === 'missing' ? 'Desaparecido' : 'Localizado'}
      </Typography>
      <Typography>{person.details}</Typography>
      <Button
        variant="contained"
        onClick={() => navigate(`/submit/${person.id}`)}
        sx={{ mt: 2 }}
      >
        Enviar Informações
      </Button>
    </Box>
  );
}