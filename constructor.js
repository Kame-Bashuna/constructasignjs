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
        const vehicle= new Car('Toyota','Camry',2000,true);
        console.log(vehicle.isAvailable);
    

class Rental{
    constructor(car,startDate,endDate,renterName){
        this.car=car;
        this.startDate=startDate;
        this.endDate =endDate;
        this.renterName = renterName
    }
    calculateRentalDuration(){
        const start = new Date(this.startDate);
        const end = new Date(this.endDate)
        const duration = Math.abs(end-start)
        return Math.ceil (duration/(1000*60*60*24))
    }
}
const carInstance = new Car("Toyota","Camry",2000);
const startDate = new Date("2024-04-25");
const endDate = new Date ("2024-07-10")
const rentInstance =new Rental(carInstance,startDate,endDate)
const timeDuration =rentInstance.calculateRentalDuration()
console.log("Rent duration",timeDuration,"days")


class Questions{
    constructor(text,options,correctAnswer){
    this.text = text;
    this.options= options;
    this.correctAnswer= correctAnswer;
    }
    checkCorrectAnswer(myAnswer){
        return myAnswer===this.correctAnswer
    }
}
const question1 = new Questions(
    "What means of transport do people in Ethiopia use"
    ["train","camel","road"],
    "road"
)
console.log(question1.checkCorrectAnswer("road"))
console.log(question1.checkCorrectAnswer("train"))







    