const isEmail = email => {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
};

const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};


const goodPass = string => {
    return ( String(string).trim().length >= 6);
}

exports.validateSignUpData = (data) => {
    let errors = {};
    if (isEmpty(data.email)) {
      errors.email = "Must not be empty";
    }
    if (isEmpty(data.name)) {
      errors.name = "Must not be empty";
    
    } 
    if (!isEmail(data.email)) {
      errors.email = "Must be a valid email address";
    }

    if (isEmpty(data.password)) errors.password = "Must not be empty";
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = "Passwords must match";
    if ( !goodPass(data.password)) errors.password ="Weak password , should be 6 digits or more";

    

    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };



}


exports.validateUpdateData = ( data) => {
    let errors = {};
    if (isEmpty(data.email)) {
      errors.email = "Must not be empty";
    }
    if (isEmpty(data.name)) {
      errors.name = "Must not be empty";
    }
    if (!isEmail(data.email)) {
      errors.email = "Must be a valid email address";
    }

    if (isEmpty(data.password)) errors.password = "Must not be empty";
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = "Passwords must match";
    if (!goodPass(data.password))
      errors.password = "Weak password , should be 6 digits or more";

    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
}

exports.validateLoginData = (data) => {
      return true;
}