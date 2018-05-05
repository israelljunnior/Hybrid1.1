import { Word } from '../word.model';
import { Sentence } from '../sentence.model';

export function frequenceText(arrayObjectWord: Word[], arrayObjectSentence: Sentence[]) {

    for(let i = 0; i < arrayObjectWord.length; i++){

        for(let j = 0; j < arrayObjectSentence.length; j++) {
            let regex = new RegExp("\\b"+arrayObjectWord[i].word+"\\b","g")
            let result = arrayObjectSentence[j].sentence.match(regex)
            arrayObjectWord[i].numberSentence.push(arrayObjectSentence[j].index)
            if(result !== null) {
                arrayObjectWord[i].frequenceSen.push(result.length)
                arrayObjectSentence[j].amountWordsSentence += 1 
                arrayObjectWord[i].frequenceText += result.length
            } else arrayObjectWord[i].frequenceSen.push(0) 
        }
    }

}