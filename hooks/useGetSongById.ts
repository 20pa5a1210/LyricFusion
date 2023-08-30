import { useEffect, useMemo, useState } from "react"
import { Song } from "../types"
import { useSessionContext } from "@supabase/auth-helpers-react"
import { toast } from "react-hot-toast"
const useGetSongById = (id?: string) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const [song, setSong] = useState<Song | undefined>(undefined)

    const { supabaseClient } = useSessionContext()

    useEffect(() => {
        if (!id) return

        setIsLoaded(true)

        const fetchSong = async () => {

            const { data, error } = await supabaseClient
                .from('songs')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                setIsLoaded(false)
                console.error(error)
                return toast.error(error.message)
            }

            if (data) {
                setSong(data as Song)
            }

            setIsLoaded(false)
        }

        fetchSong()


    }, [id, supabaseClient])

    return useMemo(() => ({ isLoaded, song }), [isLoaded, song])
}

export default useGetSongById
