import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF06() {
 return (
   <StaticImage
     src="../images/wwf06.png"
     alt="WWF06"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}