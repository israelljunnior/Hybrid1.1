import { Word } from '../word.model';
import { Sentence } from '../sentence.model';
import { removeStopWords } from './stopWords';

export function upperCase(arrayObjectSentence: Sentence[]) {
    
    let numberCases: number = 0
    let regexpUpperCase = new RegExp("^[A-Z\u00C0-\u00FF]","g") //regexp for checking uppercase
    let wordsChecked: string[] = []
    for(let i = 0; i < arrayObjectSentence.length; i++) {
        var wordsSentence: string[] = arrayObjectSentence[i].sentence.match(/(\w|\s)*\w(?=")|[\w\u00C0-\u00FF]+/ig)
        for(let j = 0; j < wordsSentence.length; j++) {
            if(wordsChecked.length > 0){
                let isWordChecked: boolean = false
                wordsChecked.forEach(word => {
                  if(word.toUpperCase() === wordsSentence[j].toUpperCase()) { isWordChecked = true}
                })
                    if(isWordChecked == false) {
                        if(removeStopWords(wordsSentence[j])) {
                            if(wordsSentence[j].match(regexpUpperCase) != null) {
                                let result = wordsSentence[j].match(regexpUpperCase).length
                                numberCases += result
                                arrayObjectSentence[i].upperCases += result
                            }
                        } wordsChecked.push(wordsSentence[j])
                    }
            } else {
                if(removeStopWords(wordsSentence[j])) {
                    if(wordsSentence[j].match(regexpUpperCase) != null) {
                    let result = wordsSentence[j].match(regexpUpperCase).length
                    numberCases += result
                    arrayObjectSentence[i].upperCases += result
                    
                    } wordsChecked.push(wordsSentence[j])
                }
            }
        }   wordsChecked = []
    }
    //add points in final score
    arrayObjectSentence.forEach($s => {
        if($s.upperCases > 0) {
            $s.finalScore += $s.upperCases / numberCases
        }
    })
}