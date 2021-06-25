import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function WWF09() {
 return (
   <StaticImage
     src="../images/wwf09.png"
     alt="WWF09"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}