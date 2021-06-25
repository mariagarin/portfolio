import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP17() {
 return (
   <StaticImage
     src="../images/mmp17.png"
     alt="MMP17"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}