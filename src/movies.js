// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies
      .filter((movie) => movie.director)
      .map((movie) => movie.director);
    const uniqueDirectors = directors.filter((element, index, array) => array.indexOf(element) === index);
    
    return uniqueDirectors;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someMovies) {
    return someMovies.filter(
      (eachMovie) =>
        eachMovie.director === "Steven Spielberg" &&
        eachMovie.genre.includes("Drama")
    ).length;
  }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

    function scoresAverage(moviesArray) {
    
        if (!moviesArray.length) {
          return 0;
        }
      
        let total = moviesArray.reduce((a, b) => {
            if(!b.score){
                return a;
            }
            return a + b.score
        }, 0)
      
        return Number((total / moviesArray.length).toFixed(2));
      }

// Iteration 4: Drama movies - Get the average of Drama Movies


    function dramaMoviesScore(movies) {
        const dramaMovies = movies.filter((movie) => {
          return movie.genre.includes('Drama');
        });
        averageScore = scoresAverage(dramaMovies);
        return averageScore;
      }
      
   


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray];
    newArray.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
        if (a.title > b.title) {
          return 1;
        } else if (b.title > a.title) {
          return -1;
        }
        return 0;
      }
    });
    return newArray;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(moviesArray) {
        return moviesArray.map((eachMovie) => eachMovie.title)
          .sort((a, b) => a.localeCompare(b))
          .slice(0, 20);
      }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let newCentArray = movies.map(oneMovie => {
      let newMovie = {};
      newMovie.title = oneMovie.title;
      newMovie.year = oneMovie.year;
      newMovie.director = oneMovie.director;
      newMovie.duration = convertDuration(oneMovie.duration);
      newMovie.genre = oneMovie.genre;
      newMovie.rate = oneMovie.rate;
  
      return newMovie;
    });
  
    return newCentArray;
  

    function convertHours(hourString) {
        let calculateHour = hourString.split('h');
        return calculateHour[0] * 60;
      }
      
      function convertMinutes(minuteString) {
        let calculateMinutes = minuteString.split('min');
        return Number(calculateMinutes[0]);
      }
      
      function convertDuration(duration) {
        let timePieces = duration.split(' ');
        let minutes = timePieces.reduce((sum, onePiece) => {
          if (onePiece.includes('h')) {
            return sum + convertHours(onePiece);
          }
          return sum + convertMinutes(onePiece);
        }, 0);
      
        return minutes;
      }
   }
    
      
     
    
    



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
      if (!moviesArray.length) {
          return null;
        }
}






