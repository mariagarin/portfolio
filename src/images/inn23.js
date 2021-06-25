import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN23() {
 return (
   <StaticImage
     src="../images/inn23.png"
     alt="INN23"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}