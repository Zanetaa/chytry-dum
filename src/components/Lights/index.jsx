import React from 'react';
import './style.css';
import { Light } from '../Light';
import smartHomeData from '../../smartHomeData';
import { useState } from 'react';

export const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map((light) => (
        <Light key={light.name} name={light.name} state={light.state} />
      ))}
      ;
    </div>
  );
};
