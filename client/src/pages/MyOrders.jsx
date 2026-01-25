import React from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData'

const MyOrders = () => {
  const orders = useSelector(state => state.orders.order) || []

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <div className="bg-white shadow-md p-4 font-semibold text-lg">
        My Orders
      </div>

      <div className="p-4 space-y-4">
        {!orders.length && <NoData />}

        {orders.map((order, index) => (
          <div
            key={order._id}
            className="bg-white rounded-lg shadow-sm border p-4"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Order No:</span>{' '}
                {order.orderId}
              </p>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                {order.payment_status}
              </span>
            </div>

            {/* Product Info */}
            <div className="flex gap-4 items-center">
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
            </div>

            {/* Divider */}
            <div className="border-t my-3" />

            {/* Footer */}
            <div className="flex justify-between items-center text-sm">
              <p className="text-gray-600">
                Ordered On:{' '}
                <span className="text-gray-800">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </p>

              <p className="font-semibold text-gray-900">
                Total: ₹{order.totalAmt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders
