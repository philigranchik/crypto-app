import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    
    
    return (
        <>
            <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} статистика </Title>
        <Col className="price-container">
          
          <Title level={5} className="current-price">Текущая {coinName} Цена: $ {currentPrice}</Title>
        </Col>
      </Row>
      
        </>
    )
}

export default LineChart