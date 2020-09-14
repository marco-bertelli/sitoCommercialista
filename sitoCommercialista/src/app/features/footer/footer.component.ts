import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators, FormControl } from '@angular/forms';
import { MyHttpServiceService } from 'src/app/services/my-http-service.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  feedform:FormGroup;
  privacyAccettata=false;

  constructor(private fb: FormBuilder,private myHttpService: MyHttpServiceService) {
    this.feedform = this.fb.group({
      nome: '',
      cognome: '',
      genere:'',
      email:'',
      telefono:'',
      commenti:'',
      privacy: new FormControl('', Validators.required),
    });
   }

   onSubmit(contactForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.myHttpService.invia('https://formspree.io/mwkngpoo',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            window.alert("invio effettuato");
            console.log(response);
          }
        );
    }
  }
  get privacy() { return this.feedform.get('privacy'); }
  ngOnInit(): void {
  }
accetta(){
  this.privacyAccettata=!this.privacyAccettata;
}
}
