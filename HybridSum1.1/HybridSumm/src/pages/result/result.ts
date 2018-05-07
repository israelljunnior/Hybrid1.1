import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { Nlp } from './methodsSummarizer/nlp';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
  providers:[Nlp]
})
export class ResultPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public nlp: Nlp) {
   
    
  }

   
  

  resultSumm = {    
    sTitle: this.navParams.get('paramTitle'),
    sText: this.navParams.get('paramText'),
    sLength: this.navParams.get('paramLength')
  }

  ionViewDidLoad() {
    console.log('Summary Text Sucess.');
    this.nlp.eraseArrayObjectSentence()
    this.nlp.eraseArrayObjectWord()
    this.nlp.nlp(this.resultSumm.sTitle, this.resultSumm.sText, this.resultSumm.sLength)
    this.resultSumm.sText= this.nlp.getTextSummarizer()
  }

  goBack(){
    this.navCtrl.pop();
  }

}
