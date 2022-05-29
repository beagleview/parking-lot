import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parking } from 'src/parking/parking.entity';
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

    public async create(req: ParkingFloorReq, parkingData: Parking): Promise<ParkingFloor> {
        const createFloor: ParkingFloor = new ParkingFloor();
        createFloor.name = req.name;
        createFloor.parking = parkingData;

        const floor: ParkingFloor = await this.floorRepo.create({ ...createFloor });
        return this.floorRepo.save(floor);
    }
}
