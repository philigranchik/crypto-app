import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, CryptoCurrency, CryptoDetails, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<Homepage />} />
          
              <Route path='/cryptocurrency' element={<CryptoCurrency />} />
              <Route path='/coin/:uuid' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Михаил Иванин <br />
            poslak98@gmail.com
          </Typography.Title>
          <Space>
            <Link to='/'>Главная</Link>
            <Link to='/cryptocurrency'>Топ-100</Link>
            <Link to='/news'>Новости</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App