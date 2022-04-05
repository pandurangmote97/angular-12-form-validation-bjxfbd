export class Validation {
  propName!: string;
  obj: any;
  isValid = false;
  isRequired = false;
  isTouched = false;
  isDuplicate = false;
  value: any;
}

class constraint {
  constructor() {
    this.validationObj = {};
  }
  validationObj: { [pName: string]: Validation };
  match(controlName: string, checkControlName: string) {}
  validate(skipUntouchedProps = false) {
    const objectKeys = Object.keys(User.prototype) as Array<keyof User>;
    console.log('key:', objectKeys);
  }
}

export class User extends constraint {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: number;
  country: any;
  email: string;
  phone: string;
}
