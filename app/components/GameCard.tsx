import Image from 'next/image';
import Link from 'next/link';


export default function GameCard(game: GameMin){
    return(
        
        <div className='bg-primary-200 p-8 col-span-4 md:col-span-2 xl:col-span-1'>
            <Link href={`rawg/games/${game.id}`}>
            <p className='font-title text-2xl text-title'>{game.name}</p>
            <div className='aspect-video relative col-span-4 mb-2'>
                <Image 
                    className='object-contain rounded-md' 
                    fill 
                    src={game.background_image} 
                    alt={game.name}/>
            </div>
            <p className='font-body text-body'>Rating: {game.rating}/5</p>
            </Link>
        </div>
    )
}