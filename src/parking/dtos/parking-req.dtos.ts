import { IsNotEmpty, IsOptional } from "class-validator";

export class ParkingRequest {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    description: string;
}