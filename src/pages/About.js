import React from 'react'
import Outer from '../component/HOC/Outer'
import { Counter } from '../component/Counter'
import { useSelector } from 'react-redux'

const About = () => {
    
    const count = useSelector((state) => state.counter.value)

    return (
        <Outer>
            <p className='py-14 text-3xl'>
                This is About page {count}
            </p>

            <Counter/>
        </Outer>
    )
}

export default About
