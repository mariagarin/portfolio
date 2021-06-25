import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP01() {
 return (
   <StaticImage
     src="../images/mmp01.png"
     alt="MMP01"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}