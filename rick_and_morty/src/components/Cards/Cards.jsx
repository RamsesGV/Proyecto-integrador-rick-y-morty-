import Card from '../Card/Card';

export default function Cards({characters , onClose}) {
   
   return (
      <div>
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
   
