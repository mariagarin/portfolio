import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN10() {
 return (
   <StaticImage
     src="../images/inn10.png"
     alt="INN10"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}