class Car{
    constructor(brand,speed){
        this.speed = speed;
        this.brand = brand;
    }
    drive(){
        console.log(this);
    }
    driveFast = (brand,speed)=>{
        console.log(this);
    }
}

let car1 = new Car("BMW",220);


car1.driveFast();
car1.drive();