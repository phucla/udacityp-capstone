import React, { useEffect, useState } from 'react'
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Table,
  makeStyles,
  Theme,
  Chip,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Typography,
} from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import ProductsTableHead from '../components/ProductsTableHead'
import { Product } from 'types/product'
import { selectProduct, productActions } from '../productSlice'

const ProductsTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const classes = useStyles()
  const products = useSelector(selectProduct)
  //const products = productData
  const [data, setData] = useState(products)
  const [page] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [filterData, setFilterData] = useState({
    name: '',
    city: '',
  })
  useEffect(() => {
    dispatch(productActions.getProductsRequest())
  }, [dispatch])

  useEffect(() => {
    setData(products)
  }, [products])

  const handleClick = (item: any) => {
    navigate(`/apps/product/${item.id}`)
  }

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(event.target.value)
  }

  const handleChangePage = (event: any, value: any) => {
    console.log(value)
  }

  const handleChange = (e: any): void => {
    setFilterData({
      ...filterData,
      city: e.target.value,
    })
  }

  const handleChangeInput = (e: any): void => {
    setFilterData({
      ...filterData,
      name: e.target.value,
    })
  }

  const handleSearch = () => {
    dispatch(productActions.searchProducts(filterData))
  }

  return (
    <div className={classes.root}>
      <div className="w-full flex flex-col">
        <div className="flex align-center py-20">
          <TextField
            placeholder="Search by name"
            className="w-200 mr-20"
            onBlur={handleChangeInput}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            onChange={handleChange}
          >
            <MenuItem className={classes.text} value={10}>
              Ten
            </MenuItem>
            <MenuItem className={classes.text} value={20}>
              Twenty
            </MenuItem>
            <MenuItem className={classes.text} value={30}>
              Thirty
            </MenuItem>
          </Select>
          <Button className="x-26" variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </div>
        <Table aria-labelledby="tableTitle">
          <ProductsTableHead />

          <TableBody>
            {data.map((n: Product) => {
              return (
                <TableRow
                  className="h-64 cursor-pointer"
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={n.id}
                  onClick={() => handleClick(n)}
                >
                  <TableCell component="th" scope="row" className="p-20">
                    <Typography className={classes.text}>
                      Client: {n.request.client}
                    </Typography>
                    <Typography className={classes.text}>
                      Client: {n.request.client}
                    </Typography>
                    <Typography className={classes.text}>
                      {n.request.date}
                    </Typography>
                    <Typography className={classes.text}>
                      Client: {n.request.status}
                    </Typography>
                    <Typography className={classes.text}>
                      Decision:{' '}
                      <Chip
                        className={classes.chip}
                        label={n.request.decision}
                      />
                    </Typography>
                    <Typography className={classes.text}>
                      CS Decision:{' '}
                      <Chip
                        color="secondary"
                        className={classes.chip}
                        label={n.request.csDescision}
                      />
                    </Typography>
                    <Typography>
                      <Link className={classes.link} to="">
                        ID Similarity
                      </Link>
                    </Typography>

                    <Link className={classes.link} to="">
                      Selfie Similarity
                    </Link>
                  </TableCell>
                  <TableCell className="w-200 p-20" component="th" scope="row">
                    <img
                      className="w-full block rounded"
                      src={n.front.url}
                      alt={n.front.description}
                    />
                    <Typography className={classes.text}>
                      {n.front.description}
                    </Typography>
                  </TableCell>

                  <TableCell className="w-200 p-20" component="th" scope="row">
                    <img
                      className="w-full block rounded"
                      src={n.back.url}
                      alt={n.back.description}
                    />
                    <Typography className={classes.text}>
                      {n.back.description}
                    </Typography>
                  </TableCell>
                  <TableCell className="w-200 p-20" component="th" scope="row">
                    <img
                      className="w-180 block rounded h-300"
                      src={n.selfie.url}
                      alt={n.selfie.url}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" className="w-400 p-20">
                    <Typography className={classes.text}>
                      Name: {n.ocr.name}
                    </Typography>
                    <Typography className={classes.text}>
                      DOB: {n.ocr.dob}
                    </Typography>
                    <Typography className={classes.text}>
                      Gender: {n.ocr.gender}
                    </Typography>
                    <Typography className={classes.text}>
                      Address: {n.ocr.address}
                    </Typography>
                    <Typography className={classes.text}>
                      Hometown: {n.ocr.hometown}
                    </Typography>
                    <Typography className={classes.text}>
                      Issue place: {n.ocr.place}
                    </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row" className="w-200 p-20">
                    <Typography className={classes.text}>
                      Fimilarity: {n.faceMaching}
                    </Typography>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: '14px',
    paddingTop: '5px',
  },
  link: {
    fontSize: '14px',
    paddingTop: '5px',
    color: 'rgba(18, 54, 249, 0.87)',
  },
  chip: {
    height: '20px',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  root: {
    '& .MuiTableCell-root': {
      border: '1px rgba(113, 104, 104, 0.87) solid',
    },
    '& .MuiFormControl-root': {
      marginRight: '10px',
    },
    '& .MuiInputBase-input': {
      fontSize: '14px',
    },
    '& .MuiInputBase-root': {
      width: '200px',
      marginRight: '10px',
    },
  },
}))

export default ProductsTable
