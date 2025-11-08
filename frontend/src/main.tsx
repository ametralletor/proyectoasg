import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from "@mui/material/CssBaseline"
import Login from './pages/Login.tsx'
import { ThemeProvider} from '@mui/material';
import { theme } from './theme.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Login/>
    </ThemeProvider>
  </StrictMode>,
)
