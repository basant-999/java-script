function class4(){
    let package = parseInt(window.prompt("enter your pakage"));
    
    if (package<350000){
        window.alert("you dont want to paytax");

    }
    else if(package >=350000 && package<800000){
        let payabletax =(package/100)*10;
        window.alert("you have to pay" + payabletax + "on your package");
    }
    else if (package>=800000){
        let payabletax =(package/100)*17;
        window.alert("you have to pay"+payabletax + "on your package");
    }
    else{
        window.alert("invalid input ");
    }
      
  
}
class4();