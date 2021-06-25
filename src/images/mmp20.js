import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP20() {
 return (
   <StaticImage
     src="../images/mmp20.png"
     alt="MMP20"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}