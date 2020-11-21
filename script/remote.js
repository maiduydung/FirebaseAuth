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