const getGameDetails = async (gameId: string) : Promise<GameDetail> => {
    const res = await fetch(`${process.env.API_BASE_URL}/games/${gameId}?key=${process.env.API_KEY}`,{
        next: {
            revalidate: 3600
        }
    })

    if(!res.ok){
        throw new Error('Failed to fetch by game ID')
    }

    return await res.json()
}

export default async function GameDetail({params}:{params: {gameId: string}}){
    const gameDetails = await getGameDetails(params.gameId)
    console.info(gameDetails)
    return(
        <h1 className='text-title font-title text-3xl'>{gameDetails.name}</h1>
    )
}