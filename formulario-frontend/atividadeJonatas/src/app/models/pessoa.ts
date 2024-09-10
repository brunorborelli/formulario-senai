import { FormGroup } from '@angular/forms';

export class Pessoa {
  id?: any;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  constructor(formPessoa: FormGroup) {
    this.id = formPessoa.value.id;
    this.firstName = formPessoa.value.firstName;
    this.lastName = formPessoa.value.lastName;
    this.email = formPessoa.value.email;
    this.phone = formPessoa.value.phone;
  }
}
