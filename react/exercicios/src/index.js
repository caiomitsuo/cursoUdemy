import React from 'react';
import ReactDom from 'react-dom';

import Multi from './componentes/Multiplos';

ReactDom.render (
  <div>
    <Multi.BoaTarde nome="Ana"/>
    <Multi.BoaNoite nome="Bia"/>
  </div>
, document.getElementById('root'))