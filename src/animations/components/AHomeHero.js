import { TweenMax, TimelineLite, TimelineMax } from 'gsap/all';


export default () => {
  let t1 = new TimelineLite();

  let text = document.querySelector('.home__hero__overlay__website-presentation p').innerHTML;
  let presentationLetters = [];
  let innerHTML = '';

  for(let i = 0; i < text.length; i++){
    let character = text.charAt(i);
    if( character === ' ' ) character = '&nbsp;';

    presentationLetters.push(`<span>${character}</span>`);
    innerHTML += `<span>${character}</span>`;
  }

  document.querySelector('.home__hero__overlay__website-presentation p').innerHTML = innerHTML;

  let wrapper = document.querySelector('.home__hero__overlay__website-title');
  let shadow = document.querySelector('.home__hero__overlay__website-title__shadow');
  let headline = document.querySelector('.home__hero__overlay__website-title__content-wrapper');
  let presentation = document.querySelector('.home__hero__overlay__website-presentation');
  let letters = document.querySelectorAll('.home__hero__overlay__website-presentation p span');

  t1.from(wrapper, 1, { opacity: 0, delay: 0.5 });
  t1.from(shadow, 1, { opacity: 0 }, "-=0.7");
  t1.from(headline, 2, { opacity: 0, scale: 1.4, ease: Elastic.easeOut }, "-=0.3");
  t1.staggerFrom( letters, 1, { opacity: 0, color: "#008080", ease: Elastic.easeOut }, .02, "-=1");

  let t2 = new TimelineMax({ repeat: -1, repeatDelay: 1, delay: 7.5 });
  t2.staggerTo('.home__hero__overlay__down-arrow', .5, { opacity: 0.8, ease: Power2.easeOut }, 0.2);
  t2.staggerTo('.home__hero__overlay__down-arrow', .5, { opacity: 0, ease: Power2.easeOut }, 0.2, "-=.4");

  let t3 = new TimelineMax({ repeat: -1, delay: 1 });
  t3.to(shadow, 20, { x: "-=10", y: "-=10" });
  t3.to(shadow, 20, { x: "+=10", y: "+=10" });
};
