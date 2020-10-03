import { Injectable } from '@angular/core';
import { LaunchFilters } from 'src/app/@data/models/launch-filters';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { END_POINTS } from '../../@data/api-endpoints';
import { BehaviorSubject, Observable, Subscription, SubscriptionLike } from 'rxjs';
import { AppliedFilters } from 'src/app/@data/models/applied-filter';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private appliedFiltersBS = new BehaviorSubject<AppliedFilters>(undefined);
  public appliedFilters$ = this.appliedFiltersBS.asObservable();

  constructor(
    private apiService: ApiService
  ) { }

  getAllLaunchProjects(filters: LaunchFilters) {
    const api = this.getAPI(END_POINTS.LAUNCHES);
    return this.apiService.apiGETWithParameters(api, filters);
  }

  setAppliedFilters(appliedFilters: AppliedFilters) {
    this.appliedFiltersBS.next(appliedFilters);
  }

  private getAPI(apiEndPoints: string) {
    return environment.uri + apiEndPoints;
  }
}
