import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/@core/services/main.service';
import { FilterDialogComponent } from '../../dialogs/filter-dialog/filter-dialog.component';

@Component({
  selector: 'spacex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appliedFilterCount = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 575) {
      this.dialog.closeAll();
    }
  }

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.route
    .queryParams
    .subscribe(params => {
      if (params) {
        this.appliedFilterCount = Object.keys(params).length;
      }
    });
  }

  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
