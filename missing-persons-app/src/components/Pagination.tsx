import { Button, Box, Typography } from '@mui/material';

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: Props) {
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', my: 2 }}>
      <Button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        variant="outlined"
      >
        Anterior
      </Button>
      <Typography>Página {page} de {totalPages}</Typography>
      <Button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        variant="outlined"
      >
        Próxima
      </Button>
    </Box>
  );
}