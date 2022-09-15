import { Icon } from '@iconify/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Featured.css"

const Featured = ({ type }) => {



    const [random, setRandom] = useState({})

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res =
                    await axios.get("https://limitless-inlet-11731.herokuapp.com/random")
                setRandom(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getRandomLists()
    }, [])


    console.log(random, "random")


    // const { desc, genre, img, imgSm, imgTitle, limit, tittle, trailer, video, year, _id } = random || {}


    return (
        <div className='featured'>
            {
                type && (
                    <div className='catagory'>
                        <span>{type === "movies" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option >Genra</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Werstern</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Darama</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )
            }
            {/* <img width="100%" className='first-img' src="https://img.freepik.com/free-photo/young-woman-watching-streaming-service-home_23-2149007875.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125" alt="" /> */}

            <img width="100%" className='first-img'
                src="https://images2.alphacoders.com/120/thumbbig-1207046.webp" alt="" />
            {/* src={random?.img} alt="" /> */}

            <div className="info">
                <img width="50px" className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe4TMEF-I1-cCKR9vbyZJ1buQeFiShe1hxQ&usqp=CAU" alt="" />

                <span className='mt-10 text-2xl font-serif text-white'>Moon Knight is indeed a hero in both the comics and the TV show. However, he is more of an anti-hero instead of your usual comic book hero.</span>

                <div className='buttons'>
                    <button className='play btn py-5 px-10 '>
                        <Icon className='mx-1' icon="ant-design:play-circle-filled" />
                        <span className='mx-1'>Play</span>
                    </button>
                    <button className=' btn mx-5  py-5 px-10'>
                        <Icon className='mx-1' icon="bi:info-circle-fill" />
                        <span className='mx-1'>Info</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Featured