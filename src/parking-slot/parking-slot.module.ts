import { Module } from '@nestjs/common';
import { ParkingSlotService } from './parking-slot.service';

@Module({
  providers: [ParkingSlotService],
  exports:[ParkingSlotService]
})
export class ParkingSlotModule {}
