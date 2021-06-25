import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN20() {
 return (
   <StaticImage
     src="../images/inn20.png"
     alt="INN20"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}