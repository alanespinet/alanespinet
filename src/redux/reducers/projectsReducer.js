const defaultState = {
  projects: [
    {
      key: 'react-ive-restaurant',
      title: 'React-ive Restaurant',
      type: 'Web Application',
      technologies: ['React.js', 'MongoDB', 'Express.js', 'Node.js', 'SASS'],
      keywords: ['MERN', 'JavaScript', 'Application', 'Web Application', 'ES6'],
      template: '',
      image: 'react-ive_restaurant.jpg',
      liveUrl: 'https://reactiverestaurant.herokuapp.com/'
    }, {
      key: 'ryder-trauma-center',
      title: 'Ryder Trauma Center',
      type: 'Website',
      technologies: ['PHP', 'Wordpress', 'JavaScript', 'CSS'],
      keywords: ['Wordpress', 'CMS'],
      template: '',
      image: 'ryder_trauma_center.jpg',
      liveUrl: 'http://rydertraumacenter.org/'
    }, {
      key: 'forest-ninja',
      title: 'Forest Ninja vs Aliens',
      type: 'Videogame',
      technologies: ['Unity 3D', 'C#', '.NET'],
      keywords: ['Videogame', 'Unity'],
      template: '',
      image: 'forest_ninja_vs_aliens.jpg',
      liveUrl: ''
    }
  ]
};

export default ( state = defaultState, action ) => {
  switch( action.type ){
    default:
      return state;
  }
};
