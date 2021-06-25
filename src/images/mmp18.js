import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP18() {
 return (
   <StaticImage
     src="../images/mmp18.png"
     alt="MMP18"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}