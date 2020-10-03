// tslint:disable: variable-name

import { CONFIG } from '../app.constant';

export class LaunchFilters {
    public launch_success: string;
    public land_success: string;
    public limit: number;
    public launch_year: number;
    public offset: number;

    constructor(batch: number, offset?: number) {
        this.limit = batch;
        this.offset = offset || 0;
    }
}
