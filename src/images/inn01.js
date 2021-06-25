import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN01() {
 return (
   <StaticImage
     src="../images/inn01.png"
     alt="INN01"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}