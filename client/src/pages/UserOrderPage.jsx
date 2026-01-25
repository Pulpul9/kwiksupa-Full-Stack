import React from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData'

const UserOrderPage = () => {
  const orders = useSelector(state => state.orders.order) || []

  // 🔹 Group by Order ID
  const groupedOrders = orders.reduce((acc, order) => {
    const key = order.orderId
    if (!acc[key]) acc[key] = []
    acc[key].push(order)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
      </div>

      {orders.length === 0 && <NoData />}

      <div className="space-y-6">
        {Object.entries(groupedOrders).map(([orderId, orderItems]) => {
          const firstOrder = orderItems[0]

          return (
            <div
              key={orderId}
              className="bg-white rounded-xl shadow border"
            >
              {/* 🔹 Order Header */}
              <div className="flex justify-between items-start p-5 border-b">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">
                    Order No: {orderId}
                  </p>
                  <p className="text-sm text-gray-500">
                    Ordered On:{' '}
                    {new Date(firstOrder.createdAt).toLocaleString()}
                  </p>

                  {/* ✅ User Details */}
                  <p className="text-sm">
                    <span className="font-medium">Name:</span>{' '}
                    {firstOrder.user_name}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Email:</span>{' '}
                    {firstOrder.user_email}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span>{' '}
                    {firstOrder.delivery_address?.mobile}
                  </p>
                </div>

                <span className="text-xs px-3 py-1 rounded bg-green-100 text-green-700">
                  {firstOrder.payment_method}
                </span>
              </div>

              {/* 🔹 Products */}
              <div className="divide-y">
                {orderItems.map(item => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between p-5"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product_details?.image?.[0]}
                        alt={item.product_details?.name}
                        className="w-16 h-16 object-cover rounded border"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.product_details?.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.product_details?.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold text-gray-900">
                      ₹{item.totalAmt}
                    </p>
                  </div>
                ))}
              </div>

              {/* 🔹 Total */}
              <div className="flex justify-end p-5 border-t font-semibold">
                Total: ₹
                {orderItems.reduce(
                  (sum, i) => sum + i.totalAmt,
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
