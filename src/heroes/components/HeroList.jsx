import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher] );

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-7">
            {
                heroes.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
