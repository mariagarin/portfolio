import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP42() {
 return (
   <StaticImage
     src="../images/mmp42.png"
     alt="MMP42"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}