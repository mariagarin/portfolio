import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP07() {
 return (
   <StaticImage
     src="../images/mmp07.png"
     alt="MMP07"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}