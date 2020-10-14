//sign up
//reference to sign up modal in index.html
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e)=> {
    //prevent reloading page so that we don't lose any data
    e.preventDefault();

    //get user info
    // look in "signup-form", grab id = "signup-email"
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email,password);

    // signing up user
    // takes some time to complete
    // we have to wait for it to finish
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred);
    });


})