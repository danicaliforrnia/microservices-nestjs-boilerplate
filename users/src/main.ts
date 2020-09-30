import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
    await NestFactory.createMicroservice(AppModule, {
        transport: Transport.TCP,
        options: {
            host: "127.0.0.1",
            port: 8080
        }
    });
}

bootstrap();
