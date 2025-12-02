// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d41f46", 
    },
    secondary: {
      main: "#5e5c5fff",
    },
  },
  typography: {
    h4: {
      mb: 5, 
      fontWeight: "bold", 
      color: "#fff", 
      textShadow: "0 1px 3px rgba(0,0,0,0.6)" 
    },
    h6:{
      fontWeight: "bold",
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none", 
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.2)", 
          backdropFilter: "blur(10px)",              
          WebkitBackdropFilter: "blur(10px)",     
        },
      },
    },
  },
});

export default theme;
