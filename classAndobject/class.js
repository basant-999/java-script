class mhendra  {

    constructor(brand){
        console.log("creating boj");
        this.brand = brand;
    }

    
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let thar =  new mhendra();
thar.setBrand ("thar");

let swift =  new mhendra();
swift.setBrand("swift");
