import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStockDetails } from '../redux/stockDetails/stockDetailsSlice';

export default function StockDetails() {
  const dispatch = useDispatch();

  const { symbol } = useParams();

  const {
    stockDetails, isLoading, isError,
  } = useSelector((store) => store.stockDetails);

  useEffect(() => {
    dispatch(fetchStockDetails(symbol));
  }, [dispatch, symbol]);

  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );
  } if (isError) {
    return (
      <h3>Error Occured while fetchinng...</h3>
    );
  }
  return (
    <div>
      <h3>
        {symbol}
        {' '}
        Stock Details
      </h3>

      {stockDetails.map((element) => (

        <div key={element.symbol} className="stock-details">

          <li>
            <div>Symbol </div>
            <div>
              {element.symbol}
              {' '}
            </div>
          </li>
          <li>
            <div>Name </div>
            <div>
              {element.name}
              {' '}
            </div>
          </li>
          <li>
            {' '}
            <div>Price</div>
            {' '}
            <div>
              {element.price}
              {' '}
            </div>
          </li>
          <li>
            <div>Changes Percentage </div>
            <div>
              {element.changesPercentage}
              {' '}
            </div>
          </li>
          <li>
            <div>Change </div>
            <div>
              {element.change}
              {' '}
            </div>
          </li>
          <li>
            <div>Volume </div>
            <div>
              {element.volume}
              {' '}
            </div>
          </li>
          <li>
            <div>Day Low </div>
            <div>
              {element.dayLow}
              {' '}
            </div>
          </li>
          <li>
            <div> Day High </div>
            <div>
              {element.dayHigh}
              {' '}
            </div>
          </li>
          <li>
            <div>Year Low </div>
            <div>
              {element.yearLow}
              {' '}
            </div>
          </li>
          <li>
            <div>Year High </div>
            <div>
              {element.yearHigh}
              {' '}
            </div>
          </li>

        </div>
      ))}
    </div>
  );
}
