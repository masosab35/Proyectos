import Post from './componentes/post';
//import './App.css';
import React, { useState ,useEffect} from 'react';
import axios from 'axios'
import { Button, Box} from "@mui/material";
import { Container } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AndroidIcon from "@mui/icons-material/Android";
function App() {
  const [puntaje,setPuntaje] = useState(null)
    //localStorage.getItem("puntaje")? JSON.parse(localStorage.getItem("puntaje")):{cafe:0,te:0,pintura:0}
  ;
  const [estadoClick, setClickeado] = useState("noClick");
  const [estadoEleccion, setEleccion] = useState(false)
  
  useEffect(
    () =>{
    axios.get('http://localhost:3001/elementos')
    .then(e => setPuntaje(e.data))
    .catch((error)=> {
      console.log(error)
    })
    
  }
  ,[])
  const enviarDatos = (datos) =>{
    axios.put('http://localhost:3001/elementos',datos)
  }
  const cambiarBotonClickeado= () =>{
    setClickeado("botonClickeado")
  }
  const cambiarCafeClickeado = () =>{
    
    setPuntaje(prev => {
      if (!prev) return prev
      const copia = prev.map(e => e.id == 1? {...e, puntos: e.puntos + 1} : e);
      enviarDatos(copia.find(e => e.id == 1))
      
      return copia
    })
    console.log(puntaje)
    setClickeado("cafeClickeado")
    setEleccion(true)
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  const cambiarTeClickeado = () =>{
    
    setPuntaje(prev => {
      if (!prev) return prev
      const copia = prev.map(e => e.id == 2? {...e, puntos: e.puntos + 1} : e);
      enviarDatos(copia.find(e => e.id == 2))
      
      return copia
    })
    console.log(puntaje)
    setClickeado("teClickeado")
    setEleccion(true)
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  const cambiarPinturaClickeado = () =>{
    setPuntaje(prev => {
      if (!prev) return prev
      const copia = prev.map(e => e.id == 3? {...e, puntos: e.puntos + 1} : e);
      enviarDatos(copia.find(e => e.id == 3))
      
      return copia
    })
    console.log(puntaje)
    setClickeado("pinturaClickeado")
    setEleccion(true)
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  const volveraVotar = () =>{
    setClickeado("noClick")
    setEleccion(false)
  }
  
  
  return (
    
    <Container className="App" maxWidth={false} disableGutters
    sx={{
      backgroundColor: "#cacaca",
      minHeight: '100vh',
      width: '100%',
      display:'flex',
      flexDirection: 'column'
    }
    }
    

    >
      <header>
         <Box
        sx={{
          border: 2,
          borderColor: "peru",
          p: 2,
          bgcolor: "#111",
          color: "white",
          textAlign: "center"
        }}>
        <h1 id="titulo">Blog de Misael</h1> </Box>
      </header>
      <Box
        sx={{
          border: 2,
          borderColor: "peru",
          p: 2,
          bgcolor: "#454545",
          color: "white",
        }}
      >Bienvenidos a mi app de encuesta</Box>
      <Box component="section" className="container" sx= {{
        margin: "0 auto",
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}>
          {(estadoClick === "noClick")? <Button
          sx={{
          marginTop:"50px",
          border: 2,
          borderColor: "peru",
          p: 2,
          bgcolor: "#00b165",
          color: "white"}}
        onClick={cambiarBotonClickeado}
      >Empezar la encuesta</Button>:null}
          {(estadoClick=== "botonClickeado")? <> <Post onclick={cambiarCafeClickeado} titulo = "Foto de Cafe" descripcion = "El mejor cafe del mundo" ruta = "coffee" parrafo = "Ven y mira como preparar el mejor cafe que podrias probar" alt = "cafe"></Post>
          <Post onclick={cambiarTeClickeado} titulo = "Foto de Te" descripcion = "El mejor te del mundo" ruta = "tea" parrafo = "Ven y mira como preparar el mejor cafe que podrias probar" alt = "te"></Post>
          <Post onclick={cambiarPinturaClickeado} titulo = "Foto de Pintura" descripcion = "La pintura que esta en la boca de todos" ruta = "painting" parrafo = "Mira la ciencia detras de la pintura mas famosa del momento" alt="pintura"></Post>
          </>: null}
          {(estadoClick === "cafeClickeado")? <p className = "resultado">{puntaje[0].puntos} han elegido el cafe</p>: null}
          {(estadoClick === "teClickeado")? <p className = "resultado">{puntaje[1].puntos} han elegido el te</p>: null}
          {(estadoClick === "pinturaClickeado")? <p className = "resultado">{puntaje[2].puntos} han elegido la pintura</p>: null}
          {(estadoEleccion === true)? <Button onClick={volveraVotar}  sx={{
          border: 2,
          borderColor: "peru",
          p: 2,
          bgcolor: "#107b00",
          color: "white"
        }}>Volver a votar</Button>: null}


      </Box>
      <footer>
          <section>
              <a href="#titulo">Ir al título</a>
              <br></br>
              <a href="mailto:mmasosab@cincinnatus.edu.do">Contactame aqui</a>
          </section>
          <p>Copyright © 2023 Blog de Misael. Todos los derechos reservados.</p>
      </footer>
    </Container>
  );
}

export default App; 

/*import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Product() {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img
        src="https://via.placeholder.com/200"
        alt="random"
      />
      <Box sx={{ flexGrow: 1 }}>
        <h2>Product Name</h2>
        <p>Product Description</p>
        <Button variant="contained">Add cart</Button>
      </Box>
      <Box
        component="p"
        sx={{ mr: 2 }}
      >
        $19.99
      </Box>
    </Paper>
  );
}*/
/*import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function MyCard() {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/1000x200"
          height="200"
          alt="Card Image"
        />
        <CardContent>
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            deserunt optio exercitationem, fugit enim saepe iusto magnam ipsam
            est cumque hic deleniti sequi neque soluta quas! Accusamus voluptate
            alias optio.
          </p>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button variant="contained">Add</Button>
        <Button>Remove</Button>
      </CardActions>
    </Card>
  ); 
} */
/*
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function NavListDrawer() {
  return (
    <Box sx={{ width: 250, bgcolor: "lightsalmon" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Draft" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary trash spam">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#trash"
            >
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#spam"
            >
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
} */
/*
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const mainList = [
  {
    text: "Inbox",
    icon: <InboxIcon />,
    href: "#inbox",
  },
  {
    text: "Drafts",
    icon: <DraftsIcon />,
    href: "#drafts",
  },
];

const secondaryList = [
  {
    text: "Trash",
    href: "#trash",
  },
  {
    text: "Spam",
    href: "#spam",
  },
];

export default function NavListDrawer() {
  return (
    <Box sx={{ width: 250, bgcolor: "lightsalmon" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {mainList.map((item) => (
            <ListItem
              disablePadding
              key={item.text}
            >
              <ListItemButton
                href={item.href}
                component="a"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary trash spam">
        <List>
          {secondaryList.map((item) => (
            <ListItem
              disablePadding
              key={item.text}
            >
              <ListItemButton
                component="a"
                href={item.href}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
} */

/*
import { Container, Button, Drawer } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./componentes/list";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ display: "grid", gap: 4 }}>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Open Drawer
      </Button>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavListDrawer onClick={() => setOpen(false)} />
      </Drawer>
    </Container>
  );
} */

/*
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          News
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}*/
/*
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Alert
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./componentes/list";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavListDrawer onClick={() => setOpen(false)} />
      </Drawer>
      <Box sx={{ display: "grid", gap: "1rem" }}>
      <Alert severity="error">Esta es una alerta</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      </Box>
    </>
  );
} */
/*
  import { Alert, Button, Collapse } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Alert
          severity="warning"
          action={<Button color="inherit">Cerrar</Button>}
        >
          This is a warning alert — check it out!
        </Alert>
        <Collapse in={open}>
          <Alert
            severity="info"
            onClose={() => {
              setOpen(false);
            }}
          >
            This is an info alert — check it out!
          </Alert>
        </Collapse>
        <Alert
          severity="warning"
          action={<Button color="inherit">Cerrar</Button>}
        >
          This is a warning alert — check it out!
        </Alert>
      </Box>
    </>
  );
}*/
/*
import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>

      <Button
        onClick={() => setOpen(true)}
        variant="contained"
      >
        Open
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          severity="warning"
          variant="filled"
        >
          This is a warning alert — check it out!
        </Alert>
      </Snackbar>
    </>
  );
} */