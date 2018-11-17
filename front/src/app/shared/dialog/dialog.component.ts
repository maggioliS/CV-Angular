import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Person } from '../interfaces/person';

@Component({
  selector: 'nwt-add-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.css' ]
})
export class DialogComponent implements OnInit {

  /**
   * Component constructor
   */
  constructor(private _dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) private _person: Person) {
  }

  /**
   * Returns person passed in dialog open
   */
  get person(): Person {
    return this._person;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to cancel the process and close the modal
   */
  onCancel() {
    this._dialogRef.close();
  }

  /**
   * Function to close the modal and send person to parent
   */
  onSave(person: Person) {
    this._dialogRef.close(person);
  }
}
