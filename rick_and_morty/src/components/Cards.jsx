import Card from './Card';

export default function Cards({characters}) {
   const onClose = () => alert('Emulamos que se cierra la card');
   return (
      <div>
         {characters.map(({ name,species,gender,image,origin,id,status})=> {
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
   
