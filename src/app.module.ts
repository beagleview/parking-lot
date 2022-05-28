import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingModule } from './parking/parking.module';
import { ParkingSlotModule } from './parking-slot/parking-slot.module';
import { TicketModule } from './ticket/ticket.module';
import { ParkingFloorModule } from './parking-floor/parking-floor.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [ParkingModule, ParkingSlotModule, TicketModule, ParkingFloorModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
