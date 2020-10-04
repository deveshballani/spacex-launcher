import { fakeAsync, tick } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { MainService } from 'src/app/@core/services/main.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let mainService: any;

    beforeEach(() => {
        mainService = jasmine.createSpyObj('mainService', ['getAllLaunchProjects']);
        mainService.getAllLaunchProjects.and.returnValue(of([
            {
                name: 'mocked-launch-program-1'
            },
            {
                name: 'mocked-launch-program-1'
            }
        ]));
        component = new HomeComponent(mainService);
    });

    it('Should initialize home component', () => {
        expect(component).toBeTruthy();
    });

    it('Should fetch the data when filters change',  fakeAsync(() => {
        const mainServiceWithMock = jasmine.createSpyObj('mainService', ['getAllLaunchProjects']);
        mainServiceWithMock.getAllLaunchProjects.and.returnValue(of([
            {
                name: 'mocked-launch-program-1'
            },
            {
                name: 'mocked-launch-program-1'
            }
        ]));

        mainServiceWithMock.appliedFilters$ = new BehaviorSubject({
            year: 2017,
            landSuccess: undefined,
            launchSuccess: 'false'
        });

        component = new HomeComponent(mainServiceWithMock);

        component.ngOnInit();
        tick(3000);

        expect(mainServiceWithMock.appliedFilters$).toBeTruthy();
        expect(component.appliedFilters.year).toBe(2017);
        expect(component.appliedFilters.launchSuccess).toBe('false');
        expect(component.isLoading).toBe(false); // post loading condition
    }));
});
