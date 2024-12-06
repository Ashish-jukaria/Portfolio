import React from 'react';
import {styled} from 'styled-components'
import Project1Data from './ProjectsEach/Project1Data';
import Project2Data from './ProjectsEach/Project2Data';
import Project3Data from './ProjectsEach/Project3Data';
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  padding: 10px;  /* Optional: Add padding if needed */
  box-sizing: border-box; /* Optional: Ensures padding is included in width/height calculation */
  z-index: 10; /* Optional: Adjust z-index to layer on top of other elements */
`;
export default function ProjectData({ setId,id }) {
  console.log('Project ID:', id);

  // You can fetch or show different content based on the id
  const renderProject = () => {
    switch (id) {
      case 1:
        return <Project1Data setId={setId} id={id}/>;
      case 2:
        return <Project2Data setId={setId} id={id}/>;
      case 3:
        return <Project3Data setId={setId} id={id}/>;

      default:
        return <p>No project selected</p>;
    }
  };


  return (
    <> 
    <InfoContainer>
      {renderProject()}
     </InfoContainer>
     </>
  );
}
