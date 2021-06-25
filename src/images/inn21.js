import React, { Component }  from 'react';
import { StaticImage } from "gatsby-plugin-image"

export function INN21() {
 return (
   <StaticImage
     src="../images/inn21.png"
     alt="INN21"
     placeholder="blurred"
     layout="fullWidth"
     width={855}
     height={1200}
   /> 
 )
}