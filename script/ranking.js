// GET START TIME SAMPLE

var start;
db_remote.ref("Home_Appliances_Control/Air_Con/Fragment").once("value").then((snapshot) =>{
    console.log(snapshot.val().start);
    start = Date.parse(snapshot.val().start)
    console.log("parsed",Date.parse(snapshot.val().start));
});




function foo(){
    var end = Date.parse(new Date());
    var hour = (end - start)*2.77777777*0.00000001;
    console.log("hour ", hour);
}

setTimeout(foo, 2000);