import { Icon } from '@iconify/react'
import React from 'react'
import "./Featured.css"

const Featured = ({ type }) => {
    return (
        <div className='featured'>
            {
                type && (
                    <div className='catagory'>
                        <span>{type === "movie" ? "Movies" : "Series"}</span>
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

            <img width="100%" className='first-img' src="https://img.freepik.com/premium-photo/remote-control-table-with-tv-background_172251-1005.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125" alt="" />

            <div className="info">
                {/* <img className='' src="https://img.freepik.com/free-vector/cola-popcorn-tickets_1284-11410.jpg?size=338&ext=jpg&ga=GA1.2.1198299981.1652771125" alt="" /> */}

                <span className='mt-10 text-xl text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dicta vitae cupiditate, necessitatibus id animi suscipit laborum debitis quam architecto?</span>

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