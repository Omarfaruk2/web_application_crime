import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Featured from '../featured/Featured'
import Navbar from '../Navbar/Navbar'
import SingleSeries from './SingleSeries'

const Series = () => {

    const [seriess, SetSeriess] = useState([])

    useEffect(() => {
        fetch("https://limitless-inlet-11731.herokuapp.com/series")
            .then(res => res.json())
            .then(data => SetSeriess(data))
    }, [])

    return (
        <div>
            <Navbar />
            <Featured />

            <div className='bg-black'>


                <div className='grid grid-cols-4'>
                    {
                        seriess?.map(series => <SingleSeries
                            series={series}
                            key={series._id}
                        >

                        </SingleSeries>)
                    }


                </div>



            </div>
        </div>
    )
}

export default Series