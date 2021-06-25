import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP09() {
 return (
   <StaticImage
     src="../images/mmp09.png"
     alt="MMP09"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}