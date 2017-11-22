//FILTER and MAP
// Chaining the filter and map methods together to show only the years in the 21st Century
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears = years
  .filter(year => year >= 2001)
  .map(year => `${year} A.D.`);
console.log(displayYears);
//["2015 A.D.", "2013 A.D.", "2012 A.D."]

//FILTER and MAP
//using filter and reduce to display unfinishedTasks
const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks = todos
  .filter(todo => todo.done === false)
  .map(todo => todo.todo);
console.log(unfinishedTasks);
// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]