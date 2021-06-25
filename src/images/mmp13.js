import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP13() {
 return (
   <StaticImage
     src="../images/mmp13.png"
     alt="MMP13"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}