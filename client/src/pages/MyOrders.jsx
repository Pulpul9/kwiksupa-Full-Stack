import React from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData'

const MyOrders = () => {
  const orders = useSelector(state => state.orders.order) || []

  // 🔹 Group orders by date + time
  const groupedOrders = orders.reduce((acc, order) => {
    // group by full date-time (you can reduce precision if needed)
    const dateTimeKey = new Date(order.createdAt).toISOString()

    if (!acc[dateTimeKey]) {
      acc[dateTimeKey] = []
    }

    acc[dateTimeKey].push(order)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow p-4 font-semibold text-lg">
        My Orders
      </div>

      <div className="p-4 space-y-5">
        {!orders.length && <NoData />}

        {Object.entries(groupedOrders).map(([dateTime, orderGroup]) => {
          const firstOrder = orderGroup[0]

          return (
            <div
              key={dateTime}
              className="bg-white rounded-lg shadow border"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Order No:</span>{' '}
                    {firstOrder.orderId}
                  </p>
                  <p className="text-xs text-gray-500">
                    Ordered On:{' '}
                    {new Date(dateTime).toLocaleString()}
                  </p>
                </div>

                <span className="text-xs px-3 py-1 rounded bg-green-100 text-green-700">
                  {firstOrder.order_status}
                </span>
              </div>

              {/* Products in same order time */}
              <div className="divide-y">
                {orderGroup.map(order => (
                  <div
                    key={order._id}
                    className="flex items-center gap-4 p-4"
                  >
                    <img
                      src={order.product_details?.image?.[0]}
                      alt={order.product_details?.name}
                      className="w-16 h-16 object-cover rounded border"
                    />

                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        {order.product_details?.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {order.product_details?.quantity}
                      </p>
                    </div>

                    {/* <p className="font-semibold text-gray-900">
                      ₹{order.totalAmt}
                    </p> */}
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="flex justify-end p-4 border-t font-semibold">
                Total: ₹{Number(firstOrder.totalAmt || 0)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
