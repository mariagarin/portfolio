import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP24() {
 return (
   <StaticImage
     src="../images/mmp24.png"
     alt="MMP24"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}