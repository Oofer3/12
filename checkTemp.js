function checkTemp(temp){
    
    if (temp <= 20){
        console.log("Liiga külm")
        return -1;
    }
    
    else if (temp <= 40){
        console.log("Paras Temperatuur")
        return 0
    }
    
    else{
        console.log("Liiga kuum")
        return 1;
    }
}
