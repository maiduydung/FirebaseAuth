// GET START TIME SAMPLE
db_remote.ref("Home_Appliances_Control/Air_Con/Fragment").once("value").then((snapshot) =>{
    console.log(snapshot.val().start);
})