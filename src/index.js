import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShowHide from './App';
import HoverMessage from './hovermessage';
import Form from './form';
import Welcome from './props1';
import Product from './products';
import SpisokZadach from './props2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      <h1>Задание 1</h1>
      <ShowHide />
    </div>
    <h1>Задание 2</h1>
    <HoverMessage />

    <div>
      <h1>Задание 3</h1>
      <Form />

    </div>

    <div>
      <h1>Задание 4</h1>
      <Welcome />
    </div>


    <div>
      <h1>Задание 5</h1>
      <Product />
    </div>
    <div>
      <h1>Задание 5</h1>
      <SpisokZadach tasks={[1, 2, 3, 4]} />
    </div>

  </>
);


