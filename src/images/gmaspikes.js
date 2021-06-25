import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function GMASPIKES() {
 return (
   <StaticImage
     src="../images/gmaspikes.png"
     alt="GMASPIKES"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   />
 )
}