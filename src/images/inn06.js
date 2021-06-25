import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN06() {
 return (
   <StaticImage
     src="../images/inn06.png"
     alt="INN06"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}