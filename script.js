let userName = prompt('What is your name?')

alert(`Hey ${userName}!`)
const startGame = () => {
  let userPlay = confirm('Do you want to play a game?')
  playGame(userPlay)
}

const playGame = (choice) => {
  if (choice) {
    alert('Do you like scary movies?')
    scaryMovies()
  } else {
    alert('No... you better leave!')
  }
}
// Opening Question
//
//
const scaryMovies = () => {
  let scaryMovies = prompt('Do you like Slashers, Gory, Zombie?')
  //Slasher choices
  //
  //
  if (scaryMovies === 'Slashers') {
    let slashers = prompt('Who do you prefer? Michael Myers or Jason Vorhees?')

    // Enter Michael Myers questions
    //
    //
    if (slashers === 'Michael Myers') {
      let michael = prompt('Do you like the original or the remake?')
      if (michael === 'original') {
        alert('Nice, you like the classics')
        startGame()
      } else if (michael === 'remake') {
        alert('Eh, you have bad taste in movies.')
        startGame()
        //Enter Jason Vorhees questions
        //
        //
      }
    } else if (slashers === 'Jason Vorhees') {
      alert('Nice, he is a a good choice!')
      startGame()
    } else {
      alert('That was not a choice. Your dead')
    }

    //Gory Section
    //
    //
  } else if (scaryMovies === 'Gory') {
    let gore = prompt('Do you like Scream or Saw?')
    if (gore === 'Scream') {
      const number = prompt(
        'How may killers were there in the original Scream? 1, 2 or 3?'
      )
      //Switch questions
      switch (number) {
        case '1':
          alert('WRONG!!! Doesnt seem like you know your horror movies...')
          startGame()
          break
        case '2':
          alert('CORRECT! It looks like you will live.')
          startGame()
          break
        case '3':
          alert('WRONG!!! There were 2 killers in the original Billy and Stu!')
          startGame()
          break
      }

      //Gore section
      //problem had gore spelt as gory in else if ** Fixed
    } else if (gore === 'Saw') {
      let saw = prompt('Do you like Jigsaw? (Y/N)')
      if (saw === 'Y') {
        alert('Nice he is a good villain')
        startGame()
      } else if (saw === 'N') {
        alert('Then you just like the traps and gore.')
        startGame()
      }
    } else {
      alert('That is not a choice. You lose.')
      startGame()
    }
    // Zombie section
  } else if (scaryMovies === 'Zombie') {
    let zombie = prompt('Do you like The Walking Dead, Dracula or Blade?')
    if (zombie === 'The Walking Dead') {
      let wd = prompt('Do you prefer the Comics or the Show?')
      if (wd === 'Comics') {
        alert('The comics are great!')
        startGame()
      }
      if (wd === 'Show') {
        alert('Eh the show started strong but not as good as the comics!')
        startGame()
      }
      if ((zombie = 'Dracula')) alert('WHAT??? Hes not even a Zombie!!!')
      startGame()
    }
    if (zombie === 'Blade') {
      alert('He does not hunt ZOMBIES!! But a good choice!!')
      startGame()
    } else {
      alert('Incorrect')
    }
  }
}

startGame()

//Tough assignment.
