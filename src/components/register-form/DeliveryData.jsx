import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

function DeliveryData({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, address, number, state, city });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => setCep(event.target.value)}
        margin="normal"
        variant="outlined"
        id="cep"
        label="cep"
        type="number"
      ></TextField>

      <TextField
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        margin="normal"
        fullWidth
        variant="outlined"
        id="address"
        label="Endereço"
        type="text"
      ></TextField>

      <TextField
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        margin="normal"
        variant="outlined"
        id="number"
        label="Numero"
        type="number"
      ></TextField>

      <TextField
        value={state}
        onChange={(event) => setState(event.target.value)}
        margin="normal"
        variant="outlined"
        id="state"
        label="Estado"
        type="state"
      ></TextField>

      <TextField
        value={city}
        onChange={(event) => setCity(event.target.value)}
        margin="normal"
        variant="outlined"
        id="city"
        label="Cidade"
        type="text"
      ></TextField>
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DeliveryData;
