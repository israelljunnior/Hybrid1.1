function titleResemblance(wordsTitle, arrayObjectSentence){
    var titleLength = wordsTitle.length;
    alert(titleLength);
    
    for(j = 0; j < arrayObjectSentence.length; j++){
        var NTw = 0;
    
        for(i = 0; i < titleLength; i++){
            
            if(arrayObjectSentence[j].sentence.toUpperCase().match("\\b"+wordsTitle[i].toUpperCase()+"\\b", 'g') != null){
                NTw++;
                
            }

        }
        if(NTw > 0){
            alert(NTw);
            arrayObjectSentence[j].tr += NTw / titleLength;
           
        }        
    }
}