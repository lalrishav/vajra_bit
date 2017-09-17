var objappVersion = navigator.appVersion; 
var objAgent = navigator.userAgent; 
var objbrowserName = navigator.appName; 
var objfullVersion = ''+parseFloat(navigator.appVersion); var objBrMajorVersion = parseInt(navigator.appVersion,10); var objOffsetName,objOffsetVersion,ix;


if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) { 
    objbrowserName = "Chrome"; 
    objfullVersion = objAgent.substring(objOffsetVersion+7);
    var grabVersion = objfullVersion.substr(0,13);
    var storeNum = parseInt(objfullVersion.substr(0,2));
var grabAgent =  objfullVersion.substr(14,6);
    if(grabAgent === "Mobile"){
        
        if(storeNum < 59){
            alert("Please Update your Browser for proper experience");
        }else if(storeNum > 59){
            console.log("Works");
        }
        
    }

}

