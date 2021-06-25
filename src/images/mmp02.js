import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP02() {
 return (
   <StaticImage
     src="../images/mmp02.png"
     alt="MMP02"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}