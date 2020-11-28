import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from '@nestjs/microservices';
import {Logger} from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.TCP,
        options: {
            host: "127.0.0.1",
            port: 8081
        }
    });

    app.listen(() => {
        logger.log('Users microservice is listening at port 8081...');
    });
}

bootstrap();
