import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkingRequest } from './dtos/parking-req.dtos';
import { Parking } from './parking.entity';

@Injectable()
export class ParkingService {
    constructor(@InjectRepository(Parking) private parkingRepo: Repository<Parking>) { }

    public async findAll(): Promise<Parking[]> {
        const result = await this.parkingRepo.find({
            order: { createdDateTime: "DESC" }
        });
        return result;
    }
    
    public async create(req: ParkingRequest): Promise<Parking> {
        const parking: Parking = await this.parkingRepo.create({ ...req });
        return this.parkingRepo.save(parking);
    }
}
