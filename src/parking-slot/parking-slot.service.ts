import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingFloor } from '../parking-floor/parking-floor.entity';
import { Repository } from 'typeorm';
import { ParkingSlot } from './parking-slot.entity';
import { ParkingSlotReq } from './dtos/parking-slot-req.dtos';
import { ParkingSlotFreeResponse } from './dtos/parking-slot-free-res.dtos';

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

    public async getOldAvailableSlot(): Promise<ParkingSlotFreeResponse> {
        const response = new ParkingSlotFreeResponse();
        const result = await this.slotRepo
            .createQueryBuilder('slot')
            .leftJoinAndSelect('slot.parkingFloor', 'floor')
            .select('slot.id', 'slotId')
            .addSelect('slot.name', 'slotName')
            .addSelect('slot.slot_type', 'slotType')
            .addSelect('floor.name', 'floorName')
            .where('slot.is_available = TRUE')
            .andWhere('floor.parking_id = 1')
            .orderBy('slot.updated_datetime', 'ASC');

            const totalRecord = await result.getCount();
            const slotResonse = await result.getRawMany();

            if(totalRecord > 0){
                response.slotId = slotResonse[0].slotId;
                response.slotName = slotResonse[0].slotName;
                response.slotType = slotResonse[0].slotType;
                response.floorName = slotResonse[0].floorName;
            }
            
        return response;
    }
}
