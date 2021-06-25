import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN18() {
 return (
   <StaticImage
     src="../images/inn18.png"
     alt="INN18"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}