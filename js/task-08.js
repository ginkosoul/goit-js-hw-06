const form = document.querySelector('form.login-form')


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;

    if (email.value && password.value) {
        const formData = new FormData(event.currentTarget)
        const data = {};
        formData.forEach((value, name) =>{
            data[name] = value;
        });

        console.log(data);
        // console.log(email, password);
        event.currentTarget.reset();     
    } else{
        alert('All fields must be filled');
    }
}


const validatePassword = (password) => {
    const PASSWORD_LENGTH = 6;
    return String(password).length > PASSWORD_LENGTH;
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

