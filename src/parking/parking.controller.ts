import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParkingRequest } from './dtos/parking-req.dtos';
import { ParkingService } from './parking.service';

@Controller('admin')
export class ParkingController {
    constructor(private parkingService: ParkingService) { }

    @Get('parkings')
    findAllParking(){
        return this.parkingService.findAll();
    }

    @Post('parkings')
    createParking(@Body() req: ParkingRequest){
        return this.parkingService.create(req);
    }
}
