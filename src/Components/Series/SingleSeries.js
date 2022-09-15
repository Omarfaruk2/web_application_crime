import React from 'react'

const SingleSeries = ({ series }) => {


    const { tittle, desc, img, trailer, video } = series || {}

    return (
        <div className="card card-compact mx-auto shadow-xl">
            <figure><img className='w-full mx-auto' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                {/* <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    )
}

export default SingleSeries