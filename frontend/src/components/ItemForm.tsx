/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, Button, Stack, Paper, Box, Typography, Alert } from "@mui/material";
import { useState, type FormEvent } from "react";
import type { CreateItem, UpdateItem } from "../types/item";
import { useNavigate } from "react-router-dom";

interface ItemFormProps<T> {
    initialData?: T;
    onSubmit: (data: T) => Promise<void>;
    formTitle: string;
}

export default function ItemForm<T extends CreateItem | UpdateItem>({
    initialData,
    onSubmit,
    formTitle
}: ItemFormProps<T>) {

    const navigate = useNavigate();

    const [title, setTitle] = useState(initialData?.title || "");
    const [city, setCity] = useState(initialData?.city || "");
    const [price, setPrice] = useState(initialData?.price || 0);
    const [surface, setSurface] = useState(initialData?.surface || 0);

    const [errors, setErrors] = useState<string[]>([]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrors([]);

        try {
            await onSubmit({ title, city, price, surface } as T);
        } catch (err: any) {
            if (err?.response?.data?.message) {
                const serverErrors = JSON.parse(err.response.data.message)
                    .map((m: any) => `${m.path[0]} : ${m.message}`);

                setErrors(serverErrors);
            } else {
                setErrors(["Une erreur inconnue est survenue."]);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "70vh",
                    p: 3
                }}
            >
                <Typography variant="h4"> {formTitle} </Typography>

                <Paper elevation={6} sx={{ p: 4, width: "100%", maxWidth: 500, mt: 7 }}>
                    <Stack spacing={2}>

                        {errors.length > 0 && (
                            <Alert severity="error">
                                {errors.map((e, i) => (
                                    <div key={i}>{e}</div>
                                ))}
                            </Alert>
                        )}

                        <TextField
                            label="Titre"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            fullWidth
                        />

                        <TextField
                            label="Ville"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            fullWidth
                        />

                        <TextField
                            label="Prix"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            required
                            fullWidth
                        />

                        <TextField
                            label="Surface"
                            type="number"
                            value={surface}
                            onChange={(e) => setSurface(Number(e.target.value))}
                            required
                            fullWidth
                        />

                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                type="submit"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Valider
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{ mt: 2 }}
                                onClick={() => navigate(-1)} // Retour à la page précédente
                            >
                                Annuler
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
        </form>
    );
}
