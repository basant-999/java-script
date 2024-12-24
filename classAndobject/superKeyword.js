class person {
    constructor(){
        console.log("enter parent constructor");
        this.spies = "hemo spaiens"
    }
    eat(){
        console.log("eat");
    }
 
}

class engineer extends person{
    constructor(branch){
        console.log("enter child constructor");
        super();  // invoke the parent class constructor
        this.branch = branch;
        console.log("exit child constructor");

    }
    work(){
        console.log("problem solve");
    }
}


let enggObj= new engineer("compuer science");