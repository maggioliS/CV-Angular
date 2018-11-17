import { FormControl } from '@angular/forms';

export class CustomValidators {

  /**
   * Function to control email with custom validator
   */
  static googleEmail(control: FormControl) {
    // returns control
    return /^\w+\.\w+@gmail\.com$/.test(control.value) ? null : {
      googleEmail: true
    };
  }
}
