import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import Image from "src/components/Image";

const Image = ({ src, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  if (!match) return null;

  const { node: { childImageSharp, publicURL, extension } = {} } = match;

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} {...rest} />;
  }

  return <Img fluid={childImageSharp.fluid} {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;

const WWF01 = () => {
  return (
    <>
      <p>WWF01</p>
      <Image
        src="wwf01.png"
        className="mx-auto shadow-xl"
        alt="WWF01"
        style={{
          border: "10px solid green",
        }}
      />
    </>
  );
};

export default WWF01;
