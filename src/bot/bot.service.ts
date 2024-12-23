import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Client, GatewayIntentBits, Interaction, Message } from 'discord.js';
import { ConfigService } from '@nestjs/config';
import { CommandService } from 'src/command/command.service';
import { registerCommands } from 'src/command/registerCommands';

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
    const appId = this.configService.get<string>('APP_ID');
    if (!token || !appId) {
      throw new Error('Discord token not provided!');
    }

    try {
      await this.client.login(token);
      this.logger.log('Bot logged in successfully');
      // Register global commands on startup
      await registerCommands(appId, token);

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

    this.client.on('interactionCreate', (interaction: Interaction) => {
      const discordUserId = interaction.user.id;

      // Check if it's a command interaction
      if (interaction.isCommand()) {
        const { commandName, options } = interaction;

        // Handle the command
        return this.commandService.handleCommand(
          discordUserId,
          commandName,
          options,
          interaction,
        );
      }

      // Check if it's a select menu interaction
      if (interaction.isStringSelectMenu()) {
        return this.commandService.handleSelecMenu(discordUserId, interaction);
      } else {
        return;
      }
    });
  }
}
