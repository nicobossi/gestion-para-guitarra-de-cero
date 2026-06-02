import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config';
import { RepeatEntityFilter } from './shared/infraestructure/exception-filters/repeat-entity/repeat-entity.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new RepeatEntityFilter());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
