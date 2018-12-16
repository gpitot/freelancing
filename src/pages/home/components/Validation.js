

const checkLength = (field, mL) => {
    if (field.text.length < mL) {
        field.valid = false;
        return false;
    }
    field.valid = true;
    return true;
}

const checkValidEmail = (email) => {
    if (email.text.indexOf('@') < 1) {
        email.valid = false;
        return false;
    }
    email.valid = true;
    return true;
}

export function ValidateForm(form) {
    let valid = true;
    if (!checkLength(form.username, 1)) {
        valid = false;
    }

    if (!checkLength(form.company, 1)) {
        valid = false;
    }

  
    if (!checkValidEmail(form.email)) {
        valid = false;
    }

    if (!checkLength(form.phone, 10)) {
        valid = false;
    }


    return valid;
}


