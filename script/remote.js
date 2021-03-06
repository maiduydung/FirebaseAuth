temp = db_remote.ref("Home_Appliances_Control/Air_Con/Fragment");
temp.update(
    {
        "key": 1,
    }
);



function start() {
    temp_start = new Date();
    return temp_start.toString();
};

function end(startTime) {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000; //sec
  timeDiff /= 60; //min
  timeDiff /= 60; //hour

  // get seconds 
  //var seconds = Math.round(timeDiff);
  console.log(timeDiff + " hours");
}

var uid;
function getUserID(){
    auth.onAuthStateChanged(user => {
        if(user){
            console.log(user.uid);
            uid = user.uid;
        }
    })
}
getUserID();

// GET START TIME SAMPLE
// db_remote.ref("Home_Appliances_Control/Air_Con/Fragment").once("value").then((snapshot) =>{
//     console.log(snapshot.val().start);
// })

function writeAirConStartTime(){
    var startTime = db_remote.ref("Energy_Consumption/users/"+uid);
    startTime.update({
        air_con: start(),
    })
}

function writeFanStartTime(){
    var startTime = db_remote.ref("Energy_Consumption/users/"+uid);
    startTime.update({
        fan: start(),
    })
}

function writeTVStartTime(){
    var startTime = db_remote.ref("Energy_Consumption/users/"+uid);
    startTime.update({
        tv: start(),
    })
}

function writeLightStartTime(){
    var startTime = db_remote.ref("Energy_Consumption/users/"+uid);
    startTime.update({
        light: start(),
    })
}


function aircon_on(){
    var aircon_ref_frag = db_remote.ref("Home_Appliances_Control/Air_Con/Fragment");
    var aircon_switch = document.getElementById("aircon_switch");   
    if(aircon_switch.checked == true){
        aircon_ref_frag.update({
            key:1,
        })
        writeAirConStartTime();
        console.log("turned on air conditioner\n");
    }
    else{
        aircon_ref_frag.update({
            key:0,
        })
        //elapsedTime = end(start);
        console.log("turned off air conditioner\n");
    }
};


function aircon_modes(){
    var mode = document.getElementById("aircon_modes").value;
    // 1 cool
    // 2 heat
    // 3 dry
    var aircon_mode = db_remote.ref("Home_Appliances_Control/Air_Con/Mode");
    aircon_mode.update({
        key : mode,
    })
    console.log("mode ", mode);
}

function fan_switch(){
    var fan_ref_frag = db_remote.ref("Home_Appliances_Control/Cooling_Fan/Fragment");
    var fan_switch = document.getElementById("fan_switch");
    if(fan_switch.checked == true){
        fan_ref_frag.update({
            key:1,
        })
        writeFanStartTime();
        console.log("turned on fan\n");
    }
    else{
        fan_ref_frag.update({
            key:0,
        })
        console.log("turned off fan\n");
    }
}


function tv_switch(){
    var tv_ref_frag = db_remote.ref("Home_Appliances_Control/TV/Off");
    var tv_switch = document.getElementById("tv_switch");
    if(tv_switch.checked == true){
        tv_ref_frag.update({
            key:0,
        })
        writeTVStartTime();
        console.log("turned on tv\n");
    }
    else{
        tv_ref_frag.update({
            key:1,
        })
        console.log("turned off tv\n");
    }

}


function light_switch(){
    var light_ref_frag = db_remote.ref("Home_Appliances_Control/Light/Fragment");
    var light_switch = document.getElementById("light_switch");
    if(light_switch.checked == true){
        light_ref_frag.update({
            key:1,
        })
        writeLightStartTime();
        console.log("turned on light\n");
    }
    else{
        light_ref_frag.update({
            key:0,
        })
        console.log("turned off light\n");
    }
}