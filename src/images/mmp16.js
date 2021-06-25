import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP16() {
 return (
   <StaticImage
     src="../images/mmp16.png"
     alt="MMP16"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}