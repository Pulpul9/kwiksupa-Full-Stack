import { Router } from 'express'
import auth from '../middleware/auth.js'
import { CashOnDeliveryOrderController, getOrderDetailsController, getUserOrderDetailsController, updateOrderStatusController } from '../controllers/order.controller.js'
import admin from '../middleware/Admin.js'

const orderRouter = Router()

orderRouter.post("/cash-on-delivery",auth,CashOnDeliveryOrderController)
// orderRouter.post('/checkout',auth,paymentController)
// orderRouter.post('/webhook',webhookStripe)
orderRouter.get("/order-list",auth,getOrderDetailsController)
orderRouter.get("/user-order-list",auth,getUserOrderDetailsController)
orderRouter.put("/admin/order/:orderId", auth, admin, updateOrderStatusController)

export default orderRouter