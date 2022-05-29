import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParkingFloorReq } from 'src/parking-floor/dtos/parking-floor-req.dtos';
import { ParkingFloorService } from '../parking-floor/parking-floor.service';
import { ParkingRequest } from './dtos/parking-req.dtos';
import { ParkingService } from './parking.service';

@Controller('admin')
export class ParkingController {
    constructor(
        private parkingService: ParkingService,
        private floorService: ParkingFloorService
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
        return this.floorService.create(req);
    }
}
