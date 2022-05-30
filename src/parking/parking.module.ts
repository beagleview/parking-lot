import { Module } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parking } from './parking.entity';
import { ParkingFloorModule } from '../parking-floor/parking-floor.module';
import { ParkingSlotModule } from '../parking-slot/parking-slot.module';

@Module({
  imports:[TypeOrmModule.forFeature([Parking]), ParkingFloorModule, ParkingSlotModule],
  providers: [ParkingService],
  controllers: [ParkingController],
})
export class ParkingModule {}
