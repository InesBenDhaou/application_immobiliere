import { Dialog,DialogActions, DialogTitle, DialogContent, Button, DialogContentText } from "@mui/material";

interface ConfirmationCardProps {
    id:  string | null;
    message: string;
    handleAction: (id: string) => void;
    setId:(id: string | null) => void;
}

export default function ConfirmationDialog({ id, setId, handleAction,message}: ConfirmationCardProps) {
    return (
        <Dialog
            open={id !== null}
            onClose={() => setId(null)}
        >
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button variant="outlined" color="secondary" onClick={() => setId(null)}>
                    Annuler
                </Button>

                <Button
                    onClick={async () => {
                        if (id) await handleAction(id);
                        setId(null);
                    }}
                    color="error"
                    variant="contained"
                >
                    Supprimer
                </Button>
            </DialogActions>
        </Dialog>
    );
}