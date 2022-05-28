import { Module } from '@nestjs/common';
import { ParkingFloorService } from './parking-floor.service';

@Module({
  providers: [ParkingFloorService],
})
export class ParkingFloorModule {}
