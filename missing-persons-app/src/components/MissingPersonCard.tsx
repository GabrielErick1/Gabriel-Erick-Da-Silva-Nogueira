import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Person } from '../types';

interface Props {
  person: Person;
}

export default function MissingPersonCard({ person }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 345, cursor: 'pointer' }}
      onClick={() => navigate(`/details/${person.id}`)}
    >
      <CardMedia component="img" height="140" image={person.imageUrl} alt={person.name} />
      <CardContent>
        <Typography variant="h6">{person.name}</Typography>
        <Box sx={{ color: person.status === 'missing' ? 'red' : 'green' }}>
          {person.status === 'missing' ? 'Desaparecido' : 'Localizado'}
        </Box>
      </CardContent>
    </Card>
  );
}