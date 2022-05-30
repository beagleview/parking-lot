import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingSlot } from 'src/parking-slot/parking-slot.entity';
import { ParkingSlotService } from 'src/parking-slot/parking-slot.service';
import { VehicleRequest } from 'src/vehicle/dtos/vehicle-req.dto';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { Repository } from 'typeorm';
import { TicketRequest } from './dtos/ticket-req.dtos';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket) private ticketRepo: Repository<Ticket>,
        private vehicleService: VehicleService,
        private slotService: ParkingSlotService
    ) { }

    public async create(req: TicketRequest): Promise<Ticket> {
        const slotFreeRes = await this.slotService.getOldAvailableSlot();
        const slotReq = new ParkingSlot();
        slotReq.id = slotFreeRes.slotId
    
        const vehicleReq: VehicleRequest = new VehicleRequest();
        vehicleReq.tag = req.vehicleTag;
        vehicleReq.type = req.vehicleType;

        const createVehicleRes = await this.vehicleService.create(vehicleReq);

        
        const createTicket = new Ticket();
        createTicket.entryTime = req.entryTime;
        createTicket.parkingSlot = slotReq;
        createTicket.vehicle = createVehicleRes;

        const ticket: Ticket = await this.ticketRepo.create({ ...createTicket });
        return this.ticketRepo.save(ticket);
    }
}
