import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP32() {
 return (
   <StaticImage
     src="../images/mmp32.png"
     alt="MMP32"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}