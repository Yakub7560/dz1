import { useState } from "react";



function Product() {
   const [price, setPrice] = useState();
   const [name, setName] = useState();
   const [info, setInfo] = useState();
   const [message, setMessage] = useState();

   const ProdInfo = (event) => {
      event.preventDefault();

      setMessage(`
      Товар: ${name},
      Цена: ${price} сум,
      О товаре: ${info}`)




      setName('');
      setPrice('');
      setInfo('');
   }

   return (

      <>

         <form onSubmit={ProdInfo}>

            <span>Name:</span>
            <input onChange={event => setName(event.target.value)} value={name} placeholder="name of product" />
            <br />
            <span>Price:</span>
            <input onChange={event => setPrice(event.target.value)} value={price} placeholder="price of product" />
            <br />
            <span>Info:</span>
            <input onChange={event => setInfo(event.target.value)} value={info} placeholder="info about product" />
            <br />
            <button type="submit">Сохранить</button>
            <div>
               {message}
            </div>

         </form>
      </>
   )
}


export default Product;