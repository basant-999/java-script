class person {
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class engineer extends person{
    work(){
        console.log("problem solve");
    }
}

class docter extends person{
    work(){
        console.log("good health");
    }
}

let basantObj= new engineer();