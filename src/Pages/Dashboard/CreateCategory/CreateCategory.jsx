import React, { useEffect, useState } from 'react'
import Data from '../../../FakeData/Data'
// import data from "../../../FakeData/Data"
import { AiOutlineHome } from "react-icons/ai"
import CategoryHome from './CategoryHome'

export default function CreateCategory() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setCategories(Data)
    }, [])
    console.log(categories)
    const handleClick = (e) => {
        console.log(e)
    }
    return (
        <div className=" text-start">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#"><AiOutlineHome className="text-primary" style={{ fontSize: "18px" }} /></a></li>
                        {/* <li class="breadcrumb-item active" aria-current="page">Library</li> */}
                    </ol>
                </nav>
            </div>
            <div>
                {
                    categories.map((cate, i) => <CategoryHome categories={cate} handleBtn={handleClick} key={i}></CategoryHome>)
                }
            </div>


        </div>
    )
}
