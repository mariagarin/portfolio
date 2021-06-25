import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP15() {
 return (
   <StaticImage
     src="../images/mmp15.png"
     alt="MMP15"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}