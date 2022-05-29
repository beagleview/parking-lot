import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingFloor } from './parking-floor.entity';
import { ParkingFloorService } from './parking-floor.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingFloor])],
  providers: [ParkingFloorService],
  exports: [ParkingFloorService]
})
export class ParkingFloorModule { }
