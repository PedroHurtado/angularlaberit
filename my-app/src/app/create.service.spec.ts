import { TestBed } from '@angular/core/testing';

import { CreateService } from './create.service';

interface Test{

}
describe('CreateService', () => {
  let service: CreateService<Test>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateService<Test>);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
