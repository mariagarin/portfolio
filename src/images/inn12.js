import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN12() {
 return (
   <StaticImage
     src="../images/inn12.png"
     alt="INN12"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}