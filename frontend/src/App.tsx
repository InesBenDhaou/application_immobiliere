import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import ItemCreate from "./pages/ItemCreate";
import ItemEdit from "./pages/ItemEdit";
import AppWrapper from "./components/AppWrapper";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router> 
        <AppWrapper>
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/create" element={<ItemCreate />} />
            <Route path="/edit/:id" element={<ItemEdit />} />
          </Routes>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
