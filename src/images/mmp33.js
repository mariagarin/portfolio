import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP33() {
 return (
   <StaticImage
     src="../images/mmp33.png"
     alt="MMP33"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}