const defaultState = [
  {
    name: 'webapplications',
    printedTitle: 'Web Applications',
    image: 'webapplicationshero.jpg',
    projects: [{
      title: 'Reactive Restaurant',
      image: '/images/projects/listings/reactiverestaurant.jpg',
      description: 'Full MERN case of study that simulates the front and back instances of a given restaurant. Besides the normal menu, it also has an administration panel in /admin where you (for inspection purposes) can login using (admin, admin) and play with reservations data',
      technologies: 'React, Redux, Node, Express, Mongo, SASS',
      url_text: 'Live URL',
      url: 'https://reactiverestaurant.herokuapp.com/'
    }, {
      title: 'Rubik Agorithms Guide',
      image: '/images/projects/listings/rubiks.jpg',
      description: 'Application that stores the most common solving algorithms for a decent set of different Rubik Cubes (I got tired of looking everywhere each time I wanted to solve a specific cube, so I created this one to have an \'all in one place\' summary)',
      technologies: 'React, Redux, Node, Express',
      url_text: 'Live URL',
      url: 'http://rubikalgsguide.herokuapp.com/'
    }, {
      title: 'My URLs DBase',
      image: '/images/projects/listings/urlsdbase.jpg',
      description: 'My first React application. Created to store and handle desired URLs (I hate to trust the favorites system of the browsers). Uses Google authentication system',
      technologies: 'React, Redux, Node, Express, Firebase, SASS',
      url_text: 'Live URL',
      url: 'http://urlsdbase.herokuapp.com/urls'
    }, {
      title: 'Chunks',
      image: '/images/projects/listings/mychunksdbase.jpg',
      description: 'Applications created to store, revise, filter and handle all kinds of code chunks. This is an application I use everyday in my hour-to-hour work. Uses Google authentication system',
      technologies: 'React, Redux, Node, Express, Firebase, SASS',
      url_text: 'Live URL',
      url: 'https://mychunksdbase.herokuapp.com/chunks'
    }]
  }, {
    name: 'websites',
    printedTitle: 'Websites',
    image: 'websiteshero.jpg',
    projects: []
  }, {
    name: 'videogames',
    printedTitle: 'Video Games',
    image: 'videogameshero.jpg',
    projects: [{
      title: 'Forest Ninja vs Aliens',
      image: '/images/projects/listings/forestninja.jpg',
      description: 'Fully 2D mini video game created just with the goal to test the true force of Unity\'s 2D Framework. Compiled only for Android.',
      technologies: 'Unity 3d, C#, Adobe Photoshop',
      url_text: 'View Sample',
      url: 'https://www.youtube.com/watch?v=yl2CAkpDtOc'
    }, {
      title: 'Tetris',
      image: '/images/projects/listings/tetris.jpg',
      description: 'Own version of a Tetris game explained within an Udemy course, in order to explore the dynamics of creating board games with Unity.',
      technologies: 'Unity 3d, C#, Adobe Photoshop',
      url_text: 'View Sample',
      url: 'https://www.youtube.com/watch?v=X3aD0w9T9L8'
    }]
  }
];

export default (state = defaultState, action) => {
  switch(action.type){

    default:
      return state;
  }
}
