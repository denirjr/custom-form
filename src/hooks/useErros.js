import React, { useState } from 'react';

function useErrors(validations) {

    const initialState = createInitialState(validations)

    const [errors, setErrors] = useState(initialState);

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

    return [errors, validateFields, canISend]
}

function createInitialState(validations) {
    const initialState = {};
    for (let field in validations) {
        initialState[field] = { isValid: true, text: "" }
    }

    return initialState;
}

export default useErrors;