class Car{
    constructor(make,year,model,isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable
        }
        toggleAvailability(){
            this.isAvailable=!isAvailable
        }
    }
        const vehicle= new Car('Toyota','Camry',2010,true);
        console.log(vehicle.isAvailable);
    
class Rental{
    constructor(car,startDate,endDate){
        this.car=car
        this.startDate=startDate
        this.endDate=endDate
    }
    
}