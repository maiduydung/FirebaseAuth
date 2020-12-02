var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
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

// ceiling light: 50
// tv 400
// fan: 

// air_con_watt = 850
// air_con_kWh = (watts *time)/1000