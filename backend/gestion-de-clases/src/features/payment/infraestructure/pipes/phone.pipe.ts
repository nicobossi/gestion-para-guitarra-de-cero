import {
    ArgumentMetadata,
    BadRequestException,
    PipeTransform,
} from '@nestjs/common';

export class PhonePipe implements PipeTransform<string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(value: string, _metadata: ArgumentMetadata) {
        if (value.length != 10) {
            throw new BadRequestException(
                'El número debe tener excatamente 10 caracteres',
            );
        }
        return '+54' + value;
    }
}
