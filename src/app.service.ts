import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  // Inyecto el servicio configService
  constructor(
    private configService: ConfigService
  ){
    // Mostramos las propiedades de los .env
    // Ejecuta `npm run start:dev` o `npm run start:prod` y veras que hay diferentes resultados.
    console.log(this.configService.get('config.property1'));
    console.log(this.configService.get('config.property2'));
    console.log(this.configService.get('config.property3'));
  }

  getHello(): string {
    return 'Hello World!';
  }
}
