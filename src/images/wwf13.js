import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF13() {
 return (
   <StaticImage
     src="../images/wwf13.png"
     alt="WWF13"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}