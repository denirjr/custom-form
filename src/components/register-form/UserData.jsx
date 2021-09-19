import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RegisterValidations from "../../contexts/RegisterValidations";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    password: { isValid: true, text: "" },
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
        event.preventDefault();
        if (canISend()) {
          onSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        margin="normal"
        fullWidth
        variant="outlined"
        id="email"
        label="email"
        type="email"
        name="email"
      ></TextField>

      <TextField
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        onBlur={validateFields}
        error={!errors?.password?.isValid}
        helperText={errors?.password?.text}
        required
        margin="normal"
        fullWidth
        variant="outlined"
        id="password"
        label="password"
        type="password"
        name="password"
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default UserData;
