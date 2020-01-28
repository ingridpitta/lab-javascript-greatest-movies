/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

orderByYear = array => {
  const newSortArray = JSON.parse(JSON.stringify(array));

  newSortArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return newSortArray;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

howManyMovies = array => {
  let dramaMovies = array.filter(element => {
    return element.genre.includes("Drama");
  });

  let spielbergDramaMovies = dramaMovies.filter(element => {
    return element.director.includes("Steven Spielberg");
  });

  if (array.length === 0) {
    return 0;
  } else if (spielbergDramaMovies.length === 0) {
    return 0;
  }

  return spielbergDramaMovies.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

orderAlphabetically = array => {
  const orderedArray = [];

  const copiedArray = [...array];

  let alphabeticOrder = copiedArray.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title === b.title) {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  let twentyFirst = alphabeticOrder.slice(0, 20);
  twentyFirst.map(film => orderedArray.push(film.title));

  return orderedArray;
};
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

ratesAverage = array => {
  if (array.length === 0) {
    return 0;
  }

  let sum = array.reduce((acc, movie) => {
    return acc + Number(movie.rate ? movie.rate : 0);
  }, 0);

  let average = (sum / array.length).toFixed(2);

  return Number(average);
};
// Iteration 5: Drama movies - Get the average of Drama Movies

dramaMoviesRate = array => {
  let dramaMovies = array.filter(element => {
    return element.genre.includes("Drama");
  });

  return ratesAverage(dramaMovies);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

turnHoursToMinutes = array => {
  let arr = JSON.parse(JSON.stringify(array));

  arr.map(movie => {
    let splitedArray = movie.duration.split("h")[0];
    let hour;
    let min;

    if (isNaN(splitedArray)) {
      hour = 0;
      min = Number(splitedArray.split("min")[0]);
    } else {
      hour = Number(splitedArray * 60);
      if (movie.duration.split("h")[1] !== "") {
        min = Number(movie.duration.split("h")[1].split("min")[0]);
      } else {
        min = 0;
      }
    }
    movie.duration = hour + min;
  });

  return arr;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

bestYearAvg = array => {
  if (array.length === 0) {
    return null;
  }

  if (array.length === 1) {
    return `The best year was ${array[0].year} with an average rate of ${array[0].rate}`;
  }
};
