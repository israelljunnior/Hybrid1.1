export class Word {

    constructor(word: string) { this.word = word }

    word: string
    numberSentence: number[] = []
    frequenceSen: number[] = []
    frequenceText:number = 0
    TFIDF: number[] = []

}