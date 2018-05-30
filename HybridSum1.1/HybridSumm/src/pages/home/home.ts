import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage} from '../result/result';
import { MenuController} from 'ionic-angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HostListener, ElementRef } from '@angular/core';
import { Nlp } from './methodsSummarizer/nlp';
import { GoogleObj, GoogleService } from './translate/google.services';


import {AboutPage} from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Nlp, GoogleService, GoogleObj]
  
})


export class HomePage {


  summForm: FormGroup;
  sTitle: AbstractControl;
  sText: AbstractControl;
  sLength: AbstractControl;
  sLanguage: string = ""

  public googleObj: GoogleObj = new GoogleObj();
  public textTranslated: boolean = false;

  @HostListener("input",["$event.target"])
  onInput(textArea:HTMLTextAreaElement):void{
    this.adjust();
  }


  constructor(public navCtrl: NavController, public menuCtrl:MenuController,
            formbuilder: FormBuilder, public element: ElementRef, 
            public nlp: Nlp, private _google: GoogleService) {

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

    var resultText = this.sText.value;
    var resultTitle = this.sTitle.value;
    var resultLength = this.sLength.value;

    this.googleObj.q = resultText;
    this._google.detect(this.googleObj).subscribe(
      (res: any) => {
        let jsonObj: any[] = res.data.detections[0];
        if(jsonObj[0].confidence >= 0.4) {
        this.sLanguage = jsonObj[0].language;

        if(this.sLanguage == "en" ||
          this.sLanguage == "pt" ||
          this.sLanguage == "es"){
            console.log("it doesn't need to be translated")
            this.nlp.eraseArrayObjectSentence()
            this.nlp.eraseArrayObjectWord()
            this.nlp.nlp(resultTitle, resultText, resultLength)
            resultText = this.nlp.getTextSummarizer()
            this.navCtrl.push(ResultPage,{
              paramTitle: resultTitle,
              paramText: resultText,
              paramLength: resultLength,
              paramLanguage: this.sLanguage
          })
        
        } else {
        
        this.googleObj.source = this.sLanguage
        this._google.translate(this.googleObj).subscribe(
        (res: any) => {

          resultText = res.data.translations[0].translatedText;
          this.textTranslated = true
          this.googleObj.q = resultTitle
          this._google.translate(this.googleObj).subscribe(
            (res: any) => {
              resultTitle = res.data.translations[0].translatedText;
    
              console.log('Summary Text Sucess.');
              this.nlp.eraseArrayObjectSentence()
              this.nlp.eraseArrayObjectWord()
              
              this.nlp.nlp(resultTitle, resultText, resultLength)
              resultText = this.nlp.getTextSummarizer()
              
              if(this.textTranslated == true){
                this.googleObj.q = resultText
                this.googleObj.target = this.sLanguage
                this.googleObj.source = "en"
                this._google.translate(this.googleObj).subscribe(
                (res: any) => {
                  resultText = res.data.translations[0].translatedText;
                  console.log(resultText)
                  this.googleObj.q = resultTitle
                  this._google.translate(this.googleObj).subscribe(
                    (res: any) => {
                      resultTitle = res.data.translations[0].translatedText;
                      this.navCtrl.push(ResultPage,{
                        paramTitle: resultTitle,
                        paramText: resultText,
                        paramLength: resultLength,
                        paramLanguage: this.sLanguage
                      })
                    },
                    err => {
                      console.log(err);
                    })
                },
                err => {
                  console.log(err);
                }
              );
            }
    
            },
            err => {
              console.log(err);
            }
          );
    
            },
            err => {
              console.log(err);
            }
          );
    }
        
      }
    },
      err => {
        console.log(err);
      }
    );
  



    
    

  }


  goToAbout(){
    this.navCtrl.push(AboutPage);
  }


}
