import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function GMARED() {
 return (
   <StaticImage
     src="../images/gmared.png"
     alt="GMARED"
     placeholder="blurred"
     layout="fullWidth"
   />
 )
}