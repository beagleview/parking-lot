import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingSlotModule } from '../parking-slot/parking-slot.module';
import { ParkingFloor } from './parking-floor.entity';
import { ParkingFloorService } from './parking-floor.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingFloor]), ParkingSlotModule],
  providers: [ParkingFloorService],
  exports: [ParkingFloorService]
})
export class ParkingFloorModule { }
