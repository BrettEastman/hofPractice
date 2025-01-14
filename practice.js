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
  var fruitsArr = [];
  _.each(fruits, function(item, i, array) {
    fruitsArr.push(item);
  });
  return fruitsArr;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var multOf5 = 0;
  _.each(numbers, function(item, i, array) {
    if (item % 5 === 0) {
      multOf5++;
    }
  });
  return multOf5;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var tweetArr = [];
  _.each(tweets, function(item, i, array) {
    if (item.user === user) {
      tweetArr.push(item);
    }
  });
  return tweetArr;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function (item, i, collection) {
    return item === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(item, i, collection) {
    return item[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function (item, i, collection) {
    return item.type === 'cookie';
  });
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(item, i, collection) {
    return item.user === user;
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(item, i, collection) {
    return item.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var result = _.map(desserts, function(item, i, collection) {
    if (item.ingredients.indexOf('flour') > -1) {
      item['glutenFree'] = false;
      return item;
    } else {
      item['glutenFree'] = true;
      return item;
    }
  });
  return result;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function(item, i, collection) {
    return item.message;
  });
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
  return _.map(groceries, function(item, i, collection) {
    var newPrice = Number.parseInt(Number.parseFloat(item.price.slice(1)).toFixed(2) * 100);
    var discount = Math.round(newPrice * coupon);
    item.salePrice = '$' + (newPrice - discount) / 100;
    return item;
  });
};


/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (groceries) {
  return _.reduce(groceries, function(acc, item, i, collection) {
    return acc += Number.parseFloat(item.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  _.reduce(desserts, function(acc, item, i, collection) {
    // console.log('acc: ', acc, 'item: ', item, 'i: ', i);
    if (dessertTypes[item.type] === undefined) {
      dessertTypes[item.type] = 1;
    } else {
      dessertTypes[item.type]++;
    }
  }, dessertTypes = {});
  return dessertTypes;
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
  _.reduce(tweets, function(acc, item, i, collection) {
    if (tweetCountPerUser[item.user] === undefined) {
      tweetCountPerUser[item.user] = 1;
    } else {
      tweetCountPerUser[item.user]++;
    }
  }, tweetCountPerUser = {});
  return tweetCountPerUser;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  _.reduce(movies, function(acc, item, i, collection) {
    if (item.releaseYear >= 1990 & item.releaseYear <= 2000) {
      nintiesMovies.push(item.title);
    }
  }, nintiesMovies = []);
  return nintiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  var bool = false;
  _.reduce(movies, function(acc, item, i, collection) {
    if (item.runtime < timeLimit) {
      bool = true;
    }
  });
  return bool;
};

// var movieNight = function (movies, timeLimit) {
//   _.reduce(movies, function(acc, item, i, collection) {
//     runtimeArr.push(item.runtime < timeLimit);
//   }, runtimeArr = []);
//   return runtimeArr.includes(true);
// };
