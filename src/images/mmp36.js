import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP36() {
 return (
   <StaticImage
     src="../images/mmp36.png"
     alt="MMP36"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}