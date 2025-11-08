import { Typography } from "@mui/material"
import Button from "@mui/material/Button"

function App() {

  return (
    <>
    <br />
      <Typography variant="h1">Página Login de Aday Sánchez Guedes</Typography> <br /><br />
      <Typography variant="h2">Esta actividad está realizada en TypeScript</Typography><br /><br />
      <Typography variant="h3">h3 de prueba</Typography><br />
      <Typography variant="subtitle1">Subtítulo typografia</Typography><br />
      <Typography variant="body1">Este es el cuerpo del body </Typography>
      <Typography variant="caption">CAPTION </Typography>

      <br /><br />
      <Button variant="text" color="primary">Primario Text</Button>
      <Button variant="contained" color="primary">Primario Contained</Button>
      <Button variant="outlined" color="primary">Primario Outlined</Button><br /><br />
      <Button variant="text" color="secondary">Secundario Text</Button>
      <Button variant="contained" color="secondary">Secundario Contained</Button>
      <Button variant="outlined" color="secondary">Secundario Outlined</Button><br /><br />
      <Button variant="text" color="error">Error Text</Button>
      <Button variant="contained" color="error">Error Contained</Button>
      <Button variant="outlined" color="error">Error Outlined</Button><br /><br />
      <Button variant="text" color="success">Success Text</Button>
      <Button variant="contained" color="success">Success Contained</Button>
      <Button variant="outlined" color="success">Success Outlined</Button><br /><br />
      <Button variant="text" color="warning">warning Text</Button>
      <Button variant="contained" color="warning">warning Contained</Button>
      <Button variant="outlined" color="warning">warning Outlined</Button><br /><br />
      <Button variant="text" color="info">Info Text</Button>
      <Button variant="contained" color="info">Info Contained</Button>
      <Button variant="outlined" color="info">Info Outlined</Button><br /><br />
    </>
  )
}

export default App
