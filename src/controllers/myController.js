const UserModel= require("../models/userModel")
const ProductModel= require("../models/productModel")
const OrderModel= require("../models/orderModel")

const createProduct = async function(req,res){
    const createdProduct = await ProductModel.create(req.body)
    res.send(createdProduct)
}

const createUser = async function(req,res){
    req.body.isFreeAppUser = req.headers.isfreeappuser
    const createdUser = await UserModel.create(req.body)
    res.send(createdUser)
}

const getOrders = async function(req,res){
    const orders = await OrderModel.find().populate(['userId', 'productId'])
    res.send(orders)
}

const orderPurchase = async function(req,res){
    const user = await UserModel.findById(req.body.userId)
    const product = await ProductModel.findById(req.body.productId)

    if(user){
        if(product){
            if(req.headers.isfreeappuser == "true"){

                req.body.amount = 0
                req.body.isFreeAppUser = true
                const createdOrder = await OrderModel.create(req.body)
                res.send(createdOrder)

            } else {

                const user = await UserModel.findOneAndUpdate({_id : req.body.userId,balance: {$gt : req.body.amount}},  {$inc : {balance : -req.body.amount}}, {new : true})
                if(user){   
                    await OrderModel.create(req.body)
                    res.send({msg : user})
                }
                else    res.send("Insufficient balance")

            }
        }else   res.send("Please provide correct product.")
    }else   res.send("Please provide correct user.")
}

module.exports.createProduct= createProduct
module.exports.createUser= createUser
module.exports.orderPurchase= orderPurchase
module.exports.getOrders= getOrders