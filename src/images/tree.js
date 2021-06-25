import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function TREE() {
 return (
   <StaticImage
     src="../images/tree.png"
     alt="TREE"
     placeholder="blurred"
     layout="fullWidth"
   />
 )
}