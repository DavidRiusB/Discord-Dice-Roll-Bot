import { REST } from 'discord.js';
import { Routes } from 'discord-api-types/v9';
import attackCommand from './attackCommand';

const commands = [attackCommand.toJSON()];

export const registerCommands = async (appId: string, token: string) => {
  const rest = new REST({ version: '10' }).setToken(token);

  try {
    console.log('Registering global commands...');
    await rest.put(Routes.applicationCommands(appId), { body: commands });
    console.log('Global commands registered successfully');
  } catch (error) {
    console.error('Error registering global commands:', error);
  }
};
