import { useState } from 'react';



function HoverMessage() {

   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   return (
      <button
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         {isHovered ? 'Навели курсор на компонент' : 'Наведите курсор на компонент'}
      </button>
   );

}

export default HoverMessage;