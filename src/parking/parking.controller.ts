import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParkingSlotService } from '../parking-slot/parking-slot.service';
import { ParkingFloorReq } from '../parking-floor/dtos/parking-floor-req.dtos';
import { ParkingFloorService } from '../parking-floor/parking-floor.service';
import { ParkingRequest } from './dtos/parking-req.dtos';
import { ParkingService } from './parking.service';
import { ParkingSlotReq } from '../parking-slot/dtos/parking-slot-req.dtos';

@Controller('admin')
export class ParkingController {
    constructor(
        private parkingService: ParkingService,
        private floorService: ParkingFloorService,
        private slotService: ParkingSlotService
    ) { }

    @Get('parkings')
    findAllParking() {
        return this.parkingService.findAll();
    }

    @Post('parkings')
    createParking(@Body() req: ParkingRequest) {
        return this.parkingService.create(req);
    }

    @Get('floors')
    findAllFloor() {
        return this.floorService.findAll();
    }

    @Post('floors')
    createFloor(@Body() req: ParkingFloorReq) { 
        return this.parkingService.createFloor(req);
    }

    @Get('slots')
    findAllSlot() {
        return this.slotService.findAll();
    }

    @Post('slots')
    createSlot(@Body() req: ParkingSlotReq) { 
        return this.floorService.createSlot(req);
    }

    @Get('floors/free/slots')
    getFreeSlotonFloor() {
        return this.floorService.findSlotAvailableOnFloor();
    }
}
