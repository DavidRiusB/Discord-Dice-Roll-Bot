import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Client, GatewayIntentBits, Message } from 'discord.js';
import { ConfigService } from '@nestjs/config';
import { CommandService } from 'src/command/command.service';

@Injectable()
export class BotService implements OnModuleInit {
  private readonly client: Client;
  private readonly logger = new Logger(BotService.name);

  constructor(
    private configService: ConfigService,
    private commandService: CommandService,
  ) {
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
  }
  // Registering all bot event listeners here
  private registerEventListeners() {
    this.client.on('ready', () => {
      this.logger.log(`Logged in as ${this.client.user?.tag}`);
    });
    this.client.on('messageCreate', (message) => this.handleMessage(message));
  }

  // Handle incoming messages
  private async handleMessage(message: Message) {
    if (message.author.bot) return;

    if (message.content.startsWith('!')) {
      const [command, ...args] = message.content.slice(1).split(' ');

      const response = await this.commandService.handleCommand(
        command,
        args,
        message,
      );

      if (response) {
        message.reply(response);
      }
    }
  }
}