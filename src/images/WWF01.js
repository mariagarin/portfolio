import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF01() {
 return (
   <StaticImage
     src="../images/wwf01.png"
     alt="WWF01"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}