import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { RepeatEntityFilter } from './shared/infraestructure/exception-filters/db-exception/repeat-entity/repeat-entity.filter';
import { TimeoutFilterException } from './shared/infraestructure/exception-filters/db-exception/timeout/timeout.filter';
import { DisconectFilter } from './shared/infraestructure/exception-filters/db-exception/disconect/disconect.filter';
import { FailCredentialsFilter } from './shared/infraestructure/exception-filters/db-exception/fail-credentials/fail-credentials.filter';
import { ForbiddenFilter } from './shared/infraestructure/exception-filters/authorization/forbidden/forbidden.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(
        new RepeatEntityFilter(),
        new DisconectFilter(),
        new TimeoutFilterException(),
        new FailCredentialsFilter(),
        new ForbiddenFilter(),
    );
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
