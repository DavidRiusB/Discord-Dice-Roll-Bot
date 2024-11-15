import { Module } from '@nestjs/common';
import { SummonService } from './summon.service';

@Module({
  providers: [SummonService]
})
export class SummonModule {}
