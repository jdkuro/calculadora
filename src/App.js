import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [nombre, setNombre] = useState("");

  const asignarNombre = (event) => {
    setNombre(event.target.value);
  };

  const mostarNombre = () => {
    alert("Hola soy " + nombre);
  };

  return (
    <div style={{ margin: 30 }}>
      <p>{nombre}</p>
      <br />
      <TextField
        label="Ingrese su nombre"
        variant="standard"
        value={nombre}
        onChange={asignarNombre}
      />
      <Button variant="contained" onClick={mostarNombre}>
        Mostrar nombre
      </Button>
    </div>
  );
}

export default App;
