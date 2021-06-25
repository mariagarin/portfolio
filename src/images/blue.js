import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function BLUE() {
 return (
   <StaticImage
     src="../images/blue.png"
     alt="BLUE"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   />
 )
}