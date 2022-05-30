import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingFloor } from '../parking-floor/parking-floor.entity';
import { Repository } from 'typeorm';
import { ParkingSlot } from './parking-slot.entity';
import { ParkingSlotReq } from './dtos/parking-slot.dtos';

@Injectable()
export class ParkingSlotService {
    constructor(@InjectRepository(ParkingSlot) private slotRepo: Repository<ParkingSlot>) { }

    public async findAll(): Promise<ParkingSlot[]> {
        const result = await this.slotRepo.find({
            order: { createdDateTime: "DESC" }
        });
        return result;
    }

    public async create(req: ParkingSlotReq, floorData: ParkingFloor): Promise<ParkingSlot> {
        const createSlot: ParkingSlot = new ParkingSlot();
        createSlot.name = req.name;
        createSlot.slotType = req.type;
        createSlot.parkingFloor = floorData;
        createSlot.isAvailable = req.isAvailable;

        const slot: ParkingSlot = await this.slotRepo.create({ ...createSlot });
        return this.slotRepo.save(slot);
    }

    public async getAvailableSlot(): Promise<any> {
        const result = await this.slotRepo
            .createQueryBuilder('slot')
            .leftJoinAndSelect('floor.parkingFloor', 'floor')
            .select('slot.name', 'slotName')
            .addSelect('slot.type', 'slotType')
            .addSelect('floor.name', 'floorName')
            .where('slot.is_available = TRUE')
            .andWhere('floor.parking_id = 1')
            .orderBy('slot.id', 'ASC');

        return result.getRawMany();
    }
}
