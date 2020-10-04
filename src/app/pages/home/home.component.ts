import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MainService } from 'src/app/@core/services/main.service';
import { LaunchFilters } from 'src/app/@data/models/launch-filters';
import { CONFIG } from 'src/app/@data/app.constant';
import { AppliedFilters } from 'src/app/@data/models/applied-filter';

@Component({
  selector: 'spacex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  launchDetails: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  offset = 0;
  finished = false;
  appliedFilters: AppliedFilters;
  isLoading = true;
  showSideFilter = true;
  previouslyAppliedFilters: AppliedFilters;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 575) {
     this.showSideFilter = false;
    } else {
      this.showSideFilter = true;
    }
  }

  constructor(
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.mainService.appliedFilters$
    .subscribe(appliedFilters => {
      if (appliedFilters) {
        this.onFilterChange(appliedFilters);
      }
    });
  }

  onScroll() {
    this.getLaunchesDetails();
  }

  private onFilterChange(appliedFilters: AppliedFilters) {
    if (!this.areSameFiltersAppliedInPreviousCall(appliedFilters)) {
      this.offset = 0;
      this.isLoading = true;
      this.launchDetails.next([]);
      this.appliedFilters = appliedFilters;
      this.getLaunchesDetails(appliedFilters);
    }
  }

  private getLaunchesDetails(appliedFilters?: AppliedFilters) {
    appliedFilters = JSON.parse(JSON.stringify(this.appliedFilters));
    const filters = this.getExactFilterToBeApplied(appliedFilters);
    this.isLoading = true;
    this.mainService.getAllLaunchProjects(filters)
    .subscribe((launches: any[]) => {
      this.previouslyAppliedFilters = appliedFilters;
      const newLaunches = launches.slice(0, CONFIG.MIN_BATCH_SIZE);
      const currentLaunches = this.launchDetails.getValue();
      this.offset += launches.length;
      this.isLoading = false;
      this.launchDetails.next(currentLaunches.concat(newLaunches));
    });
  }

  private getExactFilterToBeApplied(appliedFilters: AppliedFilters) {
    const filters = new LaunchFilters(CONFIG.MIN_BATCH_SIZE, this.offset);
    if (appliedFilters && Object.keys(appliedFilters).length > 0) {
      if (appliedFilters.landSuccess !== undefined) {
        filters.land_success = appliedFilters.landSuccess;
      }
      if (appliedFilters.launchSuccess !== undefined) {
        filters.launch_success = appliedFilters.launchSuccess;
      }
      if (appliedFilters.year !== undefined) {
        filters.launch_year = appliedFilters.year;
      }
    }
    return filters;
  }

  private areSameFiltersAppliedInPreviousCall(appliedFilters: AppliedFilters) {
    if (this.previouslyAppliedFilters) {
      return this.previouslyAppliedFilters.year === appliedFilters.year
      && this.previouslyAppliedFilters.landSuccess === appliedFilters.landSuccess
      && this.previouslyAppliedFilters.launchSuccess === appliedFilters.launchSuccess;
    } else {
      return false;
    }
  }
}
