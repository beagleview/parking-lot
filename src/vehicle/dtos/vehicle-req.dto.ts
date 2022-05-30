import { IsEnum, IsNotEmpty } from "class-validator";
import { VehicleType } from "../../dtos/vehicle-type.dto";

export class VehicleRequest {
    @IsNotEmpty()
    tag: string;

    @IsNotEmpty()
    @IsEnum(VehicleType)
    type: VehicleType;
}