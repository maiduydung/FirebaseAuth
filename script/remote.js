temp = db_remote.ref("Home_Appliances_Control/Air_Con/Fragment");
temp.update(
    {
        "key": 1,
    }
);


function aircon_on(){
    var aircon_ref_frag = db_remote.ref("Home_Appliances_Control/Air_Con/Fragment");
    var aircon_switch = document.getElementById("aircon_switch");   
    if(aircon_switch.checked == true){
        aircon_ref_frag.update({
            key:1,
        })
        console.log("turned on air conditioner\n");
    }
    else{
        aircon_ref_frag.update({
            key:0,
        })
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
        console.log("turned on light\n");
    }
    else{
        light_ref_frag.update({
            key:0,
        })
        console.log("turned off light\n");
    }
}