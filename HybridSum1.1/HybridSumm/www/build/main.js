webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeHtmlXml;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeStopWords;
function removeHtmlXml(texto) {
    var regex = /(<([^>]+)>)/ig;
    var result = texto.replace(regex, "");
    return result;
}
function isStopWord(word) {
    var regex = new RegExp("\\b" + word + "\\b", "i");
    if (stopWords.search(regex) < 0) {
        return false;
    }
    else {
        return true;
    }
}
function removeStopWords(string) {
    var words = new Array();
    string.replace(/\b[\w\u00C0-\u00FF]+\b/ig, function ($0) {
        if (!isStopWord($0)) {
            words[words.length] = $0.trim();
        }
    });
    return words.join(" "); // Retorna o texto sem stopwords
}
var stopWords = "a,able,about,above,abst,accordance,according,accordingly,across,act,actually,added,adj,\
affected,affecting,affects,after,afterwards,again,against,ah,all,almost,alone,along,already,also,although,\
always,am,among,amongst,an,and,announce,another,any,anybody,anyhow,anymore,anyone,anything,anyway,anyways,\
anywhere,apparently,approximately,are,aren,arent,arise,around,as,aside,ask,asking,at,auth,available,away,awfully,\
b,back,be,became,because,become,becomes,becoming,been,before,beforehand,begin,beginning,beginnings,begins,behind,\
being,believe,below,beside,besides,between,beyond,biol,both,brief,briefly,but,by,c,ca,came,can,cannot,can't,cause,causes,\
certain,certainly,co,com,come,comes,contain,containing,contains,could,couldnt,d,date,did,didn't,different,do,does,doesn't,\
doing,done,don't,down,downwards,due,during,e,each,ed,edu,effect,eg,eight,eighty,either,else,elsewhere,end,ending,enough,\
especially,et,et-al,etc,even,ever,every,everybody,everyone,everything,everywhere,ex,except,f,far,few,ff,fifth,first,five,fix,\
followed,following,follows,for,former,formerly,forth,found,four,from,further,furthermore,g,gave,get,gets,getting,give,given,gives,\
giving,go,goes,gone,got,gotten,h,had,happens,hardly,has,hasn't,have,haven't,having,he,hed,hence,her,here,hereafter,hereby,herein,\
heres,hereupon,hers,herself,hes,hi,hid,him,himself,his,hither,home,how,howbeit,however,hundred,i,id,ie,if,i'll,im,immediate,\
immediately,importance,important,in,inc,indeed,index,information,instead,into,invention,inward,is,isn't,it,itd,it'll,its,itself,\
i've,j,just,k,keep,keeps,kept,kg,km,know,known,knows,l,largely,last,lately,later,latter,latterly,least,less,lest,let,lets,like,\
liked,likely,line,little,'ll,look,looking,looks,ltd,m,made,mainly,make,makes,many,may,maybe,me,mean,means,meantime,meanwhile,\
merely,mg,might,million,miss,ml,more,moreover,most,mostly,mr,mrs,much,mug,must,my,myself,n,na,name,namely,nay,nd,near,nearly,\
necessarily,necessary,need,needs,neither,never,nevertheless,new,next,nine,ninety,no,nobody,non,none,nonetheless,noone,nor,\
normally,nos,not,noted,nothing,now,nowhere,o,obtain,obtained,obviously,of,off,often,oh,ok,okay,old,omitted,on,once,one,ones,\
only,onto,or,ord,other,others,otherwise,ought,our,ours,ourselves,out,outside,over,overall,owing,own,p,page,pages,part,\
particular,particularly,past,per,perhaps,placed,please,plus,poorly,possible,possibly,potentially,pp,predominantly,present,\
previously,primarily,probably,promptly,proud,provides,put,q,que,quickly,quite,qv,r,ran,rather,rd,re,readily,really,recent,\
recently,ref,refs,regarding,regardless,regards,related,relatively,research,respectively,resulted,resulting,results,right,run,s,\
said,same,saw,say,saying,says,sec,section,see,seeing,seem,seemed,seeming,seems,seen,self,selves,sent,seven,several,shall,she,shed,\
she'll,shes,should,shouldn't,show,showed,shown,showns,shows,significant,significantly,similar,similarly,since,six,slightly,so,\
some,somebody,somehow,someone,somethan,something,sometime,sometimes,somewhat,somewhere,soon,sorry,specifically,specified,specify,\
specifying,still,stop,strongly,sub,substantially,successfully,such,sufficiently,suggest,sup,sure,t,take,taken,taking,tell,tends,\
th,than,thank,thanks,thanx,that,that'll,thats,that've,the,their,theirs,them,themselves,then,thence,there,thereafter,thereby,\
thered,therefore,therein,there'll,thereof,therere,theres,thereto,thereupon,there've,these,they,theyd,they'll,theyre,they've,\
think,this,those,thou,though,thoughh,thousand,throug,through,throughout,thru,thus,til,tip,to,together,too,took,toward,towards,\
tried,tries,truly,try,trying,ts,twice,two,u,un,under,unfortunately,unless,unlike,unlikely,until,unto,up,upon,ups,us,use,used,\
useful,usefully,usefulness,uses,using,usually,v,value,various,'ve,very,via,viz,vol,vols,vs,w,want,wants,was,wasn't,way,we,wed,\
welcome,we'll,went,were,weren't,we've,what,whatever,what'll,whats,when,whence,whenever,where,whereafter,whereas,whereby,wherein,\
wheres,whereupon,wherever,whether,which,while,whim,whither,who,whod,whoever,whole,who'll,whom,whomever,whos,whose,why,widely,\
willing,wish,with,within,without,won't,words,world,would,wouldn't,www,x,y,yes,yet,you,youd,you'll,your,youre,yours,yourself,\
yourselves,you've,z,zero,a,à,adeus,agora,aí,ainda,além,algo,algumas,alguns,ali,ano,anos,antes,ao,aos,apenas,apoio,após,aquela,aquelas,aquele,aqueles,\ aqui,aquilo,área,as,às,assim,até,atrás,através,baixo,bastante,bem,boa,boas,bom,bons,breve,cá,cada,catorze,cedo,cento,certamente,certeza,cima,\
cinco,coisa,com,como,conselho,contra,custa,da,dá,dão,daquela,daquelas,daquele,daqueles,dar,das,de,debaixo,demais,dentro,depois,desde,dessa,\
dessas,desse,desses,desta,destas,deste,destes,deve,deverá,dez,dezanove,dezasseis,dezassete,dezoito,dia,diante,diz,dizem,dizer,do,dois,dos,\
doze,duas,dúvida,e,é,ela,elas,ele,eles,em,embora,entre,era,és,essa,essas,esse,esses,esta,está,estão,estar,estas,estás,estava,este,estes,esteve,\
estive,estivemos,estiveram,estiveste,estivestes,estou,eu,exemplo,faço,falta,favor,faz,fazeis,fazem,fazemos,fazer,fazes,fez,fim,final,foi,fomos,\
for,foram,forma,foste,fostes,fui,geral,grande,grandes,grupo,há,hoje,hora,horas,isso,isto,já,lá,lado,local,logo,longe,lugar,maior,maioria,mais,mal,\
mas,máximo,me,meio,menor,menos,mês,meses,meu,meus,mil,minha,minhas,momento,muito,muitos,na,nada,não,naquela,naquelas,naquele,naqueles,nas,nem,nenhuma,\
nessa,nessas,nesse,nesses,nesta,nestas,neste,nestes,nível,no,noite,nome,nos,nós,nossa,nossas,nosso,nossos,nova,novas,nove,novo,novos,num,numa,\
número,nunca,o,obra,obrigada,obrigado,oitava,oitavo,oito,onde,ontem,onze,os,ou,outra,outras,outro,outros,para,parece,parte,partir,paucas,pela,\
pelas,pelo,pelos,perto,pode,pôde,podem,poder,põe,põem,ponto,pontos,por,porque,porquê,posição,possível,possivelmente,posso,pouca,pouco,poucos,\
primeira,primeiras,primeiro,primeiros,própria,próprias,próprio,próprios,próxima,próximas,próximo,próximos,puderam,quáis,qual,quando,quanto,quarta,\
quarto,quatro,que,quê,quem,quer,quereis,querem,queremas,queres,quero,questão,quinta,quinto,quinze,relação,sabe,sabem,são,se,segunda,segundo,sei,\
seis,sem,sempre,ser,seria,sete,sétima,sétimo,seu,seus,sexta,sexto,sim,sistema,sob,sobre,sois,somos,sou,sua,suas,tal,talvez,também,tanta,tantas,\
tanto,tão,tarde,te,tem,têm,temos,tendes,tenho,tens,ter,terceira,terceiro,teu,teus,teve,tive,tivemos,tiveram,tiveste,tivestes,toda,todas,todo,\
todos,trabalho,três,treze,tu,tua,tuas,tudo,um,uma,umas,uns,vai,vais,vão,vários,vem,vêm,vens,ver,vez,vezes,viagem,vindo,vinte,você,vocês,vos,vós,\
vossa,vossas,vosso,vossos,él,ésta,éstas,éste,éstos,última,últimas,último,últimos,a,añadió,aún,actualmente,adelante,además,afirmó,agregó,ahí,\
ahora,al,algún,algo,alguna,algunas,alguno,algunos,alrededor,ambos,ante,anterior,antes,apenas,aproximadamente,aquí,así,aseguró,aunque,ayer,bajo,\
bien,buen,buena,buenas,bueno,buenos,cómo,cada,casi,cerca,cierto,cinco,comentó,como,con,conocer,consideró,considera,contra,cosas,creo,cual,cuales,\
cualquier,cuando,cuanto,cuatro,cuenta,da,dado,dan,dar,de,debe,deben,debido,decir,dejó,del,demás,dentro,desde,después,dice,dicen,dicho,dieron,\
diferente,diferentes,dijeron,dijo,dio,donde,dos,durante,e,ejemplo,el,ella,ellas,ello,ellos,embargo,en,encuentra,entonces,entre,era,eran,es,esa,\
esas,ese,eso,esos,está,están,esta,estaba,estaban,estamos,estar,estará,estas,este,esto,estos,estoy,estuvo,ex,existe,existen,explicó,expresó,fin,\
fue,fuera,fueron,gran,grandes,ha,había,habían,haber,habrá,hace,hacen,hacer,hacerlo,hacia,haciendo,han,hasta,hay,haya,he,hecho,hemos,hicieron,hizo,\
hoy,hubo,igual,incluso,indicó,informó,junto,la,lado,las,le,les,llegó,lleva,llevar,lo,los,luego,lugar,más,manera,manifestó,mayor,me,mediante,mejor,\
mencionó,menos,mi,mientras,misma,mismas,mismo,mismos,momento,mucha,muchas,mucho,muchos,muy,nada,nadie,ni,ningún,ninguna,ningunas,ninguno,ninguno,no,\
nos,nosotras,nosotros,nuestra,nuestras,nuestro,nuestros,nueva,nuevas,nuevo,nuevos,nunca,o,ocho,otra,otras,otro,otros,para,parece,parte,partir,pasada,\
pasado,pero,pesar,poca,pocas,poco,pocos,podemos,podrá,podrán,podría,podrían,poner,por,porque,posible,próximo,próximos,primer,primera,primero,primeros,\
principalmente,propia,propias,propio,propios,pudo,pueda,puede,pueden,pues,qué,que,quedó,queremos,quién,quien,quienes,quiere,realizó,realizado,\
realizar,respecto,sí,sólo,se,señaló,sea,sean,según,segunda,segundo,seis,ser,será,serán,sería,si,sido,siempre,siendo,siete,sigue,siguiente,sin,\
sino,sobre,sola,solamente,solas,solo,solos,son,su,sus,tal,también,tampoco,tan,tanto,tenía,tendrá,tendrán,tenemos,tener,tenga,tengo,tenido,tercera,\
tiene,tienen,toda,todas,todavía,todo,todos,total,tras,trata,través,tres,tuvo,un,una,unas,uno,unos,usted,va,vamos,van,varias,varios,veces,\
ver,vez,y,ya,yo";
//# sourceMappingURL=stopWords.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_translate_google_services__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../home/home';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams, _google, googleObj) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._google = _google;
        this.googleObj = googleObj;
        this.resultSumm = {
            sTitle: this.navParams.get('paramTitle'),
            sText: this.navParams.get('paramText'),
            sLength: this.navParams.get('paramLength'),
            sLanguage: this.navParams.get('paramLanguage')
        };
        this.languageAvaible = [
            { language: "Afrikaans", initials: "af" },
            { language: "Albanian", initials: "sq" },
            { language: "Amharic", initials: "am" },
            { language: "Arabic", initials: "ar" },
            { language: "Armenian", initials: "hy" },
            { language: "Azerbaijani", initials: "az" },
            { language: "Basque", initials: "I" },
            { language: "Belarusian", initials: "be" },
            { language: "Bengali", initials: "bn" },
            { language: "Bosnian", initials: "bs" },
            { language: "Bulgarian", initials: "bg" },
            { language: "Catalan", initials: "ca" },
            { language: "Cebuano", initials: "ceb" },
            { language: "Simplified Chinese", initials: "zh-CN" },
            { language: "Traditional Chines", initials: "zh-TW" },
            { language: "Corsican", initials: "co" },
            { language: "Croatian", initials: "hr" },
            { language: "Czech", initials: "cs" },
            { language: "Danish", initials: "da" },
            { language: "Dutch", initials: "nl" },
            { language: "English", initials: "en" },
            { language: "Esperanto", initials: "eo" },
            { language: "Estonian", initials: "et" },
            { language: "Finnish ", initials: "fi" },
            { language: "French", initials: "fr" },
            { language: "Frisian", initials: "fy" },
            { language: "Galician", initials: "gl" },
            { language: "Georgian", initials: "Ka" },
            { language: "German", initials: "in" },
            { language: "Greek", initials: "he" },
            { language: "Gujarat", initials: "gu" },
            { language: "Haitian Creole", initials: "ht" },
            { language: "Hauza", initials: "ha" },
            { language: "Hawaiian haw", initials: "haw" },
            { language: "Hebrew", initials: "iw" },
            { language: "Hindi", initials: "hi" },
            { language: "Hmong", initials: "hmn" },
            { language: "Hungarian", initials: "hu" },
            { language: "Icelandi", initials: "is" },
            { language: "Igbo", initials: "IG" },
            { language: "Indonesian", initials: "id" },
            { language: "Irish", initials: "ga" },
            { language: "Italian", initials: "it" },
            { language: "Japanese", initials: "ja" },
            { language: "Javanese", initials: "jw" },
            { language: "Canara", initials: "kn" },
            { language: "Kazakh", initials: "kk" },
            { language: "Khmer", initials: "km" },
            { language: "Korean", initials: "ko" },
            { language: "Kurdish", initials: "ku" },
            { language: "Kyrgyz", initials: "ky" },
            { language: "Laothian", initials: "it" },
            { language: "Latin", initials: "la" },
            { language: "Latvian", initials: "lv" },
            { language: "Lithuanian", initials: "lt" },
            { language: "Luxembourgish", initials: "lb" },
            { language: "Macedonian", initials: "mk" },
            { language: "Malagasy", initials: "mg" },
            { language: "Malay", initials: "ms" },
            { language: "Malayalam", initials: "ml" },
            { language: "Maltese", initials: "mt" },
            { language: "Maori", initials: "mi" },
            { language: "Marati", initials: "mr" },
            { language: "Mongolian", initials: "mn" },
            { language: "Myanmar (Burmese)", initials: "my" },
            { language: "Nepali", initials: "hu" },
            { language: "Norwegian", initials: "no" },
            { language: "Nianja (Chichewa)", initials: "ny" },
            { language: "Pashto", initials: "ps" },
            { language: "Persian", initials: "fa" },
            { language: "Polish", initials: "pl" },
            { language: "English", initials: "en" },
            { language: "Punjabi", initials: "Pa" },
            { language: "Romanian", initials: "ro" },
            { language: "Russian", initials: "ru" },
            { language: "Samoan", initials: "sm" },
            { language: "Scottish Gdaelic", initials: "gd" },
            { language: "Serbian", initials: "sr" },
            { language: "Sesoto", initials: "st" },
            { language: "Xona", initials: "sn" },
            { language: "Sindi", initials: "sd" },
            { language: "Sinhala (Sinhala)", initials: "si" },
            { language: "Slovak", initials: "sk" },
            { language: "Slovenian", initials: "sl" },
            { language: "Somali", initials: "so" },
            { language: "Spanish", initials: "es" },
            { language: "Sundanese", initials: "su" },
            { language: "Swahili", initials: "sw" },
            { language: "Swedish", initials: "sv" },
            { language: "Tagalog (Filipino)", initials: "tl" },
            { language: "Tajik", initials: "tg" },
            { language: "Tamil", initials: "ta" },
            { language: "Telugu", initials: "te" },
            { language: "Thai", initials: "th" },
            { language: "Turkish", initials: "tr" },
            { language: "Ukrainian", initials: "uk" },
            { language: "Urdu", initials: "ur" },
            { language: "Uzbek", initials: "uz" },
            { language: "Vietnamese", initials: "vi" },
            { language: "Welsh", initials: "cy" },
            { language: "Xhosa", initials: "xh" },
            { language: "Yiddish", initials: "yi" },
            { language: "Yoruba", initials: "yo" },
            { language: "Zulu", initials: "zu" },
        ];
    }
    ResultPage.prototype.translate = function ($event) {
        var _this = this;
        var language = $event;
        this.googleObj.q = this.resultSumm.sText;
        this.googleObj.source = this.resultSumm.sLanguage;
        this.googleObj.target = language;
        this._google.translate(this.googleObj).subscribe(function (res) {
            var translatedText = res.data.translations[0].translatedText;
            _this.googleObj.q = _this.resultSumm.sTitle;
            _this._google.translate(_this.googleObj).subscribe(function (res) {
                _this.resultSumm.sTitle = res.data.translations[0].translatedText;
                _this.resultSumm.sText = translatedText;
                _this.resultSumm.sLanguage = _this.googleObj.target;
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ResultPage.prototype.ionViewDidLoad = function () {
    };
    ResultPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ResultPage.prototype, "languageToTranslate", void 0);
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"C:\Apps\HybridSum\HybridSum1.1\HybridSumm\HybridSumm1.1\HybridSum1.1\HybridSumm\src\pages\result\result.html"*/'<!--\n\n  Generated template for the ResultPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>\n\n      Summary Result\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n\n\n      <ion-item id="selectIdiom" style="width:30%; margin-left:87%;">\n\n          <ion-select [(ngModel)]="languageToTranslate" multiple="false" (ngModelChange)="translate($event)">\n\n          <ion-option [value]="l.initials" *ngFor="let l of languageAvaible"\n\n           [selected]="l.initials === resultSumm.sLanguage">\n\n            {{l.language}}\n\n          </ion-option>\n\n\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n    <ion-card-content>\n\n      <br>{{resultSumm.sTitle}}<br>\n\n      <div class="hr"></div>\n\n      <br>{{resultSumm.sText}}\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <br>\n\n\n\n  <div *ngIf="resultSumm.sText">\n\n      <button ion-button outline class="btn" id="buttonBack" (click)="goBack()">Back</button>\n\n          \n\n\n\n            \n\n      \n\n      \n\n\n\n  </div>\n\n\n\n <!--\n\n\n\n\n\n\n\n -->\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\HybridSum\HybridSum1.1\HybridSumm\HybridSumm1.1\HybridSum1.1\HybridSumm\src\pages\result\result.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__home_translate_google_services__["b" /* GoogleService */], __WEBPACK_IMPORTED_MODULE_2__home_translate_google_services__["a" /* GoogleObj */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__home_translate_google_services__["b" /* GoogleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_translate_google_services__["b" /* GoogleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__home_translate_google_services__["a" /* GoogleObj */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_translate_google_services__["a" /* GoogleObj */]) === "function" && _d || Object])
    ], ResultPage);
    return ResultPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		286,
		1
	],
	"../pages/result/result.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GoogleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleObj; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleService = /** @class */ (function () {
    function GoogleService(_http) {
        this._http = _http;
        this.key = "AIzaSyDayupNAHot4Rst1q2lMuzvqB_W3He33j4";
    }
    GoogleService.prototype.translate = function (obj) {
        return this._http.post(url + this.key, obj);
    };
    GoogleService.prototype.detect = function (obj) {
        return this._http.post(urlDetect + this.key, obj);
    };
    GoogleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GoogleService);
    return GoogleService;
}());

