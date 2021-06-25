import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function ORANGE() {
 return (
   <StaticImage
     src="../images/orange.png"
     alt="ORANGE"
     placeholder="blurred"
     layout="fullWidth"
   />
 )
}