import React from 'react';
import styled from 'styled-components';

const GlassmorphicCard = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const GlassmorphicCardComponent = () => {
  return (
    <GlassmorphicCard>
      <h2>Glassmorphic Card</h2>
    </GlassmorphicCard>
  );
};

export default GlassmorphicCardComponent;
