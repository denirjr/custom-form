import './App.css';
import '@fontsource/roboto';

import Container from '@material-ui/core/Container';
import { Component } from 'react';

import RegisterForm from './components/register-form/RegisterForm';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography
          variant="h3"
          componet="h1"
          align="center">
          Formulario de cadastro
        </Typography>
        <RegisterForm
          onSubmit={onSubmit.bind(this)}
          validateDocument={validateDocument}
        />
      </Container>
    );
  }
}

function onSubmit(data) {
  console.log('DATA ON APP COMPONENT ==>', data);
}

function validateDocument(document) {
  return document.length !== 11 ?
    { isValid: false, text: "O CPF deve ter 11 digitos" } :
    { isValid: true, text: "" };
}

export default App;
