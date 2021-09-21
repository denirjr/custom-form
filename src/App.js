import './App.css';
import '@fontsource/roboto';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';

import { validateDocument, validatePassword } from '../src/models/register';
import RegisterForm from './components/register-form/RegisterForm';
import RegisterValidations from './contexts/RegisterValidations';

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
        <RegisterValidations.Provider
          value={
            {
              document: validateDocument,
              password: validatePassword,
              name: validatePassword
            }}>
          <RegisterForm
            onSubmit={onSubmit.bind(this)}
          />
        </RegisterValidations.Provider>
      </Container>
    );
  }
}

function onSubmit(data) {
  console.log(data);
}


export default App;
