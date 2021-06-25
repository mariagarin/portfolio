import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP39() {
 return (
   <StaticImage
     src="../images/mmp39.png"
     alt="MMP39"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}