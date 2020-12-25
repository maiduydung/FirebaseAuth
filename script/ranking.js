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

function get_aircon_kWh(uid){
    var start;
    url = "Energy_Consumption/users/"+uid;
    db_remote.ref(url).once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().air_con);
        //console.log("start",start);

    });


    var hour;
    var energy;
    function getHoursAndEnergy(){
        var end = Date.parse(new Date());
        hour = (end - start)*2.77777777*0.0000001;
        console.log(uid + " aircon hours ", hour);
        energy = 850*hour/1000;
        console.log(uid + ' aircon kwh ', energy);
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
        console.log(uid + " tv hours ", hour);
        energy = 400*hour/1000;
        console.log(uid + ' tv kwh ', energy);
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
        console.log(uid + " fan hours ", hour);
        energy = 100*hour/1000;
        console.log(uid + ' fan kwh ', energy);
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
        console.log(uid + " light hours ", hour);
        energy = 20*hour/1000;
        console.log(uid + ' light kwh ', energy);
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}

var json;
var json_str="";
var user_results = [];
function iterate_users(){
    firebase.database().ref('Energy_Consumption/users/').once('value', function(snap){
        json = snap.val();
        json_str = JSON.stringify(snap.val());

        for(let uid in json){
            let temp = 0;
            temp = temp + get_aircon_kWh(uid);
            temp = temp + get_fan_kWh(uid);
            temp = temp + get_light_kWh(uid);
            temp = temp + get_tv_kWh(uid);
            user_results.push({
                key:uid,
                value: temp
            });
        }
    })
}


setTimeout(function(){
    iterate_users()

},1000) 



// setTimeout(get_aircon_kWh, 1000);
// setTimeout(get_tv_kWh, 1000);
// setTimeout(get_fan_kWh, 1000);
// setTimeout(get_light_kWh, 1000);



