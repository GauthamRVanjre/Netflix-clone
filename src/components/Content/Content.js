import React from 'react'
import './Content.css'
import RowData from '../../constants/URLS'
import Row from '../Row/Row'

const Content = () => {
  return (
    <div className='content-wrapper'>
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url}/>
      })}
    </div>
  )
}

// 1f1df1ff1cce315177d3a3b81fa3afb4

export default Content
