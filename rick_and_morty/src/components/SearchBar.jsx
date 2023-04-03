export default function SearchBar({onSearch}) {

   return (
      <div className="BotonSearch" style={{
         padding: '10px'
      }}>
         <input style={{borderRadius:'25px'}} type='search' />
         <button onClick={ (id) => {onSearch(id)}}>Search</button> 
      </div>
   );
}
