import { HttpException, Injectable } from '@nestjs/common';
import {CARS} from  './car.mock'
@Injectable()
export class CarService {
    cars = CARS
    public  getCar( ) {
       return this.cars
    }


    public  postCar(car) {
       this.cars.push(car)
    }

    public  getCarbyId(id:number) {
        const index = this.cars.findIndex((car) => car.id == id);
        if (!index) {
            throw new HttpException("not found",404)
        }
       return this.cars[index]
    }


    public  deleteCarbyId(id:number) {
        const index = this.cars.findIndex((car) => car.id == id);
        if (!index) {
            throw new HttpException("not found",404)
        }
        this.cars.splice(index, 1);
        return this.cars
    }
    
    

    public  putCarbyId(id:number,propertyName:string,propertyValue:string) {
        const index = this.cars.findIndex((car) => car.id == id);
        if (!index) {
            throw new HttpException("not found",404)
        }
        this.cars[index][propertyName] = propertyValue
        return this.cars[index]
    }
}
