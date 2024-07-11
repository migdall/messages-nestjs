import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      { id: 1, content: 'Message 1' },
      { id: 2, content: 'Message 2' },
    ];
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return `Create a message with content: ${createMessageDto.content}`;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return `Get a message with id ${id}`;
  }
}
