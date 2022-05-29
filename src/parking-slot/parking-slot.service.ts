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

        const slot: ParkingSlot = await this.slotRepo.create({ ...createSlot });
        return this.slotRepo.save(slot);
    }
}
