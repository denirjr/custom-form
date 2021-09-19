import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function RegisterForm({ onSubmit }) {
  const [actualStep, setActualStep] = useState(0);
  const [collectedData, setDatas] = useState({});
  useEffect(() => {
    if (actualStep === forms.length - 1) {
      onSubmit(collectedData);
    }
  });

  const forms = [
    <UserData onSubmit={getData} />,
    <PersonalData onSubmit={getData} />,
    <DeliveryData onSubmit={getData} />,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>,
  ];

  function getData(actualData) {
    setDatas({ ...collectedData, ...actualData });
    nextStep();
  }

  function nextStep() {
    setActualStep(actualStep + 1);
  }

  return (
    <>
      <Stepper activeStep={actualStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>

      {forms[actualStep]}
    </>
  );
}
export default RegisterForm;
