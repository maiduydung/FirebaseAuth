

//listen for authentication status, and keep track of it
//logged in / logged out
auth.onAuthStateChanged(user =>{
  //check the console
  console.log("Auth check\n",user);

  if(user){
    setupUI(user);
    console.log('User logged in\n', user.email);
    // get posts
    // db is a firestore instance declared in index.html
    db.collection('posts').get().then((snapshot)=>{
      setupPost(snapshot.docs)
    });
  }  else{
    console.log('User logged out\n');
    //if user not logged in, then return empty 
    setupPost([])
    setupUI();
  }

});



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
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset()
    });
});


// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut()
});


//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //let user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then((cred)=>{
        console.log("user logged in\n",cred.user);
        //close and reset log in modal
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset()
    });
});


