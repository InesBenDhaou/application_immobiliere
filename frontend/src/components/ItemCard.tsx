import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";

interface ItemCardProps {
  id: string;
  title: string;
  city: string;
  price: number;
  surface: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ItemCard({ id, title, city, price, surface, onEdit, onDelete }: ItemCardProps) {
  return (
    <Card sx={{ minWidth: 380, mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography color="text.secondary">{city}</Typography>
        <Typography>Prix: {price} €</Typography>
        <Typography>Surface: {surface} m²</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small"  onClick={() => onEdit(id)}>Modifier</Button>
        <Button variant="outlined" size="small" color="secondary" onClick={() => onDelete(id)}>Supprimer</Button>
      </CardActions>
    </Card>
  );
}
