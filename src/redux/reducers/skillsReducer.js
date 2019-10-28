const defaultState = {
  general: [
    'C++',
    'C#',
    'OOP',
    'Functional Programming',
    'WCAG 2.0',
    'Git'
  ],
  front_end: [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript (with ES6 and ES7)',
    'React.js',
    'jQuery',
    'Bootstrap'
  ],
  back_end: [
    'Node.js and Express.js',
    'GraphQL',
    'MongoDB and Mongoose',
    'Firebase',
    'PHP',
    'Wordpress',
    'SQL'
  ],
  videogames: [
    'Unity 3d',
    'C# oritented to Unity 3d Programming Framework'
  ]
}

export default (state = defaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
};
