import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function MMP41() {
 return (
   <StaticImage
     src="../images/mmp41.png"
     alt="MMP41"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}