const ipc = require("electron").ipcRenderer;

ipc.on('clickContinuousPlayButton', function(){
	document.querySelector('.autoPlay a').click();
});