import React from 'react';

interface H2StyledProps {
  title: string;
}

const H2Styled: React.FC<H2StyledProps> = ({ title }) => {
  return (
    <h2
      className="text-center mt-4
        text-secondary md:text-7xl text-4xl font-bold font-black-ops py-2
        md:w-full"
    >
      { title }
    </h2>
  )
}

export default H2Styled