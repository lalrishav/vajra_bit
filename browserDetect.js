var objappVersion = navigator.appVersion; 
var objAgent = navigator.userAgent; 
var objbrowserName = navigator.appName; 
var objfullVersion = ''+parseFloat(navigator.appVersion); var objBrMajorVersion = parseInt(navigator.appVersion,10); var objOffsetName,objOffsetVersion,ix;


if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) { 
    objbrowserName = "Chrome"; 
    objfullVersion = objAgent.substring(objOffsetVersion+7);
}

alert(objfullVersion.substr(0,13));
alert(objAgent);
