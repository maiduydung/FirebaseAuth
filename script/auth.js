//sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const name = signupForm['signup-name'].value;

    console.log(email, password, name);

    // register user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        //after successful registeration, switch to index page
        window.location.href = 'index.html';
    });
});


//logout
function userLogOut(){
    auth.signOut().then(() =>{
        console.log('user signed out\n');
        window.location.href = 'fresh.html';
    
    })
};