import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getDestination } from '../Redux/productReducer/action';


export const SearchBar = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    let ref = useRef();



    let paramObj = {
        params: {
            q: search && search
        }

    }

       


    useEffect(() => {
        if (ref.current) {
            clearTimeout(ref.current)
        }
        ref.current = setTimeout(() => {
            dispatch(getDestination(paramObj))

        }, 1000)
    }, [search])




    return (
        <div>
            <input type='text' placeholder=' Search destination.....'
                style={{
                    display: 'block', margin: 'auto', marginTop: "10px", padding: '2px', border: "2px solid red"

                }}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

