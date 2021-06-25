import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP12() {
 return (
   <StaticImage
     src="../images/mmp12.png"
     alt="MMP12"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}