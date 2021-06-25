import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP10() {
 return (
   <StaticImage
     src="../images/mmp10.png"
     alt="MMP10"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}