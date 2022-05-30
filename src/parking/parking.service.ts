import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingFloorReq } from '../parking-floor/dtos/parking-floor-req.dtos';
import { ParkingFloorService } from '../parking-floor/parking-floor.service';
import { Repository } from 'typeorm';
import { ParkingRequest } from './dtos/parking-req.dtos';
import { Parking } from './parking.entity';

@Injectable()
export class ParkingService {
    constructor(
        @InjectRepository(Parking) private parkingRepo: Repository<Parking>,
        private floorService: ParkingFloorService
    ) { }

    public async findAll(): Promise<Parking[]> {
        const result = await this.parkingRepo.find({
            order: { createdDateTime: "DESC" },
            relations: ['parkingFloors']
        });
        return result;
    }

    public async create(req: ParkingRequest): Promise<Parking> {
        const parking: Parking = await this.parkingRepo.create({ ...req });
        return this.parkingRepo.save(parking);
    }

    public async createFloor(req: ParkingFloorReq): Promise<any> {
        const parkingRes = await this.parkingRepo.find({
            where: { id: req.parkingId }
        });
        if(parkingRes.length > 0){
            return this.floorService.create(req, parkingRes[0]);
        }
        else throw new NotFoundException(404, "not found parking id");
    }
}
