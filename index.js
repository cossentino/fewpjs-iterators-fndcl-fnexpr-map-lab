const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const capTutorials = tutorials.map(tutorial => capitalizeString(tutorial))
  return capTutorials
}





function capitalizeString(str) {
  const splitStr = str.split(" ")
  const fixedStrArray = splitStr.map(function(word) {
    const capLetter = word[0].toUpperCase()
    return `${capLetter + word.slice(1)}` 
  })
  return fixedStrArray.join(" ")
}