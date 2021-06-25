import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN04() {
 return (
   <StaticImage
     src="../images/inn04.png"
     alt="INN04"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}