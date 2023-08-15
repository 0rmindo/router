import { Link } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch';

const url = "http://localhost:3000/products";

const Home = () => {

    const { data: items, loading, error } = useFetch(url);

  return (
    <div>
        <h1>Home</h1>
        <ul className="products">
            {items && items.map((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$: {item.price}</p>
                    <Link to={`/product/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home