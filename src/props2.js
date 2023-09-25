import React from "react";


function SpisokZadach({tasks}) {
   return (
      tasks.map((item) => (<li>{item}</li>))
   )
}


export default SpisokZadach;