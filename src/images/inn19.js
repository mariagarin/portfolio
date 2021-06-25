import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN19() {
 return (
   <StaticImage
     src="../images/inn19.png"
     alt="INN19"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}