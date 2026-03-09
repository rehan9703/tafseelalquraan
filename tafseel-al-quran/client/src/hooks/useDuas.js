import { useState, useEffect } from 'react'
import api from '../services/axios'

export const useDuas = (situation = 'All') => {
    const [duas, setDuas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDuas = async () => {
            try {
                setLoading(true)
                const { data } = await api.get('/duas', { params: { situation: situation === 'All' ? undefined : situation } })
                setDuas(data.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchDuas()
    }, [situation])

    return { duas, loading, error }
}
