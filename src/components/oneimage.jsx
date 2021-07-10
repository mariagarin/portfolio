import React from "react"
import { StaticImage } from "gatsby-plugin-image";

// an image component we can use to serve up more image
const OneImage = ({filename, alt}) => {
  return <StaticImage src={`../images/${filename}`} alt={alt} />
}


export default OneImage