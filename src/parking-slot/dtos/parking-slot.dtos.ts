import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { ParkingSlotType } from "src/dtos/parking-slot-type.dto";

export class ParkingSlotReq {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEnum(ParkingSlotType)
    type: ParkingSlotType;

    @IsNotEmpty()
    floorId: number;
}