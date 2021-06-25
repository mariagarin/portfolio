import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN16() {
 return (
   <StaticImage
     src="../images/inn16.png"
     alt="INN16"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}