var url = 'https://translation.googleapis.com/language/translate/v2?key=';
var urlDetect = 'https://translation.googleapis.com/language/translate/v2/detect?key=';
var GoogleObj = /** @class */ (function () {
    function GoogleObj() {
        this.source = "en";
        this.target = "en";
        this.format = 'text';
    }
    return GoogleObj;
}());

//# sourceMappingURL=google.services.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__methodsSummarizer_nlp__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__translate_google_services__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, formbuilder, element, nlp, _google) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.element = element;
        this.nlp = nlp;
        this._google = _google;
        this.sLanguage = "";
        this.googleObj = new __WEBPACK_IMPORTED_MODULE_5__translate_google_services__["a" /* GoogleObj */]();
        this.textTranslated = false;
        this.summForm = formbuilder.group({
            sTitle: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            sText: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            sLength: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.sTitle = this.summForm.controls['sTitle'];
        this.sText = this.summForm.controls['sText'];
        this.sLength = this.summForm.controls['sLength'];
    }
    HomePage.prototype.onInput = function (textArea) {
        this.adjust();
    };
    HomePage.prototype.adjust = function () {
        var ta = this.element.nativeElement.querySelector("textarea");
        ta.style.overflow = 'hidden';
        ta.style.height = 'auto';
        ta.style.height = ta.scrollHeight + 'px';
    };
    HomePage.prototype.nextPageWithData = function () {
        var _this = this;
        var resultText = this.sText.value;
        var resultTitle = this.sTitle.value;
        var resultLength = this.sLength.value;
        this.googleObj.q = resultText;
        this._google.detect(this.googleObj).subscribe(function (res) {
            var jsonObj = res.data.detections[0];
            if (jsonObj[0].confidence >= 0.4) {
                _this.sLanguage = jsonObj[0].language;
                if (_this.sLanguage == "en" ||
                    _this.sLanguage == "pt" ||
                    _this.sLanguage == "es") {
                    console.log("it doesn't need to be translated");
                    _this.nlp.eraseArrayObjectSentence();
                    _this.nlp.eraseArrayObjectWord();
                    _this.nlp.nlp(resultTitle, resultText, resultLength);
                    resultText = _this.nlp.getTextSummarizer();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
                        paramTitle: resultTitle,
                        paramText: resultText,
                        paramLength: resultLength,
                        paramLanguage: _this.sLanguage
                    });
                }
                else {
                    _this.googleObj.source = _this.sLanguage;
                    _this._google.translate(_this.googleObj).subscribe(function (res) {
                        resultText = res.data.translations[0].translatedText;
                        _this.textTranslated = true;
                        _this.googleObj.q = resultTitle;
                        _this._google.translate(_this.googleObj).subscribe(function (res) {
                            resultTitle = res.data.translations[0].translatedText;
                            console.log('Summary Text Sucess.');
                            _this.nlp.eraseArrayObjectSentence();
                            _this.nlp.eraseArrayObjectWord();
                            _this.nlp.nlp(resultTitle, resultText, resultLength);
                            resultText = _this.nlp.getTextSummarizer();
                            if (_this.textTranslated == true) {
                                _this.googleObj.q = resultText;
                                _this.googleObj.target = _this.sLanguage;
                                _this.googleObj.source = "en";
                                _this._google.translate(_this.googleObj).subscribe(function (res) {
                                    resultText = res.data.translations[0].translatedText;
                                    console.log(resultText);
                                    _this.googleObj.q = resultTitle;
                                    _this._google.translate(_this.googleObj).subscribe(function (res) {
                                        resultTitle = res.data.translations[0].translatedText;
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
                                            paramTitle: resultTitle,
                                            paramText: resultText,
                                            paramLength: resultLength,
                                            paramLanguage: _this.sLanguage
                                        });
                                    }, function (err) {
                                        console.log(err);
                                    });
                                }, function (err) {
                                    console.log(err);
                                });
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.goToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("input", ["$event.target"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], HomePage.prototype, "onInput", null);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Apps\HybridSum\HybridSum1.1\HybridSumm\HybridSumm1.1\HybridSum1.1\HybridSumm\src\pages\home\home.html"*/'<br>\n\n<ion-header>\n\n  <ion-navbar>\n\n\n\n    <ion-title>\n\n      Menu\n\n    </ion-title>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button icon-only menuToggle="left">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="summForm" novalidate (submit)="nextPageWithData()">\n\n\n\n  <ion-item>\n\n    <ion-label stacked class="label-md-dark">Title</ion-label>\n\n    <ion-input placeholder="Ex: The Bio-informatics" formControlName="sTitle" ></ion-input>\n\n  </ion-item>\n\n\n\n  <p *ngIf="sTitle.hasError(\'required\') && sTitle.touched" class="erro">You must enter a title to summarize.</p>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label stacked >Text</ion-label>\n\n    <ion-textarea placeholder="Place the text that you want to summarize." formControlName="sText" class="texto"></ion-textarea>\n\n  </ion-item>\n\n\n\n  <p *ngIf="sText.hasError(\'required\') && sText.touched" class="erro">You must enter a text to summarize.</p>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Sentence Length</ion-label>\n\n    <ion-input type="number" formControlName="sLength"></ion-input>\n\n  </ion-item>\n\n\n\n  <p *ngIf="sLength.hasError(\'required\') && sLength.touched" class="erro">You must enter the sentence length to summarize.</p>\n\n\n\n  <br>\n\n\n\n  <button ion-button outline class="btn" type="submit" [disabled]="!summForm.valid">Summarize</button>\n\n  \n\n  </form>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\HybridSum\HybridSum1.1\HybridSumm\HybridSumm1.1\HybridSum1.1\HybridSumm\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__methodsSummarizer_nlp__["a" /* Nlp */], __WEBPACK_IMPORTED_MODULE_5__translate_google_services__["b" /* GoogleService */], __WEBPACK_IMPORTED_MODULE_5__translate_google_services__["a" /* GoogleObj */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_4__methodsSummarizer_nlp__["a" /* Nlp */], __WEBPACK_IMPORTED_MODULE_5__translate_google_services__["b" /* GoogleService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nlp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__word_model__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sentence_model__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_stopWords__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_wordFrequency__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_upperCase__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_TFIDF__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_titleResemblance__ = __webpack_require__(285);







var Nlp = /** @class */ (function () {
    function Nlp() {
        this.textSummarizer = "";
        this.sentence = "";
        this.arrayObjectWord = [];
        this.arrayObjectSentence = [];
    }
    Nlp.prototype.nlp = function (title, text, nSentences) {
        this.title = this.removeHtmlXml(title);
        this.text = this.removeHtmlXml(text);
        this.numberSentenceInSummarizied = nSentences;
        // Methods
        this.splitText(this.text);
        this.createObjectWord();
        this.frequenceText(this.arrayObjectWord, this.arrayObjectSentence);
        this.upperCase(this.arrayObjectSentence);
        this.TFIDF(this.arrayObjectWord, this.arrayObjectSentence);
        this.titleResemblance(this.title, this.arrayObjectSentence);
        this.arrayObjectSentence = this.ranking(this.arrayObjectSentence);
        this.summ(this.arrayObjectSentence, this.numberSentenceInSummarizied);
    };
    // getters and setters 
    Nlp.prototype.getText = function () { return this.text; };
    Nlp.prototype.setText = function (newText) { this.text = newText; };
    Nlp.prototype.getTitle = function () { return this.title; };
    Nlp.prototype.setTitle = function (newTitle) { this.title = newTitle; };
    Nlp.prototype.getTextSummarizer = function () { return this.textSummarizer; };
    Nlp.prototype.setTextSummarizer = function (newText) { this.textSummarizer = newText; };
    Nlp.prototype.getArrayObjectWord = function () { return this.arrayObjectWord; };
    Nlp.prototype.eraseArrayObjectWord = function () { this.arrayObjectWord = []; };
    Nlp.prototype.getArrayObjectSentence = function () { return this.arrayObjectSentence; };
    Nlp.prototype.eraseArrayObjectSentence = function () { this.arrayObjectSentence = []; };
    //constructor(text: string) { this.text = text }
    //METHODS
    // remove tags
    Nlp.prototype.removeHtmlXml = function (string) {
        string = Object(__WEBPACK_IMPORTED_MODULE_2__scripts_stopWords__["a" /* removeHtmlXml */])(string);
        return string;
    };
    // this method remove all StopWords in text
    Nlp.prototype.removeStopWords = function (string) {
        string = Object(__WEBPACK_IMPORTED_MODULE_2__scripts_stopWords__["b" /* removeStopWords */])(string);
        return string;
    };
    Nlp.prototype.frequenceText = function (arrayObjectWord, arrayObjectSentence) {
        Object(__WEBPACK_IMPORTED_MODULE_3__scripts_wordFrequency__["a" /* frequenceText */])(arrayObjectWord, arrayObjectSentence);
    };
    Nlp.prototype.upperCase = function (arrayObjectSentence) {
        Object(__WEBPACK_IMPORTED_MODULE_4__scripts_upperCase__["a" /* upperCase */])(arrayObjectSentence);
    };
    Nlp.prototype.TFIDF = function (arrayObjectWord, arrayObjectSentence) {
        Object(__WEBPACK_IMPORTED_MODULE_5__scripts_TFIDF__["a" /* TFIDF */])(arrayObjectWord, arrayObjectSentence);
    };
    Nlp.prototype.titleResemblance = function (title, arrayObjectSentence) {
        Object(__WEBPACK_IMPORTED_MODULE_6__scripts_titleResemblance__["a" /* titleResemblance */])(title, arrayObjectSentence);
    };
    //split text in sentences and create objectSentence
    Nlp.prototype.splitText = function (string) {
        var indexSentence = 0;
        for (var i = 0; i < string.length; i++) {
            this.sentence += string[i];
            if (string[i] == "." || string[i] == "?") {
                if ('0123456789'.indexOf(string[i + 1]) == -1) {
                    indexSentence++; //
                    if (string[i + 1] == "." && string[i + 2] == ".") {
                        this.sentence += string[i + 1];
                        this.sentence += string[i + 2];
                        var objectSentence = new __WEBPACK_IMPORTED_MODULE_1__sentence_model__["a" /* Sentence */](this.sentence, indexSentence);
                        this.arrayObjectSentence.push(objectSentence);
                        this.sentence = "";
                        i += 2;
                    }
                    else {
                        var objectSentence = new __WEBPACK_IMPORTED_MODULE_1__sentence_model__["a" /* Sentence */](this.sentence, indexSentence);
                        this.arrayObjectSentence.push(objectSentence);
                        this.sentence = "";
                    }
                }
            }
        }
    };
    //Create objectWord
    Nlp.prototype.createObjectWord = function () {
        var words = this.text.match(/(\w|\s)*\w(?=")|[\w\u00C0-\u00FF]+/ig); //get all elements in text
        var isWord = new RegExp(/[\w\u00C0-\u00FF]/ig);
        var _loop_1 = function (i) {
            //these conditions checks if the element in array is a word and stop word
            if (Object(__WEBPACK_IMPORTED_MODULE_2__scripts_stopWords__["b" /* removeStopWords */])(words[i]) /*&& words[i].match(isWord)*/) {
                if (this_1.arrayObjectWord.length > 0) {
                    var wasChecked_1 = false;
                    this_1.arrayObjectWord.forEach(function ($w) {
                        if ($w.word.toUpperCase() === words[i].toUpperCase()) {
                            wasChecked_1 = true;
                        }
                    });
                    if (wasChecked_1 === false) {
                        var objectWord = new __WEBPACK_IMPORTED_MODULE_0__word_model__["a" /* Word */](words[i]);
                        this_1.arrayObjectWord.push(objectWord);
                    }
                }
                else {
                    var objectWord = new __WEBPACK_IMPORTED_MODULE_0__word_model__["a" /* Word */](words[i]);
                    this_1.arrayObjectWord.push(objectWord);
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < words.length; i++) {
            _loop_1(i);
        }
    };
    Nlp.prototype.ranking = function (arrayObjectSentence) {
        var ranking = arrayObjectSentence.sort(function (a, b) { return b.finalScore - a.finalScore; });
        return ranking;
    };
    Nlp.prototype.summ = function (arrayObjectSentence, length) {
        var _this = this;
        var arraySentenceSumm = [];
        for (var i = 0; i < length; i++) {
            arraySentenceSumm.push(arrayObjectSentence[i]);
        }
        arraySentenceSumm = arraySentenceSumm.sort(function (a, b) { return a.index - b.index; });
        arraySentenceSumm.forEach(function ($s) {
            _this.textSummarizer += $s.sentence;
        });
    };
    return Nlp;
}());

//# sourceMappingURL=nlp.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_result_result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_methodsSummarizer_nlp__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_methodsSummarizer_nlp__["a" /* Nlp */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MyApp.prototype.closeApp = function () {
        this.platform.exitApp();
    };
    MyApp.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    MyApp.prototype.goToAbout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Apps\HybridSum\HybridSum1.1\HybridSumm\HybridSumm1.1\HybridSum1.1\HybridSumm\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item (click)="goToAbout()">\n\n        About\n\n      </button>\n\n\n\n      <button ion-item (click)="closeApp()">\n\n        Quit\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n\n\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\Apps\HybridSum\HybridSum1.1\HybridSumm\HybridSumm1.1\HybridSum1.1\HybridSumm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Word; });
var Word = /** @class */ (function () {
    function Word(word) {
        this.numberSentence = [];
        this.frequenceSen = [];
        this.frequenceText = 0;
        this.TFIDF = [];
        this.word = word;
    }
    return Word;
}());

//# sourceMappingURL=word.model.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sentence; });
var Sentence = /** @class */ (function () {
    function Sentence(sentence, index) {
        this.sentence = "";
        this.amountWordsSentence = 0;
        this.TFIDFScore = 0;
        this.upperCases = 0;
        this.titleResemblance = 0;
        this.finalScore = 0;
        this.sentence = sentence;
        this.index = index;
    }
    return Sentence;
}());

//# sourceMappingURL=sentence.model.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = frequenceText;
function frequenceText(arrayObjectWord, arrayObjectSentence) {
    for (var i = 0; i < arrayObjectWord.length; i++) {
        for (var j = 0; j < arrayObjectSentence.length; j++) {
            var regex = new RegExp("\\b" + arrayObjectWord[i].word + "\\b", "g");
            var result = arrayObjectSentence[j].sentence.match(regex);
            arrayObjectWord[i].numberSentence.push(arrayObjectSentence[j].index);
            if (result !== null) {
                arrayObjectWord[i].frequenceSen.push(result.length);
                arrayObjectSentence[j].amountWordsSentence += 1;
                arrayObjectWord[i].frequenceText += result.length;
            }
            else
                arrayObjectWord[i].frequenceSen.push(0);
        }
    }
}
//# sourceMappingURL=wordFrequency.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upperCase;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stopWords__ = __webpack_require__(100);

function upperCase(arrayObjectSentence) {
    var numberCases = 0;
    var regexpUpperCase = new RegExp("^[A-Z\u00C0-\u00FF]", "g"); //regexp for checking uppercase
    var wordsChecked = [];
    for (var i = 0; i < arrayObjectSentence.length; i++) {
        var wordsSentence = arrayObjectSentence[i].sentence.match(/(\w|\s)*\w(?=")|[\w\u00C0-\u00FF]+/ig);
        var _loop_1 = function (j) {
            if (wordsChecked.length > 0) {
                var isWordChecked_1 = false;
                wordsChecked.forEach(function (word) {
                    if (word.toUpperCase() === wordsSentence[j].toUpperCase()) {
                        isWordChecked_1 = true;
                    }
                });
                if (isWordChecked_1 == false) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_0__stopWords__["b" /* removeStopWords */])(wordsSentence[j])) {
                        if (wordsSentence[j].match(regexpUpperCase) != null) {
                            var result = wordsSentence[j].match(regexpUpperCase).length;
                            numberCases += result;
                            arrayObjectSentence[i].upperCases += result;
                        }
                    }
                    wordsChecked.push(wordsSentence[j]);
                }
            }
            else {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__stopWords__["b" /* removeStopWords */])(wordsSentence[j])) {
                    if (wordsSentence[j].match(regexpUpperCase) != null) {
                        var result = wordsSentence[j].match(regexpUpperCase).length;
                        numberCases += result;
                        arrayObjectSentence[i].upperCases += result;
                    }
                    wordsChecked.push(wordsSentence[j]);
                }
            }
        };
        for (var j = 0; j < wordsSentence.length; j++) {
            _loop_1(j);
        }
        wordsChecked = [];
    }
    //add points in final score
    arrayObjectSentence.forEach(function ($s) {
        if ($s.upperCases > 0) {
            $s.finalScore += $s.upperCases / numberCases;
        }
    });
}
//# sourceMappingURL=upperCase.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TFIDF;
function TFIDF(arrayObjectWord, arrayObjectSentence) {
    for (var i = 0; i < arrayObjectSentence.length; i++) {
        for (var j = 0; j < arrayObjectWord.length; j++) {
            if (arrayObjectWord[j].frequenceSen[i] > 0) {
                var tfidf = TF(arrayObjectWord[j], arrayObjectSentence[i], i)
                    * IDF(arrayObjectWord[j], arrayObjectSentence);
                arrayObjectWord[j].TFIDF.push(tfidf);
                arrayObjectSentence[i].TFIDFScore += tfidf;
                arrayObjectSentence[i].finalScore += tfidf;
            }
            else {
                arrayObjectWord[j].TFIDF.push(0);
            }
        }
    }
}
function TF(objectWord, objectSentence, i) {
    return Math.log(1 +
        (objectWord.frequenceSen[i] / objectSentence.amountWordsSentence));
}
function IDF(objectWord, arrayObjectSentence) {
    var sentenceWithObjectWord = 0;
    for (var l = 0; l < objectWord.numberSentence.length; l++) {
        if (objectWord.frequenceSen[l] > 0)
            sentenceWithObjectWord++;
    }
    return Math.log(arrayObjectSentence.length / sentenceWithObjectWord);
}
//# sourceMappingURL=TFIDF.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = titleResemblance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stopWords__ = __webpack_require__(100);

function titleResemblance(title, arrayObjectSentence) {
    title = Object(__WEBPACK_IMPORTED_MODULE_0__stopWords__["b" /* removeStopWords */])(title);
    title = Object(__WEBPACK_IMPORTED_MODULE_0__stopWords__["a" /* removeHtmlXml */])(title);
    var titleWords = title.match(/(\w|\s)*\w(?=")|[\w\u00C0-\u00FF]+/g);
    for (var j = 0; j < arrayObjectSentence.length; j++) {
        var wordsChecked = [];
        var NTW = 0;
        var _loop_1 = function (i) {
            if (wordsChecked.length > 0) {
                var isWordChecked_1 = false;
                wordsChecked.forEach(function (word) {
                    if (word.toUpperCase() === titleWords[i].toUpperCase()) {
                        isWordChecked_1 = true;
                    }
                });
                if (isWordChecked_1 == false) {
                    var regex = new RegExp("\\b" + titleWords[i].toUpperCase() + "\\b", "g");
                    if (arrayObjectSentence[j].sentence.toUpperCase().match(regex) !== null) {
                        NTW++;
                    }
                    if (NTW > 0) {
                        arrayObjectSentence[j].titleResemblance = NTW / titleWords.length;
                        arrayObjectSentence[j].finalScore += NTW / titleWords.length;
                    }
                    wordsChecked.push(titleWords[i]);
                }
            }
            else {
                var regex = new RegExp("\\b" + titleWords[i].toUpperCase() + "\\b", "g");
                if (arrayObjectSentence[j].sentence.toUpperCase().match(regex) !== null) {
                    NTW++;
                }
                if (NTW > 0) {
                    arrayObjectSentence[j].titleResemblance += NTW / titleWords.length;
                    arrayObjectSentence[j].finalScore += NTW / titleWords.length;
                }
                wordsChecked.push(titleWords[i]);
            }
        };
        for (var i = 0; i < titleWords.length; i++) {
            _loop_1(i);
        }
    }
}
//# sourceMappingURL=titleResemblance.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Apps\HybridSum\HybridSum1.1\HybridSumm\HybridSumm1.1\HybridSum1.1\HybridSumm\src\pages\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <article>\n\n    <p style="text-align: center;">Hybrid application for automatic summarization of texts, made by students of the Federal Institute of Pernambuco, with Luciano Cabral as advisor.</p>\n\n  </article>\n\n  <br>\n\n  <p style="text-align: center;">Version<br><br>2.0</p><br>\n\n\n\n  <p style="text-align: center;"><b>Developers:</b></p>\n\n\n\n  <p style="text-align: center; color:dimgrey;"><b>Henrique N. Mendes - henriquenunesti@gmail.com</b></p>\n\n  <p style="text-align: center; color:dimgrey;"><b>Israel Gomes - israeljuniorbbl123@gmail.com</b></p>\n\n  <p style="text-align: center; color:dimgrey;"><b>Luciano Cabral - lscabral@gmail.com</b></p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\HybridSum\HybridSum1.1\HybridSumm\HybridSumm1.1\HybridSum1.1\HybridSumm\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map