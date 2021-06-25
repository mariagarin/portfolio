import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN05() {
 return (
   <StaticImage
     src="../images/inn05.png"
     alt="INN05"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}