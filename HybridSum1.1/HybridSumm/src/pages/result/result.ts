import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { GoogleObj, GoogleService } from '../home/translate/google.services';

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
  providers:[GoogleService, GoogleObj]
})
export class ResultPage {

   @Input() languageToTranslate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            private _google:GoogleService, private googleObj: GoogleObj) {
   
    
  }

  resultSumm = {    
    sTitle: this.navParams.get('paramTitle'),
    sText: this.navParams.get('paramText'),
    sLength: this.navParams.get('paramLength'),
    sLanguage: this.navParams.get('paramLanguage')
  }


  // função para tradução automática do texto sumarizado e o título
  translate($event) {
    let language = $event;
    this.googleObj.q = this.resultSumm.sText
    this.googleObj.source = this.resultSumm.sLanguage
    this.googleObj.target = language

    this._google.translate(this.googleObj).subscribe((res: any)=>{
      var translatedText = res.data.translations[0].translatedText
      this.googleObj.q = this.resultSumm.sTitle

      this._google.translate(this.googleObj).subscribe((res: any) =>{
        this.resultSumm.sTitle = res.data.translations[0].translatedText
        this.resultSumm.sText = translatedText
        this.resultSumm.sLanguage = this.googleObj.target
      },
      err =>{
        console.log(err)
      })

    }, 
    err =>{
      console.log(err)
    }
  )
    

  }

  ionViewDidLoad() {

  }

  goBack(){
    this.navCtrl.pop();
  }


  public languagesAvailable: any = [

    {language:"Afrikaans", initials: "af"},
    {language:"Albanian", initials: "sq"},
    {language:"Amharic", initials: "am"},
    {language:"Arabic", initials: "ar"},
    {language:"Armenian", initials: "hy"},
    {language:"Azerbaijani", initials: "az"},
    {language:"Basque", initials: "I"},
    {language:"Belarusian", initials: "be"},
    {language:"Bengali", initials: "bn"},
    {language:"Bosnian", initials: "bs"},
    {language:"Bulgarian", initials: "bg"},
    {language:"Catalan", initials: "ca"},
    {language:"Cebuano", initials: "ceb"},
    {language:"Simplified Chinese", initials: "zh-CN"},
    {language:"Traditional Chines", initials: "zh-TW"},
    {language:"Corsican", initials: "co"},
    {language:"Croatian", initials: "hr"},
    {language:"Czech", initials: "cs"},
    {language:"Danish", initials: "da"},
    {language:"Dutch", initials: "nl"},
    {language:"English", initials: "en"},
    {language:"Esperanto", initials: "eo"},
    {language:"Estonian", initials: "et"},
    {language:"Finnish ", initials: "fi"},
    {language:"French", initials: "fr"},
    {language:"Frisian", initials: "fy"},
    {language:"Galician", initials: "gl"},
    {language:"Georgian", initials: "Ka"},
    {language:"German", initials: "in"},
    {language:"Greek" , initials: "he"},
    {language:"Gujarat", initials: "gu"},
    {language:"Haitian Creole", initials: "ht"},
    {language:"Hauza", initials: "ha"},
    {language:"Hawaiian haw", initials: "haw"},
    {language:"Hebrew", initials: "iw"},
    {language:"Hindi", initials: "hi"},
    {language:"Hmong", initials: "hmn"},
    {language:"Hungarian", initials: "hu"},
    {language:"Icelandi", initials: "is"},
    {language:"Igbo", initials: "IG"},
    {language:"Indonesian", initials: "id"},
    {language:"Irish", initials: "ga"},
    {language:"Italian", initials: "it"},
    {language:"Japanese", initials: "ja"},
    {language:"Javanese", initials: "jw"},
    {language:"Canara", initials: "kn"},
    {language:"Kazakh", initials: "kk"},
    {language:"Khmer", initials: "km"},
    {language:"Korean", initials: "ko"},
    {language:"Kurdish", initials: "ku"},
    {language:"Kyrgyz", initials: "ky"},
    {language:"Laothian", initials: "it"},
    {language:"Latin", initials: "la"},
    {language:"Latvian", initials: "lv"},
    {language:"Lithuanian", initials: "lt"},
    {language:"Luxembourgish", initials: "lb"},
    {language:"Macedonian", initials: "mk"},
    {language:"Malagasy", initials: "mg"},
    {language:"Malay", initials: "ms"},
    {language:"Malayalam", initials: "ml"},
    {language:"Maltese", initials: "mt"},
    {language:"Maori", initials: "mi"},
    {language:"Marati", initials: "mr"},
    {language:"Mongolian", initials: "mn"},
    {language:"Myanmar (Burmese)", initials: "my"},
    {language:"Nepali", initials: "hu"},
    {language:"Norwegian", initials: "no"},
    {language:"Nianja (Chichewa)", initials: "ny"},
    {language:"Pashto", initials: "ps"},
    {language:"Persian", initials: "fa"},
    {language:"Polish", initials: "pl"},
    {language:"Brazillian Portuguese", initials: "pt-br"},
    {language:"Portuguese", initials: "pt"},
    {language:"Punjabi", initials: "Pa"},
    {language:"Romanian", initials: "ro"},
    {language:"Russian", initials: "ru"},
    {language:"Samoan", initials: "sm"},
    {language:"Scottish Gdaelic", initials: "gd"}, 
    {language:"Serbian", initials: "sr"},
    {language:"Sesoto", initials: "st"},
    {language:"Xona", initials: "sn"},
    {language:"Sindi", initials: "sd"},
    {language:"Sinhala (Sinhala)", initials: "si"},
    {language:"Slovak", initials: "sk"},
    {language:"Slovenian", initials: "sl"},
    {language:"Somali", initials: "so"},
    {language:"Spanish", initials: "es"},
    {language:"Sundanese", initials: "su"},
    {language:"Swahili", initials: "sw"},
    {language:"Swedish", initials: "sv"},
    {language:"Tagalog (Filipino)", initials: "tl"},
    {language:"Tajik", initials: "tg"},
    {language:"Tamil", initials: "ta"},
    {language:"Telugu", initials: "te"},
    {language:"Thai", initials: "th"},
    {language:"Turkish", initials: "tr"},
    {language:"Ukrainian", initials: "uk"},
    {language:"Urdu", initials: "ur"},
    {language:"Uzbek", initials: "uz"},
    {language:"Vietnamese", initials: "vi"},
    {language:"Welsh", initials: "cy"},
    {language:"Xhosa", initials: "xh"},
    {language:"Yiddish", initials: "yi"},
    {language:"Yoruba", initials: "yo"},
    {language:"Zulu", initials: "zu"},

  ]

}

    

