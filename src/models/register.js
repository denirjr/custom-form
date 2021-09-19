
function validateDocument(document) {
    return document.length !== 11 ?
        { isValid: false, text: "O CPF deve ter 11 digitos" } :
        { isValid: true, text: "" };
}

function validatePassword(password) {
    return password.length < 4 || password.length > 72 ?
        { isValid: false, text: "Senha deve ter entre 4 e 72 digitos" } :
        { isValid: true, text: "" };
}

export { validateDocument, validatePassword }