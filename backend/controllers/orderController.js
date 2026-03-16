import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe"

//placing user order from frontend
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173"

    if (!process.env.STRIPE_SECRET_KEY) {
        console.error("Missing STRIPE_SECRET_KEY environment variable")
        return res.status(500).json({ success: false, message: "Stripe is not configured" })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    try {
        const userId = req.body.userId;
        const { items, amount, address, payment } = req.body;

        if (!userId || !items || !amount || !address) {
            return res.status(400).json({ success: false, message: "Missing required order data" });
        }

        const newOrder = new orderModel({
            userId,
            items,
            amount,
            address,
            payment
        })

        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        const line_items = items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(Number(item.price) * 100),
            },
            quantity: item.quantity ?? 1,
        }))

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 2 * 100,
            },
            quantity: 1,
        })

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })

        res.json({ success: true, session_url: session.url })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error"})
    }
}

const verifyOrder = async (req,res) =>{
    const{orderId,success} = req.body;
    try {
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export { placeOrder,verifyOrder }

