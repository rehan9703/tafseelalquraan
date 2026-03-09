import { useState, useEffect } from 'react'
import api from '../services/axios'

export const useProphets = () => {
    const [prophets, setProphets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProphets = async () => {
            try {
                setLoading(true)
                const { data } = await api.get('/prophets')
                setProphets(data.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchProphets()
    }, [])

    return { prophets, loading, error }
}

export const useHadith = (filters = {}) => {
    const [hadiths, setHadiths] = useState([])
    const [total, setTotal] = useState(0)
    const [pages, setPages] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchHadiths = async () => {
            try {
                setLoading(true)
                const { data } = await api.get('/hadith', { params: filters })
                // data.data receives the { hadiths, pagination } object from successResponse
                const responseData = data.data || {}
                setHadiths(responseData.hadiths || [])
                setTotal(responseData.pagination?.total || 0)
                setPages(responseData.pagination?.pages || 1)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchHadiths()
    }, [JSON.stringify(filters)])

    return { hadiths, total, pages, loading, error }
}
