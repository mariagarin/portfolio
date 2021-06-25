import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP45() {
 return (
   <StaticImage
     src="../images/mmp45.png"
     alt="MMP45"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}