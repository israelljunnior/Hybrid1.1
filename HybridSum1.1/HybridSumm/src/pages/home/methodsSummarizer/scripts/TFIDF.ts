import { Sentence } from '../sentence.model';
import { Word } from '../word.model';

export function TFIDF(arrayObjectWord: Word[], arrayObjectSentence: Sentence[]) {

    for(let i = 0; i < arrayObjectSentence.length; i++) {

        for(let j = 0; j < arrayObjectWord.length; j++) {
            if(arrayObjectWord[j].frequenceSen[i] > 0) {
                let tfidf: number = TF(arrayObjectWord[j], arrayObjectSentence[i], i)
                    * IDF(arrayObjectWord[j], arrayObjectSentence)
                arrayObjectWord[j].TFIDF.push(tfidf)
                arrayObjectSentence[i].TFIDFScore += tfidf
                arrayObjectSentence[i].finalScore += tfidf 
            } else {
                arrayObjectWord[j].TFIDF.push(0)
            }
        }
    }
    
}   

function TF(objectWord: Word, objectSentence: Sentence, i: number) {
    
    return Math.log(1+
        (objectWord.frequenceSen[i] / objectSentence.amountWordsSentence))
}

function IDF(objectWord: Word, arrayObjectSentence: Sentence[]) {

    let sentenceWithObjectWord = 0;
    
    for(let l = 0; l < objectWord.numberSentence.length; l++){
        if(objectWord.frequenceSen[l] > 0) sentenceWithObjectWord++;  
    }
    
    return Math.log(arrayObjectSentence.length / sentenceWithObjectWord);

}