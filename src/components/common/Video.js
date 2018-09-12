import React from 'react';

/** Video Component
 *    prop: poster -> URL to use as a poster for the video
 *    prop: src -> URL for the mp4 video to show
 *    prop: width -> width of the video
 *    prop: height -> height of the video
 */

 
const Video = props => (
  <video width={props.width} autoPlay muted loop poster={props.poster}>
    <source src={props.src} type="video/mp4" />
  </video>
)

export default Video;
