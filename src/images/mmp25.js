import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP25() {
 return (
   <StaticImage
     src="../images/mmp25.png"
     alt="MMP25"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}