import { Injectable, Logger } from '@nestjs/common';
import { Message } from 'discord.js';

@Injectable()
export class CommandService {
  constructor() {}

  // `handleCommand` method handles all incoming commands
  async handleCommand(
    command: string,
    args: any[],
    message: Message,
  ): Promise<string | void> {
    switch (command.toLowerCase()) {
      case 'ping':
        return this.handlePingCommand(message);
      // Add more cases here for other commands
      default:
        return `Unknown command: ${command}`;
    }
  }

  private handlePingCommand(message: Message): string {
    return 'Pong!';
  }
}
