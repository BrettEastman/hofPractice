// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });
  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(num, index, collection) {
    if (num % 5 === 0) {
      count++;
    }
  });
  return count;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userTweets = [];
  _.each(tweets, function(item, index, collection) {
    if (item.user === user) {
      userTweets.push(item);
    }
  });
  return userTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var tFruit = _.filter(fruits, function(item) {
    return item === targetFruit;
  });
  return tFruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var pFruit = _.filter(fruits, function(item) {
    return item[0] === letter;
  });
  return pFruit;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var cDesserts = _.filter(desserts, function(item) {
    return item.type === 'cookie';
  });
  return cDesserts;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  var userTweets = _.filter(tweets, function(item) {
    return item.user === user;
  });
  return userTweets;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  var upper = _.map(fruits, function(item) {
    return item.toUpperCase();
  });
  return upper;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var gFree = _.map(desserts, function(item) {
    var ingredArr = item.ingredients;
    if (_.contains(ingredArr, 'flour') === true) {
      item['glutenFree'] = true;
    } else {
      item['glutenFree'] = false;
    }
    return item;
  });
  return gFree;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  var messages = _.map(tweets, function(item) {
    return item.message;
  });
  return messages;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var grocerySale = _.map(groceries, function(item) {
    var fullPrice = Number.parseFloat(item.price.slice(1)) * 100;
    var discount = fullPrice * coupon;
    item['salePrice'] = '$' + ((fullPrice - discount) / 100).toFixed(2);
    return item;
  });
  return grocerySale;
};

// var applyCoupon = function (groceries, coupon) {
//   var grocerySale = _.map(groceries, function(item) {
//     var fullPrice = Number.parseInt((Number.parseFloat(item.price.slice(1)).toFixed(2)) * 100);
//     console.log(fullPrice);
//     var discount = fullPrice * coupon;
//     item['salePrice'] = (fullPrice - discount) / 100;
//     return item;
//   });
//   console.log(grocerySale);
//   return grocerySale;
// };


/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {

};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {

};
