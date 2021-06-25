import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP40() {
 return (
   <StaticImage
     src="../images/mmp40.png"
     alt="MMP40"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}