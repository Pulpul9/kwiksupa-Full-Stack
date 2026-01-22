import React from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData'

const UserOrderPage = () => {
  const orders = useSelector(state => state.orders.order) || []

  console.log("Orders from backend:", orders)

  // Group orders by user email
  const groupedOrders = orders.reduce((acc, order) => {
    const key = order.user_email
    if (!acc[key]) acc[key] = { userName: order.user_name, orders: [] }
    acc[key].orders.push(order)
    return acc
  }, {})

  const userEmails = Object.keys(groupedOrders)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Order Details</h1>
        <p className="text-gray-500 mt-1">Here are all the orders placed by users</p>
      </div>

      {/* No Data */}
      {orders.length === 0 && <NoData />}

      {/* Orders Grouped by User */}
      <div className="space-y-8">
        {userEmails.map((email) => (
          <div key={email} className="bg-gray-50 rounded-lg p-5 shadow-md">
            {/* User Info */}
            <div className="mb-4 border-b pb-2">
              <h2 className="text-xl font-semibold text-gray-800">{groupedOrders[email].userName}</h2>
              <p className="text-gray-500">{email}</p>
            </div>

            {/* User Orders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groupedOrders[email].orders.map((order, idx) => (
                <div
                  key={`${order._id}-${idx}`}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-gray-700 mb-3">
                    <span className="font-bold text-gray-900">Order No:</span> {order.orderId}
                  </p>

                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={order.product_details?.image?.[0]}
                      alt={order.product_details?.name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <p className="font-medium text-gray-800">{order.product_details?.name}</p>

                    <p className="font-medium text-gray-800">{order.quantity}</p>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-medium text-gray-700">Mobile:</span> {order.delivery_address.mobile}
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Sub Total:</span> ₹{order.subTotalAmt}
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Total:</span> ₹{order.totalAmt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserOrderPage
