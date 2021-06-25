import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function GREENCOVER() {
 return (
   <StaticImage
     src="../images/greencover.png"
     alt="GREENCOVER"
     placeholder="blurred"
     layout="fullWidth"
   />
 )
}