import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configurationApp from 'config/configuration-app';

@Module({
  imports: [
    /*
      envFilePath -> ruta del fichero .env
      load -> ficheros de configuracion
      isGlobal -> Puedes importar el servicio ConfigService en cualquier parte
    */
    ConfigModule.forRoot({
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      load: [configurationApp],
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
