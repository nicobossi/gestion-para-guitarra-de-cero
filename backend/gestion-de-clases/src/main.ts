import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { RepeatEntityFilter } from './shared/infraestructure/exception-filters/db-exception/repeat-entity/repeat-entity.filter';
import { TimeoutFilter } from './shared/infraestructure/exception-filters/db-exception/timeout/timeout.filter';
import { DisconectFilter } from './shared/infraestructure/exception-filters/db-exception/disconect/disconect.filter';
import { FailCredentialsFilter } from './shared/infraestructure/exception-filters/db-exception/fail-credentials/fail-credentials.filter';
import { ForbiddenFilter } from './shared/infraestructure/exception-filters/authorization/forbidden/forbidden.filter';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundFilter } from './shared/infraestructure/exception-filters/db-exception/not-found/not-found.filter';
import { InvalidInserErrorFilter } from './shared/infraestructure/exception-filters/db-exception/invalid-insert-error/invalid-insert-error.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(
        new RepeatEntityFilter(),
        new InvalidInserErrorFilter(),
        new DisconectFilter(),
        new TimeoutFilter(),
        new FailCredentialsFilter(),
        new ForbiddenFilter(),
        new NotFoundFilter(),
    );
    app.enableCors({
        origin: 'http://localhost:5173',
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
