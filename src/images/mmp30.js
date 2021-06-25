import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP30() {
 return (
   <StaticImage
     src="../images/mmp30.png"
     alt="MMP30"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}