import ItemForm from "../components/ItemForm";
import type {CreateItem} from "../types/item";
import { createItem } from "../api/itemApi";
import { useNavigate } from "react-router-dom";

export default function ItemCreate() {
  const navigate = useNavigate();

  const handleCreate = async (data: CreateItem) => {
    await createItem(data);
    navigate("/");
  };

  return (
      <ItemForm<CreateItem> onSubmit={handleCreate} formTitle="Ajouter un bien immobilier"/>
  );
}
