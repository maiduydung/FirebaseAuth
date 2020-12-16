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

function get_aircon_kWh(){
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
        hour = (end - start)*2.77777777*0.00000001;
        console.log("aircon hours ", hour);
        energy = 850*hour/1000;
        console.log('aircon kwh ', energy);
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}


function get_tv_kWh(){
    var start;
    url = "Energy_Consumption/users/"+uid;
    db_remote.ref(url).once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().tv)
    });

    var hour;
    var energy;
    function getHoursAndEnergy(){
        var end = Date.parse(new Date());
        hour = (end - start)*2.77777777*0.00000001;
        console.log("tv hours ", hour);
        energy = 400*hour/1000;
        console.log('tv kwh ', energy);
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}

function get_fan_kWh(){
    var start;
    url = "Energy_Consumption/users/"+uid;
    db_remote.ref(url).once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().fan)
    });

    var hour;
    var energy;
    function getHoursAndEnergy(){
        var end = Date.parse(new Date());
        hour = (end - start)*2.77777777*0.00000001;
        console.log("fan hours ", hour);
        energy = 100*hour/1000;
        console.log('fan kwh ', energy);
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}

function get_light_kWh(){
    var start;
    url = "Energy_Consumption/users/"+uid;
    db_remote.ref(url).once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().light)
    });

    var hour;
    var energy;
    function getHoursAndEnergy(){
        var end = Date.parse(new Date());
        hour = (end - start)*2.77777777*0.00000001;
        console.log("light hours ", hour);
        energy = 20*hour/1000;
        console.log('light kwh ', energy);
    }
    setTimeout(getHoursAndEnergy, 1000);
    return energy;
}


setTimeout(get_aircon_kWh, 1000);
setTimeout(get_tv_kWh, 1000);
setTimeout(get_fan_kWh, 1000);
setTimeout(get_light_kWh, 1000);
