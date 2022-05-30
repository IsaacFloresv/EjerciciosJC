function sing(){
    let song='';
    for (i = 0; i < 4; i++) {
        song += 'let it be, ';
    }
    song += 'whisper words of wisdom, ';
    for (i = 0; i < 5; i++) {
        song += 'let it be, ';
    }
    song += 'there will be an answer, ';
    return song += 'let it be';
}
console.log(sing());