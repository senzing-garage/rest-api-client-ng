import { TestBed } from '@angular/core/testing';

import { EntityGraphService } from './entityGraph.service';
import { ApiModule } from '../api.module';
import { Configuration } from '../configuration';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
//
describe('EntityGraphService', () => {
    const confFactory = () => {
        return new Configuration({ basePath: '/'});
    }
    beforeEach(() => TestBed.configureTestingModule({
    imports: [ApiModule.forRoot(confFactory)],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}));

    it('should be created', () => {
        const service: EntityGraphService = TestBed.get(EntityGraphService);
        expect(service).toBeTruthy();
    });
});
