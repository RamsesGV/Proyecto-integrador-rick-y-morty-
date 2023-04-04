export default function Card({name,species,gender,image,onClose,origin,id,status}) {
   return (
      <div>
         
         <button onClick={() => onClose(id)}>X</button>
         <h2>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         <h2>Status: {status}</h2>
         <h2>ID: {id}</h2>
         <img src={image} alt={'Character'} /> 
         
      </div>
   );
}

