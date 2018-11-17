import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { filter, flatMap, map } from 'rxjs/operators';
import { Person } from '../shared/interfaces/person';
import { PeopleService } from '../shared/services/people.service';

@Component({
  selector: 'nwt-update',
  templateUrl: './update.component.html',
  styleUrls: [ './update.component.css' ]
})
export class UpdateComponent implements OnInit {
  // private property to store dialog reference
  private _peopleDialog: MatDialogRef<DialogComponent>;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _peopleService: PeopleService, private _dialog: MatDialog) {
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._peopleService.fetchOne(id))
      )
      .subscribe((person: Person) => {
        this._peopleDialog = this._dialog.open(DialogComponent, {
          width: '500px',
          disableClose: true,
          data: person
        });

        // subscribe to afterClosed observable to set dialog status and do process
        this._peopleDialog.afterClosed()
          .pipe(
            filter(_ => !!_),
            flatMap(_ => this._peopleService.update(_))
          )
          .subscribe(null, null, () => this._router.navigate([ '/people' ]));
      });
  }
}
