import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF05() {
 return (
   <StaticImage
     src="../images/wwf05.png"
     alt="WWF05"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}