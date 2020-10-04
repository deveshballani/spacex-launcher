import { of } from 'rxjs';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let router;
  let route;
  let mainService;

  beforeEach(() => {
    router = jasmine.createSpyObj('router', ['navigate']);
    route = {};
    mainService = jasmine.createSpyObj('mainService', ['setAppliedFilters']);
    component = new FiltersComponent(route, router, mainService);
  });

  it('Should initialize Filters Component', () => {
    expect(component).toBeTruthy();
  });

  it('Should change filters value - when selecting YEAR', () => {
    const mockEvent = {
      target: {
        tagName: 'SPAN',
        dataset: {
          year: ''
        },
        innerText: '2015'
      }
    };

    component.changeFilter(mockEvent);

    expect(component.appliedFilters.year).toBe(2015);
  });

  it('Should change filters value - when selecting Successful Landing as YES', () => {
    const mockEvent = {
      target: {
        tagName: 'SPAN',
        dataset: {
          land: ''
        },
        innerText: 'YES'
      }
    };

    component.changeFilter(mockEvent);

    expect(component.appliedFilters.landSuccess).toBe('true');
  });

  it('Should change filters value - when selecting Successful Landing as NO', () => {
    const mockEvent = {
      target: {
        tagName: 'SPAN',
        dataset: {
          land: ''
        },
        innerText: 'NO'
      }
    };

    component.changeFilter(mockEvent);

    expect(component.appliedFilters.landSuccess).toBe('false');
  });

  it('Should change filters value - when selecting Successful Launch as YES', () => {
    const mockEvent = {
      target: {
        tagName: 'SPAN',
        dataset: {
          launch: ''
        },
        innerText: 'YES'
      }
    };

    component.changeFilter(mockEvent);

    expect(component.appliedFilters.launchSuccess).toBe('true');
  });

  it('Should change filters value - when selecting Successful Launch as NO', () => {
    const mockEvent = {
      target: {
        tagName: 'SPAN',
        dataset: {
          launch: ''
        },
        innerText: 'NO'
      }
    };

    component.changeFilter(mockEvent);

    expect(component.appliedFilters.launchSuccess).toBe('false');
  });

  it('Should capture proper filters from URL', () => {
    route = {
      queryParams: of({
        year: 2015,
        landSuccess: 'true'
      })
    };
    component = new FiltersComponent(route, router, mainService);

    component.ngOnInit();

    expect(component.appliedFilters.year).toBe(2015);
    expect(component.appliedFilters.landSuccess).toBe('true');
  });

  it('Should FAIL to capture filter property when not present in URL', () => {
    route = {
      queryParams: of({
        year: 2015,
        landSuccess: 'true'
      })
    };
    component = new FiltersComponent(route, router, mainService);

    component.ngOnInit();

    expect(component.appliedFilters.year).toBe(2015);
    expect(component.appliedFilters.landSuccess).toBe('true');
    expect(component.appliedFilters.launchSuccess).toBeFalsy(); // Not there in route

  });
});
