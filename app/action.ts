"use server"

export const fetchAnime = async (page: number) => {
    const responese = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)

    const data = await responese.json()

    return data
}