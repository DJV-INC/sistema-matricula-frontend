import React, { Fragment } from 'react'
import HeaderTable from './HeaderTable'
import ContentTable from './ContentTable'

export default function TableContainer() {
  return (
    <Fragment>
      <HeaderTable/>
      <ContentTable/>
    </Fragment>
  )
}