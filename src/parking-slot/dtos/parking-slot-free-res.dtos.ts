import { ParkingSlotType } from "../../dtos/parking-slot-type.dto"

export class ParkingSlotFreeResponse {
    slotId: number
    slotName: string
    slotType: ParkingSlotType
    floorName: string
}