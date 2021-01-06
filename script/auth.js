let userEmail='';
//listen for auth change
auth.onAuthStateChanged(user =>{

    if(user){
        userEmail = user.email;
        console.log('auth status\n',user);

        //get data
        db.collection('type1_userpost').onSnapshot(snapshot => {
            setupUserPost(snapshot.docs);
        });
    }
    else{
        console.log('user logged out');
        setupUserPost([]);
    }
});

//post
const createForm = document.querySelector('#create-form');
if(createForm){
    createForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        db.collection('type1_userpost').add({
            content: createForm['content'].value,
            createdBy: userEmail
        }).then(() =>{
            //close and reset
            const modal = document.querySelector('#modal-create');
            M.Modal.getInstance(modal).close();
            createForm.reset();
        })
    })
}

function writeUserData(userID, userName){

    temp = db_remote.ref("Energy_Consumption/users/"+userID).set(
        {
            user_name: userName,
            air_con: 1,
            fan:1,
            light:1,
            tv:1
        }
    );
}

//sign up
const signupForm = document.querySelector('#signup-form');
if(signupForm){
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
            
            return db.collection('users').doc(cred.user.uid).set({
                name: signupForm['signup-name'].value,
            });
            
            
        }).then(() => {
            //after successful registeration, switch to index page
            auth.onAuthStateChanged(user =>{
                if(user){
                    //also create user energy profile
                    writeUserData(user.uid,user.email);
                    console.log('created\n');
                }
            });
            window.location.href = 'newsfeed.html';
        });
    });
}


//logout
function userLogOut(){
    auth.signOut().then(() =>{
        console.log('user signed out\n');
        window.location.href = 'index.html';
    
    })
};

//log in
const loginForm = document.querySelector('#login-form');
if(loginForm){
    loginForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;
        console.log(email, password);
        //logging in
        auth.signInWithEmailAndPassword(email, password).then(cred =>{
            console.log(cred);
            window.location.href = 'newsfeed.html';
        });
    })
}