import { Icon } from '@iconify/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Listitem from '../listitem/Listitem'
import "./List.scss"

const List = ({ list }) => {

    const [sliteNumber, setSliteNumber] = useState(0)
    const [isMove, setIsMove] = useState(false)
    const listRef = useRef()



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










    const handleClick = (direction) => {
        setIsMove(true)
        let distance = listRef.current.getBoundingClientRect().x - 50

        if (direction === "left" && sliteNumber > 0) {
            setSliteNumber(sliteNumber - 1)
            listRef.current.style.transform = `translateX(${266 + distance}px)`
        }

        if (direction === "right" && sliteNumber < 5) {
            setSliteNumber(sliteNumber + 1)
            listRef.current.style.transform = `translateX(${-266 + distance}px)`
        }


    }

    console.log(movie, "movie")

    const boom = movie?.Search

    console.log(boom, "boom")

    return (
        <div className='list'>
            <span className='listTittle'>{list?.tittle}</span>
            <div className="wrapper ">
                <Icon onClick={() => handleClick("left")}
                    style={{ display: !isMove && 'none' }}
                    icon="akar-icons:arrow-back-thick" className='sliderArrow left' />
                <div className="container" ref={listRef}>
                    {
                        movie?.map((item, index) => (
                            < Listitem
                                movie={movie}
                                index={index}
                                item={item}
                                key={item._id}
                            />

                        ))
                    }
                </div>
                <Icon onClick={() => handleClick("right")} icon="akar-icons:arrow-forward-thick" className='sliderArrow right' />
            </div>
        </div>
    )
}

export default List