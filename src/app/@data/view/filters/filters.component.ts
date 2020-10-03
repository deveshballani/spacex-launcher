import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/@core/services/main.service';
import { CONFIG } from '../../app.constant';
import { AppliedFilters } from '../../models/applied-filter';

@Component({
  selector: 'spacex-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {

  @Input()
  isPopup = false;

  appliedFilters = new AppliedFilters();
  yearFilters = [];
  routerSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.initFilterData();

    this.routerSubscription = this.route
    .queryParams
    .subscribe((params) => {
      if (params && Object.keys(params).length > 0) {
        Object.keys(params).forEach(key => {
          this.appliedFilters[key] = params[key];
        });
      }
      this.emmitChanges();
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  yearToggle(year) {
    if (this.appliedFilters.year) {
      if (this.appliedFilters.year === year.toString()) {
        year = undefined;
      }
    }
    this.appliedFilters.year = year;
    this.addFiltersAsQueryString();
  }

  launchStatusToggle(isLaunchSuccessFul) {
    if (this.appliedFilters.launchSuccess !== undefined) {
      if (this.appliedFilters.launchSuccess === isLaunchSuccessFul.toString()) {
        isLaunchSuccessFul = undefined;
      }
    }
    this.appliedFilters.launchSuccess = isLaunchSuccessFul;
    this.addFiltersAsQueryString();
  }

  landStatusToggle(isLandSuccessful) {
    if (this.appliedFilters.landSuccess !== undefined) {
      if (this.appliedFilters.landSuccess === isLandSuccessful.toString()) {
        isLandSuccessful = undefined;
      }
    }
    this.appliedFilters.landSuccess = isLandSuccessful;
    this.addFiltersAsQueryString();
  }

  private initFilterData() {
    const startingYear = CONFIG.STARTING_YEAR;
    const currentYear = new Date().getFullYear();
    let count = 0;
    let arr = [];
    for (let year = startingYear ; year <= currentYear ; year++) {
      count++;
      arr.push(year);
      if (count === 2) {
        this.yearFilters.push(JSON.parse(JSON.stringify(arr)));
        arr = [];
        count = 0;
      }
    }
    if (count !== 0) {
      this.yearFilters.push(arr);
    }
  }

  private emmitChanges() {
    this.mainService.setAppliedFilters(this.appliedFilters);

  }

  private addFiltersAsQueryString() {
    this.router.navigate([], {
      queryParams: this.appliedFilters
    });
  }
}
