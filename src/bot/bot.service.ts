import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Client, GatewayIntentBits, Message } from 'discord.js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BotService implements OnModuleInit {
  private readonly client: Client;
  private readonly logger = new Logger(BotService.name);

  constructor(private configService: ConfigService) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
  }

  async onModuleInit() {
    const token = this.configService.get<string>('DISCORD_TOKEN');
    if (!token) {
      throw new Error('Discord token not provided!');
    }

    try {
      await this.client.login(token);
      this.logger.log('Bot logged in successfully');
      this.registerEventListeners();
    } catch (error) {
      this.logger.log('Failed to log in to Discord', error);
    }

    this.client.on('messageCreate', (message) => {
      if (message.content === '!ping') {
        message.reply('Pong!');
      }
    });
  }
  // Registering all bot event listeners here
  private registerEventListeners() {
    this.client.on('ready', () => {
      this.logger.log(`Logged in as ${this.client.user?.tag}`);
    });
    this.client.on('messageCreate', (message) => this.handleMessage(message));
  }

  // Handle incoming messages
  private handleMessage(message: Message) {
    if (message.author.bot) return;

    const [command, ...args] = message.content.split(' ');
    switch (command) {
      case '!ping':
        this.handlePingCommand(message);
        break;
      default:
        this.logger.log(`Unknown command: ${command}`);
    }
  }
  private handlePingCommand(message: Message) {
    message.reply('Pong!');
  }
}
