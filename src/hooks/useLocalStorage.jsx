import React, { useEffect, useState } from 'react'

function getSavedValue(key,value) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue
    return value
}

function useLocalStorage(key, value) {
    const [storedValue, setStoredValue] = useState(()=> {
        return getSavedValue(key,value)
    })
    useEffect(()=> {
        localStorage.setItem(key,JSON.stringify(storedValue))
    }, [storedValue])

    return [storedValue, setStoredValue]
}

export default useLocalStorage
