import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP05() {
 return (
   <StaticImage
     src="../images/mmp05.png"
     alt="MMP05"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}