import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Card, Col, Input, Row } from 'antd';

const CryptoCurrency = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState()
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  console.log(cryptos);

  if(isFetching) return 'Загрузка...'

  return (
    <>
    {!simplified && (

   
    <div className="search-crypto">
      <Input placeholder='Поиск криптовалюты' onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
     )}
      <Row gutter={[32, 32]} classname="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col 
          xs={24} 
          sm={12} 
          lg={6} 
          className="crypto-card" key={currency.uuid}>

            <Link key={currency.uuid} to={`/coin/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
                >
                  <p>Цена: {millify(currency.price)}$</p>
                  <p>Капитализация: {millify(currency.marketCap)}$</p>
                  <p>Изменения за день: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CryptoCurrency