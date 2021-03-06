import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { ParkingSlotType } from "../../dtos/parking-slot-type.dto";

export class ParkingSlotReq {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEnum(ParkingSlotType)
    type: ParkingSlotType;

    @IsOptional()
    isAvailable: boolean = true;

    @IsNotEmpty()
    floorId: number;
}