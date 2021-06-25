import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN22() {
 return (
   <StaticImage
     src="../images/inn22.png"
     alt="INN22"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}