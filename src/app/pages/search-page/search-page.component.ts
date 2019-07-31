import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { Observable } from 'rxjs';
import { FixturesService } from 'src/app/services/fixtures.service';
import { ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs/operators'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchResults$: MatTableDataSource<Fixture[]>;

  loading : boolean;

  datasource : any = [];

  displayedColumns: string[] = ['fixtureName', 'kickoff', 'venue'];

  constructor(private fixturesService: FixturesService) { }

  ngOnInit() {
    debugger
    this.loading = false;
  }

  applyFilter(filterValue: string) {

    this.loading = true;
    this.fixturesService.getFixtures(filterValue).subscribe(result => {
      debugger
      this.loading = false;
      this.searchResults$ = new MatTableDataSource(result);
      this.datasource.length = this.searchResults$.data.length;
    });
  }

}
