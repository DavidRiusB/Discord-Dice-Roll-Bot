import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CharacterModule } from './character/character.module';
import { BotModule } from './bot/bot.module';
import { CommandModule } from './command/command.module';
import { DiceModule } from './dice/dice.module';
import { UserModule } from './user/user.module';
import { WeaponModule } from './weapon/weapon.module';
import { SkillsModule } from './skills/skills.module';
import { InventoryModule } from './inventory/inventory.module';
import { SpellModule } from './spell/spell.module';
import { SummonModule } from './summon/summon.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CharacterModule,
    BotModule,
    CommandModule,
    DiceModule,
    UserModule,
    WeaponModule,
    SkillsModule,
    InventoryModule,
    SpellModule,
    SummonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
