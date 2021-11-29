import Repository from "./Repository";
import './style.css'

function Repositories({ data, searchResults }) {
    //component defining how the whole results container is rendered

  return (
    <div className="Repositories">
      <ul className='repo-container'>
          {searchResults.map((item) => {
              return <Repository item={item} />
          })}
      </ul>
    </div>
  );
}

export default Repositories;
