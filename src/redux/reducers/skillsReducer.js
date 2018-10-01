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
    'JavaScript (includes ES6)',
    'React.js',
    'jQuery',
    'Bootstrap'
  ],
  back_end: [
    'Node.js',
    'Express.js',
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
