import { Body, Controller, Post } from '@nestjs/common';
import { TicketRequest } from './dtos/ticket-req.dtos';
import { TicketService } from './ticket.service';

@Controller('tickets')
export class TicketController {
    constructor(
        private ticketService: TicketService
    ){}

    @Post()
    findAllParking(@Body() req:TicketRequest) {
        return this.ticketService.create(req);
    }
}
