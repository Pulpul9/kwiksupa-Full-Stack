import React from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData'

const UserOrderPage = () => {
  const orders = useSelector(state => state.orders.order) || []

  // Group by Order ID + DateTime
const groupedOrders = orders.reduce((acc, order) => {
  const dateTimeKey = new Date(order.createdAt).toISOString()

  // include user identity in grouping
  const userKey = `${order.user_name}_${order.user_email}`

  const key = `${dateTimeKey}_${userKey}`

  if (!acc[key]) acc[key] = []
  acc[key].push(order)

  return acc
}, {})

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold">My Orders</h1>
      </div>

      {orders.length === 0 && <NoData />}

      <div className="space-y-6">
        {Object.entries(groupedOrders).map(([key, orderItems]) => {
          const firstOrder = orderItems[0]

          return (
            <div key={key} className="bg-white rounded-xl shadow border">
              {/* Header */}
              <div className="flex justify-between p-5 border-b">
                <div className="space-y-1">
                  <p className="font-semibold">
                    Order No: {firstOrder.orderId}
                  </p>
                  <p className="text-sm text-gray-500">
                    Ordered On:{' '}
                    {new Date(firstOrder.createdAt).toLocaleString()}
                  </p>

                  <p className="text-sm">
                    <b>Name:</b> {firstOrder.user_name}
                  </p>
                  <p className="text-sm">
                    <b>Email:</b> {firstOrder.user_email}
                  </p>
                  <p className="text-sm">
                    <b>Phone:</b> {firstOrder.delivery_address?.mobile}
                  </p>
                </div>

                {/* <span className="text-xs px-3 py-1 rounded bg-green-100 text-green-700">
                  {firstOrder.payment_method}
                </span> */}
              </div>

              {/* Products */}
              <div className="divide-y">
                {orderItems.map(item => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center p-5"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product_details?.image?.[0]}
                        className="w-16 h-16 rounded border object-cover"
                        alt=""
                      />
                      <div>
                        <p className="font-medium">
                          {item.product_details?.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.product_details?.quantity}
                        </p>
                      </div>
                    </div>

                    {/* <p className="font-semibold">₹{item.totalAmt}</p> */}
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="p-5 border-t text-right font-semibold">
                Total: ₹
                {orderItems.reduce(
                  (sum, item) => sum + item.totalAmt,
                  0
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserOrderPage
