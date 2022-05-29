import { IsNotEmpty, IsOptional } from "class-validator";

export class ParkingRequest {
    @IsOptional()
    name: string;

    @IsOptional()
    description: string;
}