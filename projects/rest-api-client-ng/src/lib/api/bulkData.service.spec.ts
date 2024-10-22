import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { BulkDataService } from './bulkData.service';
import { ApiModule } from '../api.module';
import { Configuration } from '../configuration';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
//
describe('BulkDataService', () => {
    const confFactory = () => {
        return new Configuration({ basePath: '/'});
    }
    beforeEach(() => TestBed.configureTestingModule({
    imports: [ApiModule.forRoot(confFactory)],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}));

    it('should be created', () => {
        const service: BulkDataService = TestBed.get(BulkDataService);
        expect(service).toBeTruthy();
    });
});