import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  
  width : 400px;
  height: 600px;
  margin-left:auto;
  margin-right:auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;


function TodoTemplate( {children} ) {
  return (
    <Template> {children} </Template>
  )
}


export default TodoTemplate;