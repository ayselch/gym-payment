import { createContext, useState, useContext } from 'react'

export const GymContext = createContext()

export default function GymProvider({ children }) {
    const [selectedService, setSelectedService] = useState('')
    const [price, setPrice] = useState('')

    return (
        <GymContext.Provider value={{ selectedService, setSelectedService, price, setPrice }}>
            {children}
        </GymContext.Provider>
    )
}
export const useGym = () => useContext(GymContext);
