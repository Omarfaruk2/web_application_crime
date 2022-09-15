import { Icon } from '@iconify/react'
import React from 'react'
import ReactPlayer from 'react-player'
import { Link, useLocation, useParams } from 'react-router-dom'

const Watch = () => {
    const param = useParams()
    const location = useLocation()

    const { id } = param

    console.log(id)






    return (
        <div className='h-[100vh]'>
            <Link to="/">
                <div className="back flex">
                    <Icon icon="bx:arrow-back" />
                    Home
                </div>
            </Link>

            <ReactPlayer width="" height="100vh" onDuration={false} controls playing={true} loop url="https://youtu.be/7sDY4m8KNLc" />

        </div>
    )
}

export default Watch