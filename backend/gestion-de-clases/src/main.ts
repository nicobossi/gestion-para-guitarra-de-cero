import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config';
import { RepeatEntityFilter } from './shared/infraestructure/exception-filters/db-exception/repeat-entity/repeat-entity.filter';
import { TimeoutFilterException } from './shared/infraestructure/exception-filters/db-exception/timeout/timeout.filter';
import { DisconectFilter } from './shared/infraestructure/exception-filters/db-exception/disconect/disconect.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(
        new RepeatEntityFilter(),
        new DisconectFilter(),
        new TimeoutFilterException(),
    );
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
