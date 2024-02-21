import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>);
    return <p className="text-base">{characters}</p>
    /*
    return ( alter_ego === characters )
     ? <></>
     : <p>( characters )</p>
    */
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    //const charactersByHero = (<p className="text-base">{ characters }</p>);
    return (
        <div className="grid grid-cols-4 gap-4 mt-5 rounded shadow-lg animate__fadeIn">

            <img className="col-span-1 max-h-[30rem]" src={heroImageUrl} alt={superhero} />

            <div className="col-span-3 p-4">
                <h2 className="font-bold text-4xl mb-2">{superhero}</h2>

                <p className="">
                    {alter_ego}
                </p>

                <CharactersByHero characters={characters} alter_ego={alter_ego} />

                <p className="pb-5">
                    <small className="text-gray-400">{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`} className="">
                    More...
                </Link>
            </div>

        </div>
    )
}
