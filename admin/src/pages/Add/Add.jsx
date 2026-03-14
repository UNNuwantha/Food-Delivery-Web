import React, { useState } from 'react'
import'./Add.css'
import { assets, url } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

    const [image,setImage] = useState(false);
    const[data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onchangehandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }    

    const onsubmithandler = async (event) =>{
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name",data.name)
        formdata.append("description",data.description)
        formdata.append("price",Number(data.price))
        formdata.append("category",data.category)
        formdata.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formdata);
        if(response.data.success){
            setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onsubmithandler}>
        <div className="add-image-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input onChange={onchangehandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
            <p>Prouct description</p>
            <textarea onChange={onchangehandler} value={data.description} name="description" rows="10" placeholder='Write coantent here' required></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product category</p>
                <select onChange={onchangehandler} name="category">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Desets">Desets</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product price</p>
                <input onChange={onchangehandler} value={data.price} type="Number" name="price" placeholder='$20' />
            </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
