import { Catch } from '@nestjs/common';
import { StudentNotFound } from '../../../../shared/application/exceptions/student-not-found';
import { ModelFilterException } from '../../../../shared/infraestructure/exception-filters/model/model.filter';
import { FilterExceptionModelData } from '../../../../shared/infraestructure/exception-filters/model/model-filter-error-data';

@Catch(StudentNotFound)
export class StudentNotFoundFilter extends ModelFilterException<StudentNotFound> {
    protected responseData(): FilterExceptionModelData {
        return {
            status: 404,
        };
    }
}
