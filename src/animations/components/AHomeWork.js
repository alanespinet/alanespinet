// import { TimelineMax } from 'gsap/all';
//
// let aHomeWork_scrollPoint = 0;
// let aHomeWork_worksOnScreen = false;
// let aHomeWork_offsetTop = null;
// let aHomeWork_offsetTl;
//
// export default () => {
//   aHomeWork_offsetTop = document.getElementById('home__work').offsetTop;
//   aHomeWork_offsetTl = new TimelineMax({ paused: true });
// }
//
// const aHomeWork_showWhenScroll = e => {
//   if(!aHomeWork_worksOnScreen){
//     aHomeWork_scrollPoint = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//     if(aHomeWork_offsetTop - aHomeWork_scrollPoint < 400){
//       aHomeWork_offsetTl.play();
//       aHomeWork_worksOnScreen = true;
//     }
//   }
// }
//
// window.onload = aHomeWork_showWhenScroll;
// window.onscroll = aHomeWork_showWhenScroll;
