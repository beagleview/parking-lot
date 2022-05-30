import { IsEnum, IsNotEmpty } from "class-validator";
import { VehicleType } from "src/dtos/vehicle-type.dto";

export class VehicleRequest {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEnum(VehicleType)
    type: VehicleType;
}