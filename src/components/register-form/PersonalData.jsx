import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { useState, useContext } from "react";
import RegisterValidations from "../../contexts/RegisterValidations";

function PersonalData({ onSubmit}) {
  const [name, setName] = useState("Denir");
  const [lastName, setLastName] = useState("");
  const [document, setDocument] = useState("");
  const [promotions, setPromotions] = useState(false);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    document: { isValid: true, text: "" },
    name: { isValid: true, text: "" },
  });

  const validations = useContext(RegisterValidations);

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function canISend() {
    for (let field in errors) {
      if (!errors[field].isValid) {
        return false;
      }
      return true;
    }
  }
  return (
    <form
      onSubmit={(event) => {
        if (canISend()) {
          onSubmit({ name, lastName, document, promotions, news });
        }
        event.preventDefault();
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.name.isValid}
        helperText={errors.name.text}
        margin="normal"
        fullWidth
        color="primary"
        variant="outlined"
        id="name"
        label="Nome"
        name="name"
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
        onBlur={validateFields}
        error={!errors.document.isValid}
        helperText={errors.document.text}
        id="document"
        name="document"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
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
        Próximo
      </Button>
    </form>
  );
}

export default PersonalData;
