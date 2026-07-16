import { Catch } from '@nestjs/common';
import { StudentsWithSameFullname } from '../../../../shared/application/exceptions/students-with-same-fullname';
import { ModelFilterException } from '../../../../shared/infraestructure/exception-filters/model/model.filter';
import { FilterExceptionModelData } from '../../../../shared/infraestructure/exception-filters/model/model-filter-error-data';

@Catch(StudentsWithSameFullname)
export class StudentsWithSameFullnameFilter extends ModelFilterException<StudentsWithSameFullname> {
    protected responseData(): FilterExceptionModelData {
        return {
            status: 409,
        };
    }
}
