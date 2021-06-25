import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF10() {
 return (
   <StaticImage
     src="../images/wwf10.png"
     alt="WWF10"
     placeholder="blurred"
     layout="fullWidth"
   /> 
 )
}