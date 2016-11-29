module.exports = {
	words: function(sentence){
		var newSentence = sentence.replace(/[\n\t]/g, " ").replace(/\s\s+/g, ' ').split(" ");
		var words = {};
		newSentence.map(function(current){
			words[current] = words[current] && !isNaN(words[current]) ? words[current] + 1 : 1; 
		});
	return words;
	}

/*module = {
	exports : { words: "the words function is here" }
}*/

}
