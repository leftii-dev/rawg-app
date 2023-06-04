import GameCard from '@/components/GameCard'

const getGames = async (): Promise<GameMin[]> => {
    const res = await fetch(`${process.env.API_BASE_URL}/games?key=${process.env.API_KEY}`)

    if(!res.ok){
        throw new Error('getGames() Fetch Failed')
    }

    const data = await res.json()
    return data.results
}


export default async function Games() {
    const games: GameMin[] = await getGames()
    return(
        <main className='m-24 rounded-md grid grid-cols-4 gap-12'>
            {
                games.map(game => (
                    <GameCard key={game.id} {...game} />
                ))
            }
        </main>
    )
}