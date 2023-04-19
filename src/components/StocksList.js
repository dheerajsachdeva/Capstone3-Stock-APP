import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchStocksList } from '../redux/stocksList/stocksListSlice';

export default function StocksList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    stocksList, isLoading, isError,
  } = useSelector((store) => store.stocksList);

  const [query, setQuery] = useState('');

  useEffect(() => {
    if (stocksList.length === 0) {
      dispatch(fetchStocksList());
    }
  }, [dispatch, stocksList]);

  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );
  } if (isError) {
    return (
      <h3>Error Occured...</h3>
    );
  }
  return (
    <div>
      <h1 data-testid="stocks"> NASDAQ Stocks</h1>
      <div className="search-bar">

        <input className="search-input" type="text" placeholder="Search with Symbol" onChange={(e) => setQuery(e.target.value)} />
      </div>
      {stocksList.filter((stock) => {
        if (query === '') {
          return stock;
        } if (stock.symbol.toLowerCase().includes(query.toLowerCase())) {
          return stock;
        }
        return null;
      })

        .map((element) => (
          <div key={element.symbol} className="container">
            <li role="presentation" onClick={() => navigate(`stockdetails/${element.symbol}`)}>
              <div>
                Symbol -
                {element.symbol}
                {' '}
                <br />
                Company Name -
                {' '}
                {element.name}
              </div>
              <div />
            </li>
          </div>
        ))}
    </div>
  );
}
