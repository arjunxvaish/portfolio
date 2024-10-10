// src/components/Tech.jsx

import TechCanvas from './canvas/TechCanvas';

const Tech = ({ slice }) => {
  return (
    <div>
      {/* Pass the slice prop to TechCanvas */}
      <TechCanvas slice={slice} />
    </div>
  );
};

export default Tech;
