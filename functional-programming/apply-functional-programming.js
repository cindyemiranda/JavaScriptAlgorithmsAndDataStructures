/**
 * Apply Functional Programming to Convert Strings to URL Slugs

 * @param {*} title 
 * @returns 
 */
// Only change code below this line
function urlSlug(title) {
    const newArr= title.split(/\W/);
    const depArr= newArr.filter(function(word){
      if(word!==''){
        return word;
      }
    });
    let url=depArr.join('-');
    url=url.toLowerCase();
    console.log(url);
    return url;
  }
  // Only change code above this line
  urlSlug(" Winter Is  Coming");