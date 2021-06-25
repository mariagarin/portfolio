import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN08() {
 return (
   <StaticImage
     src="../images/inn08.png"
     alt="INN08"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}