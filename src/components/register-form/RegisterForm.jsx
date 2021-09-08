import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { useState } from "react";

function RegisterForm({ onSubmit, validateDocument }) {
  const [name, setName] = useState("Denir");
  const [lastName, setLastName] = useState("");
  const [document, setDocument] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    document: { isValid: true, text: "" },
  });

  return (
    <form
      onSubmit={(event) => {
        onSubmit({ name, lastName, document, promotions, news });
        event.preventDefault();
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        margin="normal"
        fullWidth
        color="primary"
        variant="outlined"
        id="name"
        label="Nome"
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        margin="normal"
        fullWidth
        color="primary"
        variant="outlined"
        id="lastName"
        label="Sobrenome"
      />
      <TextField
        value={document}
        onChange={(event) => {
          setDocument(event.target.value);
        }}
        onBlur={(event) => {
          const isValid = validateDocument(event.target.value);
          setErrors({
            document: isValid,
          });
        }}
        error={!errors.document.isValid}
        helperText={errors.document.text}
        margin="normal"
        fullWidth
        color="primary"
        variant="outlined"
        id="document"
        label="CPF"
      />

      <FormControlLabel
        label="promotions"
        control={
          <Switch
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            id="promotions"
            color="primary"
            checked={promotions}
            name="Promoções"
          />
        }
      />

      <FormControlLabel
        checked={news}
        onChange={(event) => {
          setNews(event.target.checked);
        }}
        label="Novidades"
        control={<Switch id="news" color="primary" name="Novidades" />}
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegisterForm;
