import { IsEnum, isNotEmpty, IsNotEmpty, IsOptional } from "class-validator";
import { VehicleType } from "../../dtos/vehicle-type.dto";

export class TicketRequest{

    @IsNotEmpty()
    entryTime: string

    @IsNotEmpty()
    vehicleTag: string

    @IsNotEmpty()
    @IsEnum(VehicleType)
    vehicleType: VehicleType
}