import React from 'react';
import toronto from '../images/toronto.jpg';
import popularDestinations from '../data/popularDestinations';


const Cards = () => {
    return (
        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
            <h2 className="text-xl text-gray-900 font-medium">Popular Destinations</h2>
            <p className="mt-2 text-gray-600">
                A selection of great work-friendly cities with lots to see and explore.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

                {popularDestinations.map(destination => (
                    <div key={destination.city} className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                        <img className="h-32 w-32 flex-shrink-0" src={destination.imageUrl} alt={destination.imageAlt} />
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-semibold text-gray-800">{destination.city}</h3>
                            <p className="text-gray-600">${destination.averagePrice} / night average</p>
                            <div className="mt-4">
                                <a 
                                className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm" 
                                href="#explore"> Explore {destination.propertyCount} properties</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
