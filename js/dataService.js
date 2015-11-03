app.service('dataService', function(){
  if(!localStorage.quotes){
  var quotes = [
                { text: 'Life isn\'t about getting and having, it\'s about giving and being.',
                author: 'Kevin Kruse'},
                { text: 'Whatever the mind of man can conceive and believe, it can achieve',
                author: 'Napoleon Hill'},
                { text: 'Strive not to be a success, but rather to be of value.',
                author: 'Albert Einstein'},
                { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
                author: 'Robert Frost'},
                { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
                author: 'Amelia Earhart'},
                { text: 'Life is what happens to you while you\'re busy making other plans.',
                author: 'John Lennon'},
                { text: 'What even is a jQuery?',
                author: 'Tyler S. McGinnis'}
               ];
    localStorage.quotes = JSON.stringify(quotes);
  } else {
    var quotes = JSON.parse(localStorage.quotes);
    console.log(quotes);
  }
  this.getData = function(){
    return quotes;
  };
  this.addData = function(data){
    var obj = {};
    for(var prop in data){
       obj[prop] = data[prop];
    }
    quotes.unshift(obj);
    localStorage.quotes = JSON.stringify(quotes);
  }
  this.removeData = function(text){
    var len = quotes.length;
    for(var i = 0; i < quotes.length; i++){
      if(quotes[i].text === text || quotes[i].author === text){
        quotes.splice(i, 1);
      }
    }
    localStorage.quotes = JSON.stringify(quotes);
  }
})
