var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function () {
 // Get points of light and sound data.
  setInterval( function () {
    let sendMessage = false;
    ambient.getLightLevel( function(err, lightdata) {
      if (err) throw err;
      ambient.getSoundLevel( function(err, sounddata) {
        if (err) throw err;
        console.log("Light level:", lightdata.toFixed(8), " ", "Sound Level:", sounddata.toFixed(8));


      });
    });
  }, 1000);
   // The readings will happen every .5 seconds
});

ambient.on('light-trigger', function (lightTriggerValue) {
   if(lightdata < .5) {
    console.log('its dark in here')
    // clearInterval(setInterval)
  }
});

ambient.on('sound-trigger', function (soundTriggerValue) {
  if (sounddata > .1) {

      console.log('I hear you');

  }
})

ambient.on('error', function (err) {
  console.log(err);
});
