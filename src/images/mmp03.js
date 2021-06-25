import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP03() {
 return (
   <StaticImage
     src="../images/mmp03.png"
     alt="MMP03"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}