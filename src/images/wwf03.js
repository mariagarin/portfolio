import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF03() {
 return (
   <StaticImage
     src="../images/wwf03.png"
     alt="WWF03"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}