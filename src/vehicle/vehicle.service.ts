import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleRequest } from './dtos/vehicle-req.dto';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleService {
    constructor(@InjectRepository(Vehicle) private vehicleRepo: Repository<Vehicle>) { }

    public async create(req: VehicleRequest): Promise<Vehicle> {
        const vehicle: Vehicle = await this.vehicleRepo.create({ ...req });
        return this.vehicleRepo.save(vehicle);
    }
}
