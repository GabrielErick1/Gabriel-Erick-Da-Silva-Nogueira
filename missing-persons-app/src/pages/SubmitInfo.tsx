import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import { submitInfo } from '../api/api';

export default function SubmitInfo() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [info, setInfo] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    if (!id) return;
    const formData = new FormData();
    formData.append('info', info);
    if (file) formData.append('file', file);
    await submitInfo(id, formData);
    navigate(`/details/${id}`);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">Enviar Informações</Typography>
      <TextField
        label="Informações"
        multiline
        rows={4}
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        fullWidth
        sx={{ my: 2 }}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        accept="image/*"
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        Enviar
      </Button>
    </Box>
  );
}