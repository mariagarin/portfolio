import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF04() {
 return (
   <StaticImage
     src="../images/wwf04.png"
     alt="WWF04"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}