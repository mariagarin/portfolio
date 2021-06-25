import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF07() {
 return (
   <StaticImage
     src="../images/wwf07.png"
     alt="WWF07"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}