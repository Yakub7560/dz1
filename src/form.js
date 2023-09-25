import { useState } from 'react';



function Form() {
   const [value, setValue] = useState("")

   const handleSumbit = (event) => {
      event.preventDefault();
      console.log(value);
   }

   return(
      <>
      <form onSubmit={handleSumbit}>
         <input value={value} onChange={(event) => setValue(event.target.value)}/>
         <button type="submit">Отправить</button>
      </form>
      
      </>
   )
}
export default Form;