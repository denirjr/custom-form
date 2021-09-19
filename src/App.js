import './App.css';
import '@fontsource/roboto';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';

import { validateDocument, validatePassword } from '../src/models/register';
import RegisterForm from './components/register-form/RegisterForm';

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
          validations={{ document: validateDocument, password: validatePassword, name: validatePassword }}
        />
      </Container>
    );
  }
}

function onSubmit(data) {
  console.log('DATA ON APP COMPONENT ==>', data);
}


export default App;
