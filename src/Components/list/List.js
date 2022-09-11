import { Icon } from '@iconify/react'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Listitem from '../listitem/Listitem'
import "./List.scss"

const List = () => {

    const [sliteNumber, setSliteNumber] = useState(0)
    const [isMove, setIsMove] = useState(false)
    const listRef = useRef()

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

    return (
        <div className='list'>
            <span className='listTittle'>Continue to watch</span>
            <div className="wrapper ">
                <Icon onClick={() => handleClick("left")}
                    style={{ display: !isMove && 'none' }}
                    icon="akar-icons:arrow-back-thick" className='sliderArrow left' />
                <div className="container" ref={listRef}>
                    <Listitem index={0} />
                    <Listitem index={1} />
                    <Listitem index={2} />
                    <Listitem index={3} />
                    <Listitem index={4} />
                    <Listitem index={5} />
                    <Listitem index={6} />
                    <Listitem index={7} />
                    <Listitem index={8} />
                    <Listitem index={9} />
                </div>
                <Icon onClick={() => handleClick("right")} icon="akar-icons:arrow-forward-thick" className='sliderArrow right' />
            </div>
        </div>
    )
}

export default List