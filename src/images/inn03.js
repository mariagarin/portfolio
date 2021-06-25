import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN03() {
 return (
   <StaticImage
     src="../images/inn03.png"
     alt="INN03"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}