import { Catch } from '@nestjs/common';
import { StudentNotFound } from '../../../../shared/application/exceptions/student-not-found';
import { ModelFilterException } from '../../../../shared/infraestructure/exception-filters/model/model.filter';

@Catch(StudentNotFound)
export class StudentNotFoundFilter extends ModelFilterException<StudentNotFound> {
    protected responseData() {
        return {
            status: 404,
            title: 'Student Not Found',
            cause: 'FULLNAME_NOT_EXIST',
            errors: [
                {
                    field: 'name',
                    motive: 'No existe el estudiante con el nombre dado',
                },
                {
                    field: 'secondName',
                    motive: 'No existe el estudiante con el segundo nombre dado',
                },
                {
                    field: 'surname',
                    motive: 'No existe el estudiante con el apellido dado',
                },
            ],
            message: 'No hay ningún estudiante con el nombre dado.',
        };
    }
}
