import { RepeatEntityFilter } from './repeat-entity.filter';

describe('RepeatEntityFilter', () => {
    let repeatFilter: RepeatEntityFilter;

    beforeEach(() => {
        repeatFilter = new RepeatEntityFilter();
    });
    it('should be defined', () => {
        expect(repeatFilter).toBeDefined();
    });
});
