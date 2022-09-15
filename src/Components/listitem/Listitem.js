import { Icon } from '@iconify/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useNavigate } from 'react-router-dom'
import "./Listitems.css"

const Listitem = ({ index, item }) => {
    const navigate = useNavigate("")
    const [isHover, setIshover] = useState(false)

    const [movie, setMovie] = useState()
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res =
                    await axios.get("https://limitless-inlet-11731.herokuapp.com/movie")
                setMovie(res.data)
                // console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }
        getRandomLists()
    }, [])


    console.log(item, "item boss")


    const { desc, genre, img, imgSm, imgTitle, limit, tittle, trailer, video, year, _id } = item || {}

    // const { Poster, Title } = item || {}

    // const trailer = "https://youtu.be/pKctjlxbFDQ"
    return (
        <div onClick={() => navigate(`movie/${_id}`)} >
            <div className='listItem'
                style={{ left: isHover && index * 256 - 50 + index * 2.5 }}
                onMouseEnter={() => setIshover(true)} onMouseLeave={() => setIshover(false)}>
                <div className="card  listItem-div  mx-1 p-0 m-0 border-0  shadow-xl cursor-pointer">
                    <div className="card-body img-card  p-0 m-0 ">
                        {
                            !isHover && (
                                <img src={img} alt="" />

                            )
                        }

                        {isHover && (


                            <div className=''>
                                {/* <video src={trailer} autoPlay={true} loop></video> */}

                                <ReactPlayer width=""

                                    onDuration={false}

                                    height="150px" controls playing={true} loop volume={false} url={trailer} />

                                <div className="itemInfo">
                                    <div className="icons flex">
                                        <Icon className='text-2xl rounded-full mx-1' icon="ci:play-circle-filled" />
                                        <Icon className='text-2xl rounded-full mx-1' icon="bxs:comment-add" />
                                        <Icon className='text-2xl rounded-full mx-1' icon="bx:like" />
                                        <Icon className='text-2xl rounded-full mx-1' icon="bx:like" rotate={2} />
                                    </div>
                                </div>

                                <div className="itemInfoTop mb-1">
                                    <span className='mx-1'>{tittle}</span>
                                    netfliex
                                    movie
                                    <span>{year}</span>
                                    <span className='limit border-2  mx-1'>{limit}</span><br />
                                    <span>{year}</span>
                                </div>
                                <div className="text-small text-xs">
                                    {desc}
                                </div>
                                <div className="genre">
                                    { }
                                </div>
                            </div>

                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}


export default Listitem