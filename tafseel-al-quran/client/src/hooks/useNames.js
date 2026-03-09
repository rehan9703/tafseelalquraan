import { useState, useEffect } from 'react'
import api from '../services/axios'

export const useNames = (filters = {}) => {
    const [names, setNames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [memorizedIds, setMemorizedIds] = useState(() => {
        const saved = localStorage.getItem('tafseel-memorized-names')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        const fetchNames = async () => {
            try {
                setLoading(true)
                const { data } = await api.get('/names')
                setNames(data.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchNames()
    }, [])

    const toggleMemorized = (id) => {
        const newIds = memorizedIds.includes(id)
            ? memorizedIds.filter(mid => mid !== id)
            : [...memorizedIds, id]
        setMemorizedIds(newIds)
        localStorage.setItem('tafseel-memorized-names', JSON.stringify(newIds))
    }

    return { names, loading, error, memorizedIds, toggleMemorized }
}
