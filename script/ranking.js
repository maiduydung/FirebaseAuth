// GET START TIME SAMPLE

var uid, url;
function getUserID(){
    auth.onAuthStateChanged(user => {
        if(user){
            console.log(user.uid);
            uid = user.uid;
        }
    })

}
getUserID();


//desperate times
var light_energy ={val:0};
var aircon_energy ={val:0};
var tv_energy ={val:0};
var fan_energy ={val:0};

var users = [
    // uid:"",
    // light_energy:0,
    // aircon_energy:0,
    // tv_energy:0,
    // fan_energy:0,
    // total:0
];


function get_aircon_kWh(uid){
    var start;
    var username='';
    url = "Energy_Consumption/users/"+uid;
    db_remote.ref(url).once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().air_con);
        username = snapshot.val().user_name;
        //console.log("start",start);

    });


    var hour;
    var energy;
    function getHoursAndEnergy(){
        var end = Date.parse(new Date());
        hour = (end - start)*2.77777777*0.0000001;
        //console.log(uid + " aircon hours ", hour);
        energy = 850*hour/1000;
        //console.log(uid + ' aircon kwh ', energy);
        //CRITICAL: ADDING ENERGY CONSUME OF EACH USER TO AN ARR
        if(users.length == 0){
            //when users arr is empty
            users.push([uid, energy, username]);
            //console.log('added to empty arr', users);
        }
        
        var found = false;
        for(let i=0; i<users.length;i++){
            //look for existing uid
            if(users[i][0].includes(uid) == true){
                found = true;
                users[i][1] = users[i][1] + energy;
                //console.log('added to existing user', users);
            }
        }

        //if cant found uid, meaning we have a new user
        if(found == false){
            users.push([uid, energy, username]);
            //console.log('added new user', users);
        }
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}


function get_tv_kWh(uid){
    var start;
    url = "Energy_Consumption/users/"+uid;
    db_remote.ref(url).once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().tv)
    });

    var hour;
    var energy;
    function getHoursAndEnergy(){
        var end = Date.parse(new Date());
        hour = (end - start)*2.77777777*0.0000001;
        //console.log(uid + " tv hours ", hour);
        energy = 400*hour/1000;
        //console.log(uid + ' tv kwh ', energy);
        //CRITICAL: ADDING ENERGY CONSUME OF EACH USER TO AN ARR
        if(users.length == 0){
            //when users arr is empty
            users.push([uid, energy, username]);
            //console.log('added to empty arr', users);
        }
        
        var found = false;
        for(let i=0; i<users.length;i++){
            //look for existing uid
            if(users[i][0].includes(uid) == true){
                found = true;
                users[i][1] = users[i][1] + energy;
                //console.log('added to existing user', users);
            }
        }

        //if cant found uid, meaning we have a new user
        if(found == false){
            users.push([uid, energy, username]);
            //console.log('added new user', users);
        }
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}

function get_fan_kWh(uid){
    var start;
    url = "Energy_Consumption/users/"+uid;
    db_remote.ref(url).once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().fan)
    });

    var hour;
    var energy;
    function getHoursAndEnergy(){
        var end = Date.parse(new Date());
        hour = (end - start)*2.77777777*0.0000001;
        //console.log(uid + " fan hours ", hour);
        energy = 100*hour/1000;
        //console.log(uid + ' fan kwh ', energy);
        //CRITICAL: ADDING ENERGY CONSUME OF EACH USER TO AN ARR
        if(users.length == 0){
            //when users arr is empty
            users.push([uid, energy, username]);
            //console.log('added to empty arr', users);
        }
        
        var found = false;
        for(let i=0; i<users.length;i++){
            //look for existing uid
            if(users[i][0].includes(uid) == true){
                found = true;
                users[i][1] = users[i][1] + energy;
                //console.log('added to existing user', users);
            }
        }

        //if cant found uid, meaning we have a new user
        if(found == false){
            users.push([uid, energy, username]);
            //console.log('added new user', users);
        }
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}

function get_light_kWh(uid){
    var start;
    url = "Energy_Consumption/users/"+uid;
    db_remote.ref(url).once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().light)
    });

    var hour;
    var energy;
    function getHoursAndEnergy(){
        var end = Date.parse(new Date());
        hour = (end - start)*2.77777777*0.0000001;
        //console.log(uid + " light hours ", hour);
        energy = 20*hour/1000;
        //console.log(uid + ' light kwh ', energy);
        //CRITICAL: ADDING ENERGY CONSUME OF EACH USER TO AN ARR
        if(users.length == 0){
            //when users arr is empty
            users.push([uid, energy, username]);
            //console.log('added to empty arr', users);
        }
        
        var found = false;
        for(let i=0; i<users.length;i++){
            //look for existing uid
            if(users[i][0].includes(uid) == true){
                found = true;
                users[i][1] = users[i][1] + energy;
                //console.log('added to existing user', users);
            }
        }

        //if cant found uid, meaning we have a new user
        if(found == false){
            users.push([uid, energy, username]);
            //console.log('added new user', users);
        }
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}

var json;
var json_str="";

function iterate_users(){
    firebase.database().ref('Energy_Consumption/users/').once('value', function(snap){
        json = snap.val();
        json_str = JSON.stringify(snap.val());

        for(let uid in json){
            let temp = 0;
            get_aircon_kWh(uid);
            get_fan_kWh(uid);
            get_light_kWh(uid);
            get_tv_kWh(uid);

        }
    })
}

function sort_user_ascending(){
    users = users.sort((a, b) => a[1]-b[1]);
    const user_ranking_list = document.querySelector('.ul_user_ranking');
    let html = '';
    users.forEach(user => {
        console.log(user);        
    /////////////////////////////////
    //template string
        const li = `
        <li>
        <div class="col s12 m8 offset-m2 l6 offset-l3 user_post">
            <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col">
                    <img class="circle img-responsive avatar" src="./img/avatar/avatar1.png" alt="">
                    </div>
                    <div class="col">${user[2]}</div>
                </div>
            <div class="row valign-wrapper">
                <div class="col">
                <span class="black-text">
                ${Math.round(user[1])} kwh
                </span>
                </div>
            </div>
            </div>
        </div>
        </li>
        `;
        html = html + li
    /////////////////////////////////
    });
    user_ranking_list.innerHTML = html;
}

setTimeout(function(){
    iterate_users()
},1000) 


setTimeout(function(){
    sort_user_ascending()
},3000) 



// setTimeout(get_aircon_kWh, 1000);
// setTimeout(get_tv_kWh, 1000);
// setTimeout(get_fan_kWh, 1000);
// setTimeout(get_light_kWh, 1000);



