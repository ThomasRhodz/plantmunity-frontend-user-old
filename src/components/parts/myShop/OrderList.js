
import React from 'react'
import { Grid, Stack, Typography } from '@mui/material';
import { useGetShopOrdersQuery } from '../../../app/services/transactionApi'
import OrderCard from '../../card/shopCards/OrderCard';
import { Inventory2Rounded } from '@mui/icons-material';

const OrderList = ({shopID, toast}) => {
    const {data, isFetching} =  useGetShopOrdersQuery(shopID, {refetchOnMountOrArgChange: true});

    const renderPreOrder = data ? data.map((order)=>{
        return(
            <Grid item key={order.id} sx={{ width:'100%' }}>
                <OrderCard 
                    orderStatus = {order?.status}
                    productImage={order?.product?.product_image}
                    productName={order?.product?.product_name}
                    productAttribute={order?.product_attribute}
                    OrderID={order?.id}
                    orderPrice={order?.price_per_unit}
                    orderQuantity={order?.quantity}
                    orderTotal={order?.amount_payable}
                    cName={order?.user?.first_name + ' ' + order?.user?.last_name}
                    cId={order?.user?.id}
                    transactionMethod={order?.transaction_method}
                    location={order?.location}
                    cEmail={order?.user?.email}
                    cContact={order?.user?.contact}
                    cAddress={order?.user?.address}
                />
            </Grid>
        )
    }) : []
  return (
        <Grid container direction='column' alignItems='center' sx={{ width:'100%', minHeight: 300, maxHeight:'100%' }}>
            {
                renderPreOrder.length === 0 ? 
                        <Stack direction='row' alignItems='center' sx={{ height:'100%', width:'100%' }}>
                    <Stack direction='column' alignItems='center' sx={{ width:'100%'}}>
                        <Inventory2Rounded  sx={{ fontSize:30, color:'#BFCBA5'}}/>
                            <Typography variant='h5' sx={{ fontFamily:'Arvo', color:'#BFCBA5', mt:1 }}>
                                No orders yet.
                            </Typography>
                        </Stack>
                    </Stack> 
                : renderPreOrder
            }
        </Grid>
  )
}

export default OrderList