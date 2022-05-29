import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkingFloorReq } from './dtos/parking-floor-req.dtos';
import { ParkingFloor } from './parking-floor.entity';

@Injectable()
export class ParkingFloorService {
    constructor(@InjectRepository(ParkingFloor) private floorRepo: Repository<ParkingFloor>) { }

    public async findAll(): Promise<ParkingFloor[]> {
        const result = await this.floorRepo.find({
            order: { createdDateTime: "DESC" }
        });
        return result;
    }

    public async create(req: ParkingFloorReq): Promise<ParkingFloor> {
        const floor: ParkingFloor = await this.floorRepo.create({ ...req });
        return this.floorRepo.save(floor);
    }
}
