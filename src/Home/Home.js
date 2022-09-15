import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Featured from '../Components/featured/Featured'
import List from '../Components/list/List'
// import List from '../Components/list/List'
import Navbar from '../Components/Navbar/Navbar'
import "./home.scss"

const Home = ({ type }) => {


    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState([])

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res =
                    await axios.get("https://limitless-inlet-11731.herokuapp.com/lists")
                setLists(res.data)
                // console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }
        getRandomLists()
    }, [genre, type])



    return (
        <div className='home'>
            <Navbar />
            <Featured type={type} />
            {
                lists?.map(list =>
                    <List
                        key={list?._id}
                        list={list}
                    >
                    </List>)
            }

            {/* <List /> */}


        </div>


    )
}

export default Home