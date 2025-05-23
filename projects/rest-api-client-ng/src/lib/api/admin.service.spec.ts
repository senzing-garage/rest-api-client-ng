import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { ApiModule } from '../api.module';
import { Configuration } from '../configuration';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
//
describe('AdminService', () => {
    const confFactory = () => {
        return new Configuration({ basePath: '/'});
    }
    beforeEach(() => TestBed.configureTestingModule({
    imports: [ApiModule.forRoot(confFactory)],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}));

    it('should be created', () => {
        const service: AdminService = TestBed.get(AdminService);
        expect(service).toBeTruthy();
    });
});
