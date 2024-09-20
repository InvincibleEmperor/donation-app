import React from 'react'
import Outer from '../component/HOC/Outer'
import { decrement, increment, incrementByAmount } from '../redux/slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)

    return (
        <Outer>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className='text-3xl text-red-500'>Count: {count}</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
                            <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More

                            </a>
                        </div>
                        <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
                            <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More

                            </a>
                        </div>
                        <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
                            <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More

                            </a>
                        </div>
                        <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
                            <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More

                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>

            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

            <button
                aria-label="Decrement value"
                onClick={() => dispatch(incrementByAmount(5))}
            >
                Increment by 5
            </button>
        </Outer>
    )
}

export default Home
