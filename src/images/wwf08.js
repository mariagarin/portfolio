import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF08() {
 return (
   <StaticImage
     src="../images/wwf08.png"
     alt="WWF08"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}