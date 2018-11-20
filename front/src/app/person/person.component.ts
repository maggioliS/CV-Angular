import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, filter, flatMap, tap } from 'rxjs/operators';
import { Person } from '../shared/interfaces/person';
import { PeopleService } from '../shared/services/people.service';
import { merge } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nwt-person',
  templateUrl: './person.component.html',
  styleUrls: [ './person.component.css' ]
})
export class PersonComponent implements OnInit {
  // private property to store person value
  private _person: Person;
  // private property to store flag to know if it's a person
  private _isPerson: boolean;

  /**
   * Component constructor
   */
  constructor(private _peopleService: PeopleService, private _route: ActivatedRoute) {
    this._person = {} as Person;
    this._isPerson = false;
  }

  /**
   * Returns private property _person
   */
  get person(): Person {
    return this._person;
  }

  /**
   * Returns flag to know if we are on a profile or on HP
   */
  get isPerson(): boolean {
    return this._isPerson;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    merge(
      this._route.params.pipe(
        filter(params => !!params['id']),
        flatMap(params => this._peopleService.fetchOne(params['id'])),
        tap(_ => this._isPerson = true)
      )
    )
      .subscribe((person: any) => this._person = person);
  }
}
