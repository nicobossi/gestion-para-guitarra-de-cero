import { Catch } from '@nestjs/common';
import { StudentsWithSameFullname } from '../../../../shared/application/exceptions/students-with-same-fullname';
import { ModelFilterException } from '../../../../shared/infraestructure/exception-filters/model/model.filter';
@Catch(StudentsWithSameFullname)
export class StudentsWithSameFullnameFilter extends ModelFilterException<StudentsWithSameFullname> {
    protected responseData() {
        return {
            status: 409,
            title: 'Repeat Full Name',
            cause: 'STUDENT_WITH_SAME_NAME',
            message: 'Existen varios estudiantes con el mismo nombre.',
        };
    }
}
