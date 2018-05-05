import { removeStopWords, removeHtmlXml } from './stopWords'
import { Sentence } from '../sentence.model';


export function titleResemblance(title: string, arrayObjectSentence: Sentence[]) {
    
   
    
    title = removeStopWords(title)
    title = removeHtmlXml(title)
    let titleWords: string[] = title.match(/(\w|\s)*\w(?=")|[\w\u00C0-\u00FF]+/g) 
    
    for(let j = 0; j < arrayObjectSentence.length; j++) {
        let wordsChecked: string[] = []
        let NTW: number = 0
        for(let i = 0; i < titleWords.length; i++){
            if(wordsChecked.length > 0 ){
                let isWordChecked: boolean = false
                wordsChecked.forEach(word => {
                  if(word.toUpperCase() === titleWords[i].toUpperCase()) { isWordChecked = true}
                })
                if(isWordChecked == false) {
                    let regex =  new RegExp("\\b"+titleWords[i].toUpperCase()+"\\b","g")
                    if(arrayObjectSentence[j].sentence.toUpperCase().match(regex) !== null) {
                        NTW++
                    }
                    if(NTW > 0){
                        alert(NTW)
                        alert(titleWords.length+"title length")
                        arrayObjectSentence[j].titleResemblance += NTW / titleWords.length
                        arrayObjectSentence[j].finalScore +=  NTW / titleWords.length
                    }
                wordsChecked.push(titleWords[i])
                }
            }   else { 
                let regex =  new RegExp("\\b"+titleWords[i].toUpperCase()+"\\b","g")
                if(arrayObjectSentence[j].sentence.toUpperCase().match(regex) !== null) {
                    NTW++
                }
                if(NTW > 0){
                    alert(NTW)
                    alert(titleWords.length+"title length")
                    arrayObjectSentence[j].titleResemblance += NTW / titleWords.length
                     arrayObjectSentence[j].finalScore += NTW / titleWords.length
                }
                wordsChecked.push(titleWords[i])
            }
    
        }
    
    }


}