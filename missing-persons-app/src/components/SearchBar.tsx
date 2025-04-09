import { TextField, Button, Box, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

interface Props {
  onSearch: (params: { name: string; status: string }) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<string>('');

  const handleSearch = () => {
    onSearch({ name, status });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 4 }}>
      <Typography variant="h5">Pesquisar Pessoas</Typography>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
        <TextField
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          sx={{ flex: 1, minWidth: 250 }}
        />
        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          variant="outlined"
          sx={{ flex: 1, minWidth: 250 }}
        >
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="missing">Desaparecido</MenuItem>
          <MenuItem value="located">Localizado</MenuItem>
        </TextField>
        <Button variant="contained" onClick={handleSearch} sx={{ height: '56px', px: 4 }}>
          Pesquisar
        </Button>
      </Box>
    </Box>
  );
}