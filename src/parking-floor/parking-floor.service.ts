import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parking } from '../parking/parking.entity';
import { Repository } from 'typeorm';
import { ParkingFloorReq } from './dtos/parking-floor-req.dtos';
import { ParkingFloor } from './parking-floor.entity';
import { ParkingSlotService } from '../parking-slot/parking-slot.service';
import { ParkingSlotReq } from 'src/parking-slot/dtos/parking-slot-req.dtos';

@Injectable()
export class ParkingFloorService {
    constructor(@InjectRepository(
        ParkingFloor) private floorRepo: Repository<ParkingFloor>,
        private slotService: ParkingSlotService
    ) { }

    public async findAll(): Promise<ParkingFloor[]> {
        const result = await this.floorRepo.find({
            order: { createdDateTime: "DESC" },
            relations: ['parkingSlots']
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

    public async createSlot(req: ParkingSlotReq): Promise<any> {
        const floorRes = await this.floorRepo.find({
            where: { id: req.floorId }
        });
        if (floorRes.length > 0) {
            return this.slotService.create(req, floorRes[0]);
        }
        else throw new NotFoundException(404, "not found parking id");
    }

    public async findSlotAvailableOnFloor(): Promise<any> {
        const result = await this.floorRepo
        .createQueryBuilder('floor')
        .leftJoinAndSelect('floor.parkingSlots', 'slot')
        .select('floor.name','floorName')
        .addSelect('COUNT(slot)', 'availableSlot')
        .where('floor.parking_id = 1')
        .andWhere('slot.is_available = TRUE')
        .groupBy('floor.id');

        return result.getRawMany();
    }
}
