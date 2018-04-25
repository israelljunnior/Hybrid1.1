import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage} from '../result/result';
import { MenuController} from 'ionic-angular';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Directive, HostListener, ElementRef } from '@angular/core';
import '../../../node_modules/google-translate-api/index.js';

import {AboutPage} from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {


  summForm: FormGroup;
  sTitle: AbstractControl;
  sText: AbstractControl;
  sLength: AbstractControl;

  @HostListener("input",["$event.target"])
  onInput(textArea:HTMLTextAreaElement):void{
    this.adjust();
  }


  constructor(public navCtrl: NavController, public menuCtrl:MenuController, formbuilder: FormBuilder, public element: ElementRef) {

      this.summForm = formbuilder.group({
        sTitle: ['',Validators.required],
        sText: ['',Validators.required],
        sLength: ['',Validators.required]
      });

      this.sTitle = this.summForm.controls['sTitle'];
      this.sText = this.summForm.controls['sText'];
      this.sLength = this.summForm.controls['sLength'];

  }

  adjust(): void {  //Procedimento para o textArea se ajustar automaticamente com o texto.
    let ta = this.element.nativeElement.querySelector("textarea");
    ta.style.overflow = 'hidden';
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  }


  nextPageWithData(){
    this.navCtrl.push(ResultPage,{
      paramTitle: this.sTitle.value,
      paramText: this.sText.value,
      paramLength: this.sLength.value
    })

  }


  goToAbout(){
    this.navCtrl.push(AboutPage);
  }


}
