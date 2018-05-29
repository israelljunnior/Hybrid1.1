import { Word } from './word.model'
import { Sentence } from './sentence.model';
import { removeStopWords, removeHtmlXml } from './scripts/stopWords'
import { frequenceText } from './scripts/wordFrequency'
import { upperCase } from './scripts/upperCase'
import { TFIDF } from './scripts/TFIDF'
import { titleResemblance } from './scripts/titleResemblance'
import { Input } from '@angular/core'


export class Nlp {

    private text: string 
    private title:string 
    private numberSentenceInSummarizied: number
    private textSummarizer: string = ""
    private sentence: string = "";
    private arrayObjectWord: Word[] = []
    private arrayObjectSentence: Sentence[] = []

    
    public nlp(title: any, text: any, nSentences: number) {
       
        this.title = this.removeHtmlXml(title)
        this.text = this.removeHtmlXml(text)
        this.numberSentenceInSummarizied = nSentences
        
        // Methods
        this.splitText(this.text)
        this.createObjectWord()
        this.frequenceText(this.arrayObjectWord, this.arrayObjectSentence)
        this.upperCase(this.arrayObjectSentence)
        this.TFIDF(this.arrayObjectWord, this.arrayObjectSentence)
        this.titleResemblance(this.title, this.arrayObjectSentence)
        this.arrayObjectSentence = this.ranking(this.arrayObjectSentence)
        this.summ(this.arrayObjectSentence, this.numberSentenceInSummarizied)

    }
    // getters and setters 
    public getText(): string { return this.text }
    public setText(newText: string) { this.text = newText }

    public getTitle(): string { return this.title }
    public setTitle(newTitle: string) { this.title = newTitle }
    
    public getTextSummarizer(): any { return this.textSummarizer }
    public setTextSummarizer(newText: string) { this.textSummarizer = newText }
    
    public getArrayObjectWord(): Word[] { return this.arrayObjectWord }
    public eraseArrayObjectWord():void { this.arrayObjectWord = [] }
    public getArrayObjectSentence(): Sentence[] { return this.arrayObjectSentence }
    public eraseArrayObjectSentence():void { this.arrayObjectSentence = [] }
    //constructor(text: string) { this.text = text }
    
    //METHODS
    // remove tags
    public removeHtmlXml(string: string): string {
        string = removeHtmlXml(string)
        return string
    }
    // this method remove all StopWords in text
    public removeStopWords(string: string): string { 
        string = removeStopWords(string)
        return string
    }

    public frequenceText(arrayObjectWord: Word[], arrayObjectSentence: Sentence[]) {
       frequenceText(arrayObjectWord, arrayObjectSentence)
    }

    public upperCase(arrayObjectSentence: Sentence[]) {
        upperCase(arrayObjectSentence)
    }
    
    public TFIDF(arrayObjectWord: Word[], arrayObjectSentence: Sentence[]) {
        TFIDF(arrayObjectWord, arrayObjectSentence)
    }

    public titleResemblance(title: string, arrayObjectSentence: Sentence[]) {
        titleResemblance(title, arrayObjectSentence)
    }
    
    //split text in sentences and create objectSentence
    public splitText(string: string) {
        let indexSentence = 0
        for(let i = 0; i < string.length; i++) {
            
            this.sentence += string[i]  
            
            if(string[i] == "." || string[i] == "?") {
                               
                if('0123456789'.indexOf(string[i+1]) == -1){ //check if fisrt case is a number with point decimal 
                    indexSentence++ //
                    if(string[i+1] == "." && string[i+2] == "."){ // check case with suspension points
                        this.sentence += string[i+1]
                        this.sentence += string[i+2]
                        let objectSentence = new Sentence(this.sentence, indexSentence)
                        this.arrayObjectSentence.push(objectSentence)
                        this.sentence = ""
                        i += 2
                    } else {
                        let objectSentence = new Sentence(this.sentence, indexSentence)
                        this.arrayObjectSentence.push(objectSentence)
                        this.sentence = ""
                    }
                }
            }
        }
    }

    //Create objectWord
    public createObjectWord() {
        let words: string[] = this.text.match(/(\w|\s)*\w(?=")|[\w\u00C0-\u00FF]+/ig) //get all elements in text
        let isWord = new RegExp(/[\w\u00C0-\u00FF]/ig)
        
        for(let i = 0; i < words.length; i++) {
            //these conditions checks if the element in array is a word and stop word
            if(removeStopWords(words[i]) /*&& words[i].match(isWord)*/) { // check if the element is a word and if it is a word
                if(this.arrayObjectWord.length > 0 ) {
                    let wasChecked = false
                    this.arrayObjectWord.forEach($w => {
                     if($w.word.toUpperCase() === words[i].toUpperCase()) { wasChecked = true }   
                    })
                    if(wasChecked === false) {
                        let objectWord = new Word(words[i])
                        this.arrayObjectWord.push(objectWord)
                    }
                } else {
                    let objectWord = new Word(words[i])
                    this.arrayObjectWord.push(objectWord)
                }
            }
        }
    }

    public ranking(arrayObjectSentence:Sentence[]): Sentence[] {

        let ranking: Sentence[] = arrayObjectSentence.sort(function (a , b) { return b.finalScore - a.finalScore})
        
        return ranking

    }

    public summ(arrayObjectSentence: Sentence[], length: number): void {

      let arraySentenceSumm: Sentence[] = []


        for(let i = 0; i < length; i++){
        arraySentenceSumm.push(arrayObjectSentence[i])    
        }
        
        arraySentenceSumm = arraySentenceSumm.sort(function(a , b) { return a.index - b.index})
        
        arraySentenceSumm.forEach($s => {
            this.textSummarizer += $s.sentence
        })

    }





















}