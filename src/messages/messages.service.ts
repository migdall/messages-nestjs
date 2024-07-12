import { Injectable } from '@nestjs/common';
import { MessagesRepository, Message } from './messages.repository';

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor(repo: MessagesRepository) {
    this.messagesRepo = repo;
  }

  async findOne(id: string): Promise<Message> {
    let returnedMessage: Message;
    try {
      returnedMessage = await this.messagesRepo.findOne(id);
    } catch (error) {
      console.log(error);
    }
    return returnedMessage;
  }

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async create(message: string) {
    return await this.messagesRepo.create(message);
  }
}
