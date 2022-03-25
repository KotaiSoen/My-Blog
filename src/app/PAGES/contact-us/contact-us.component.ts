import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string= '';

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_hkrgpsp', 'template_4wi4qce', e.target as HTMLFormElement, '5n41wNUDqdMw4HnvM')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    this.name = '';
    this.email = '';
    this.message = '';

  }

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    alert('I am submitting form')
  }

}
