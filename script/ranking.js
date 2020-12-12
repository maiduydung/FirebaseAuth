// GET START TIME SAMPLE

function get_aircon_kWh(){
    var start;
    db_remote.ref("Home_Appliances_Control/Air_Con/Fragment").once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().start)
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
    setTimeout(getHoursAndEnergy, 3000);
    return energy;
}


function get_tv_kWh(){
    var start;
    db_remote.ref("Home_Appliances_Control/TV/Off").once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().start)
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
    setTimeout(getHoursAndEnergy, 3000);
    return energy;
}

function get_fan_kWh(){
    var start;
    db_remote.ref("Home_Appliances_Control/Cooling_Fan/Fragment").once("value").then((snapshot) =>{
        start = Date.parse(snapshot.val().start)
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
    setTimeout(getHoursAndEnergy, 3000);
    return energy;
}

get_aircon_kWh();
get_tv_kWh();
