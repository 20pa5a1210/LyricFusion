import usePlayer from "./usePlayer";
import { Song } from "../types";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
const useOnPlay = (songs: Song[]) => {
    const player = usePlayer()
    const authmodel = useAuthModal()

    const { user } = useUser()

    const onPlay = (id: string) => {

        if (!user) {
            authmodel.open()
            return
        }

        player.setId(id)
        player.setIds(songs.map(song => song.id))

    }

    return onPlay
}

export default useOnPlay
