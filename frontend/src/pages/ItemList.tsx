/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useMemo } from "react";
import { getItems, deleteItem } from "../api/itemApi";
import ItemCard from "../components/ItemCard";
import {
    Button,
    Container,
    Typography,
    Grid,
    TextField,
    Pagination,
    Stack,
    MenuItem,
    Select,
    InputLabel,
    FormControl
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Item } from "../types/item";
import ConfirmationDialog from "../components/ConfirmationDialog";

const ITEMS_PER_PAGE = 6;

export default function ItemList() {
    const [items, setItems] = useState<Item[]>([]);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [priceOrder, setPriceOrder] = useState<"asc" | "desc">("asc");
    const [minSurface, setMinSurface] = useState<number | "">("");
    const [maxSurface, setMaxSurface] = useState<number | "">("");

    const navigate = useNavigate();

    const fetchItems = async () => {
        const res = await getItems();
        setItems(res.data);
    };

    const handleDelete = async (id: string) => {
        await deleteItem(id);
        fetchItems();
    };

    const handleEdit = (id: string) => navigate(`/edit/${id}`);

    useEffect(() => {
        fetchItems();
    }, []);

    const filteredItems = useMemo(() => {
        return items
            .filter(
                (item) =>
                    item.title?.toLowerCase().includes(search.toLowerCase()) &&
                    (minSurface === "" || (item.surface && item.surface >= minSurface)) &&
                    (maxSurface === "" || (item.surface && item.surface <= maxSurface))
            )
            .sort((a, b) => {
                if (!a.price || !b.price) return 0;
                return priceOrder === "asc" ? a.price - b.price : b.price - a.price;
            });
    }, [items, search, minSurface, maxSurface, priceOrder]);

    const paginatedItems = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filteredItems.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredItems, page]);

    const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    return (
        <Container sx={{ width: "100%" }}>
            <Typography variant="h4" my={3}>
                Liste des Annonces immobilières
            </Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/create")}
            >
                Ajouter un bien immobilier
            </Button>

            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                mb={3}
                mt={5}
                alignItems="center"
            >
                <TextField
                    label="Rechercher par titre"
                    variant="outlined"
                    size="small"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    sx={{ minWidth: 200 }}
                />

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Prix</InputLabel>
                    <Select
                        value={priceOrder}
                        label="Prix"
                        onChange={(e) => setPriceOrder(e.target.value as "asc" | "desc")}
                    >
                        <MenuItem value="asc">Prix croissant</MenuItem>
                        <MenuItem value="desc">Prix décroissant</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Surface min (m²)"
                    variant="outlined"
                    size="small"
                    type="number"
                    value={minSurface}
                    onChange={(e) =>
                        setMinSurface(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    sx={{ minWidth: 150 }}
                />

                <TextField
                    label="Surface max (m²)"
                    variant="outlined"
                    size="small"
                    type="number"
                    value={maxSurface}
                    onChange={(e) =>
                        setMaxSurface(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    sx={{ minWidth: 150 }}
                />
            </Stack>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {paginatedItems
                    .filter((item): item is Item & { id: string } => typeof item.id === "string")
                    .map((item) => (
                        <Grid key={item.id} size={{ xs: 2, sm: 4, md: 4 }}>
                            <ItemCard {...item} onEdit={handleEdit} onDelete={() => setDeleteId(item.id)} />
                        </Grid>
                    ))}
            </Grid>

            {pageCount > 1 && (
                <Stack alignItems="center" my={4}>
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={(_, value) => setPage(value)}
                        color="primary"
                    />
                </Stack>
            )}

            <ConfirmationDialog
                id={deleteId}
                setId={setDeleteId}
                handleAction={handleDelete}
                message="Voulez-vous vraiment supprimer ce bien ? Cette action est irréversible."
            />
        </Container>
    );
}
