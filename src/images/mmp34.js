import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP34() {
 return (
   <StaticImage
     src="../images/mmp34.png"
     alt="MMP34"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}