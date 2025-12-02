import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { getItemById, updateItem } from "../api/itemApi";
import  type {Item, UpdateItem} from "../types/item";

export default function ItemEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<Item>();

  useEffect(() => {
    const fetchItem = async () => {
      if (id) {
        const res = await getItemById(id);
        setItem(res.data);
      }
    };
    fetchItem();
  }, [id]);

  const handleUpdate = async (data: UpdateItem) => {
    if (id) await updateItem(id, data);
    navigate("/");
  };

  if (!item) return <Container>Loading...</Container>;

  return (
      <ItemForm<UpdateItem> initialData={item} onSubmit={handleUpdate} formTitle="Modifier l'immobilière" />
    
  );
}
