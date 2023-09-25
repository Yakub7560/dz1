import { useState } from "react";


function Welcome() {

   const [message, setMes] = useState();
   const [name, setName]=useState();



   const Hello = (event) => {
      event.preventDefault();
      setMes(`Привет, ${name}`);

      setName('');
   }



   return (
      <>
         <form onSubmit={Hello}>
            <input
               onChange={event => setName(event.target.value)}
               value={name} />
         

         <button type="submit">Save</button>

         <h2>{message}</h2>

         </form>
      </>
   )
}


export default Welcome;