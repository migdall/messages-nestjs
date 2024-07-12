import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

export interface Message {
  id: string;
  message: string;
}

@Injectable()
export class MessagesRepository {
  async findOne(id: string): Promise<Message> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    if (!messages[id]) {
      throw new Error('Message not found');
    }
    return messages[id];
  }

  async findAll(): Promise<Message[]> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(message: string): Promise<Message> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = uuidv4();
    messages[id] = { id, message };

    await writeFile('messages.json', JSON.stringify(messages));
    return messages[id];
  }
}
