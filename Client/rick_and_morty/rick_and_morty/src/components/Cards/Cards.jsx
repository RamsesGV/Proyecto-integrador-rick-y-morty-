import Card from '../Card/Card';
import './Cards.modules.css'
export default function Cards({characters , onClose}) {
   
   return (
      <div className='divC'>
         {characters.map(({ name,species,gender,image,origin,id,status}) => {
               return(
                  <Card 
                  key={id}
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin}
                  status={status}
                  onClose={onClose}
                  />
               );
            })
         }
      </div>
   );
}
   
