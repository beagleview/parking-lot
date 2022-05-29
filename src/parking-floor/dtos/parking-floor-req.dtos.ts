import { IsNotEmpty, IsOptional } from "class-validator";

export class ParkingFloorReq{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    parkingId: number;
}