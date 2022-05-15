import React from 'react'
import millify from 'millify'
import { Col, Row, Statistic, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import News from './News';
import CryptoCurrency from './CryptoCurrency'



const { Title } = Typography;

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Загрузка...'
  return (
    <>
      <Title level={2} className='heading'>Мировая статистика по криптовалюте:</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title='Всего токенов:' value={globalStats.total} /></Col>
        <Col span={12}><Statistic title='Всего обменников:' value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title='Общая капитализация:' value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title='Объем торгов за 24 часа:' value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title='Всего рынков:' value={millify(globalStats.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Топ-10 криптовалют:</Title>
        <Title level={3} className="show-more"><Link to='/cryptocurrency'>Ещё</Link></Title>
      </div>
      <CryptoCurrency simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Новости о крипто-мире:</Title>
        <Title level={3}><Link to='/news'>Ещё</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage