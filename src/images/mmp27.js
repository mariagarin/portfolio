import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP27() {
 return (
   <StaticImage
     src="../images/mmp27.png"
     alt="MMP27"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}