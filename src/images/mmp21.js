import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP21() {
 return (
   <StaticImage
     src="../images/mmp21.png"
     alt="MMP21"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}