import React from 'react';

const RegisterValidations = React.createContext({
    document: withoutValidation.bind(this),
    password: withoutValidation.bind(this),
    name: withoutValidation.bind(this)
});

function withoutValidation() {
    return { isValid: true, text: "" };
}
export default RegisterValidations;