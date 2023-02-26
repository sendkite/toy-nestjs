import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { COFFEE_BRANDS } from './coffee.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    {
      provide: ConfigService,
      useClass: process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService,
    },
    { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
