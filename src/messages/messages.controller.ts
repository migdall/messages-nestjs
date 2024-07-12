import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor(service: MessagesService) {
    this.messagesService = service;
  }

  @Get()
  async listMessages() {
    return await this.messagesService.findAll();
  }

  @Post()
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return await this.messagesService.create(createMessageDto.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const result = await this.messagesService.findOne(id);
    if (!result) {
      return new NotFoundException('Message not found');
    }
    return result;
  }
}
