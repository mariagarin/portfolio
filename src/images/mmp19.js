import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP19() {
 return (
   <StaticImage
     src="../images/mmp19.png"
     alt="MMP19"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}