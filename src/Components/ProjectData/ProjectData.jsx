import React from 'react';
import {styled} from 'styled-components'
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
  const projectDetails = {
    1: 'This is the data for Project 1',
    2: 'This is the data for Project 2',
    3: 'This is the data for Project 3',
    4: 'This is the data for Project 4',
  };

  return (
    <> 
    <InfoContainer>
     <h1>Project Details</h1>
     <p>{projectDetails[id]}</p>
     <button onClick={()=>{setId(null)}}>Shrink</button>
     </InfoContainer>
     </>
  );
}
