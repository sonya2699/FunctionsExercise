// FunctionsExercise

// #1
function spookyGhost(){
console.log(`Boo!!!`);
}
spookyGhost();

// #2
function candy(goal){
    console.log(`${candy}`);
    console.log(`${candy}`);
    console.log(`${candy}`);
    console.log(`${candy}`);
  }
  candy(`Get Candy`);

  // #3
  function werewolf(a, b){
    if (`Full`=== a && `Moon` === b); 
    {
      console.log(`ARH-WOOD!`);
    } 
  };
   werewolf(`Full`,`moon`);

  // #4
  function halloween (){
    console.log(`October 31st`);
    return;
  }
  halloween();

  // #5
  function isEnoughCandy(pieces) {
    if (pieces >= 31){
      return `true`;
    } else if(pieces <= 31)
      return `false`;
    }
  console.log(isEnoughCandy(31)); 

  // #6
  function candyCounter (nums){
    let total = 0;
    for (n of nums){
      total = total + n;
    }
    return total;
  }
  console.log(candyCounter([15,20,30,40]));
  console.log(candyCounter([100, 200]));

  // #7
  const hauntedMansion = function(){
    console.log("Welcome,foolish mortals,to the Haunted Mansion!");
  }
  hauntedMansion();

  // #8
  ghostBusters = () => `Who you gonna call?`
  console.log(ghostBusters());

  // #9
  // No

  // #10
  // yes

  // #11a
  const constumes = [
    "Ghost",
    "Princess",
     "Pirate"
  ]

  // #11b
  // const upperCostumes = costumes.map (costumes => costumes.toUpperCase());
  // console.log(upperCostumes);


  // Bonus
  // #12
const stephenKingMovies = [
  "The Shining",
  "Christine",
  "It",
  "The Mist",
  "Creepshow",
  "Pet Sematary"
];

  
  //  #12b
  const twoMovies = stephenKingMovies.filter(i => i.length === 9);

  console.log(twoMovies);

  // #13a
  const halloweenSongs1 = [
    "Monster Mash",
    "Thriller"
];

// 13b
const halloweenSongs2 = [
  "I Put A Spell On You", 
  "This Is Halloween", 
  "Ghostbusters"
];

// #13c
halloweenJukeBox=(songs)=>{
  const random = Math.floor(Math.random()*songs.length);
  console.log(songs[random]);
};

// #13d
halloweenJukeBox(halloweenSongs1);
halloweenJukeBox(halloweenSongs2);

// #14
caps = (string) => {for (i=0; i < string.length; i+=2){string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i+1);}
return string;
};
