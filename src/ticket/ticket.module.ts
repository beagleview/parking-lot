import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Ticket } from './ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingSlotModule } from '../parking-slot/parking-slot.module';
import { VehicleModule } from '../vehicle/vehicle.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]),ParkingSlotModule, VehicleModule],
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketModule { }
