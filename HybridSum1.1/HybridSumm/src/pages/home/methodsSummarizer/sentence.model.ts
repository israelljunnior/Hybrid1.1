export class Sentence {

    constructor(sentence: string, index: number) { this.sentence = sentence; this.index = index}

    sentence: string = ""
    index: number 
    amountWordsSentence = 0
    TFIDFScore: number = 0 
    upperCases:number = 0
    titleResemblance: number = 0
    finalScore:number = 0

}