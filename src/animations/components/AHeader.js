import { TweenMax } from 'gsap/all';

export const menuEntry = () => {
  setTimeout( () => { document.querySelector('.header__options').style.display = 'block' }, 1 );
  TweenMax.staggerTo( '.header__options li', .3, { opacity: 1, left: 0, delay: .2 }, .05 );
};

export const menuOut = () => {
  TweenMax.to( '.header__options li', .1, { opacity: 0, left: -800 } );
  setTimeout( () => { document.querySelector('.header__options').style.display = 'none' }, 450 );
};
