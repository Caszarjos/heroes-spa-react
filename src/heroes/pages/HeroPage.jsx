import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

  //obtener params
  const navigate = useNavigate();
  const { heroId } = useParams();

  // actualiza cuando id cambie
  const hero = useMemo( () => getHeroById(heroId), [ heroId ]); 


  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="container flex gap-20 animate__backInLeft">

      <img
        src={`/assets/heroes/${heroId}.jpg`}
        alt={hero.superhero}
        className="w-1/2 max-h-full mt-10 lg:max-h-[700px] lg:max-w-[500px]"
      />
      <div>
        <h1>{hero.superhero}</h1>
        <ul>
          <li> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li> <b>Publisher:</b> {hero.publisher} </li>
          <li> <b>First appereance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> <b>Characters</b> </h5>
        <p>{hero.characters}</p>
        <button 
          className="btn btn-gray-outline mt-5"
          onClick={ onNavigateBack }>
          Return
        </button>
      </div>
    </div>
  )
}
