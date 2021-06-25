import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN24() {
 return (
   <StaticImage
     src="../images/inn24.png"
     alt="INN24"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}