import { Lesson } from '../lesson/lesson';
import { IncomerState } from './incomer-state';
import { RenewState } from './renew-state';
import { StudentState } from './student-state';

export class StateProvider {
    static provide(lessons?: Lesson[]): StudentState {
        return !lessons ? new IncomerState() : new RenewState();
    }
}
