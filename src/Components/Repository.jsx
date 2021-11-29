import './style.css'

function Repository({ item }) {

  return (
      <li className='repo-li'>
          <a href={item.svn_url}>{item.name}</a>
          <p>Language: {item.language}</p>
          <p>Visibility: {item.visibility}</p>
          <p>Owner: {item.owner.login}</p>
      </li>
  );
}

export default Repository;
