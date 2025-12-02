import type { ReactNode } from "react";
import { Box,AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface AppWrapperProps {
  children: ReactNode;
  gradient?: string;
  appName?: string;
}

export default function AppWrapper({
  children,
  gradient = "linear-gradient(90deg, #f97d98, #d41f46)",
  appName = "CasaNova",
}: AppWrapperProps) {

  const navigate = useNavigate();
  
  const handleClickHome = () => {
    navigate("/");
  }
 
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background: gradient,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={handleClickHome} >
            {appName}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenu centré */}
      <Box>
          {children}
      </Box>
    </Box>
  );
}
