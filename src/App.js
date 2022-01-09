import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const asignarNombre = (event) => {
    setNombre(event.target.value);
  };

  const asignarApellido = (event) => {
    setApellido(event.target.value);
  };

  const mostarNombre = () => {
    alert("Hola soy " + nombre + " " + apellido);
  };

  return (
    <div style={{ margin: 30 }}>
      <p>
        {nombre} {apellido}
      </p>
      <br />
      <TextField
        label="Ingrese su nombre"
        variant="standard"
        value={nombre}
        onChange={asignarNombre}
      />
      <TextField
        label="Ingrese su apellido"
        variant="standard"
        value={apellido}
        onChange={asignarApellido}
      />
      <Button variant="contained" onClick={mostarNombre}>
        Mostrar nombre
      </Button>
    </div>
  );
}

export default App;
