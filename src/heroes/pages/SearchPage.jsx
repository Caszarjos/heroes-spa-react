import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../ui/hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // separa cada query param
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  console.log(q.length, heroes.length);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase()}`);
  }

  return (
    <div className="container">
      <h1>SearchPage</h1>
      <hr />
      <div className="flex flex-col md:flex-row gap-10">
        <div className="max-w-90">
          <h4 className="mt-8 font-bold">Searching</h4>
          <hr className="w-full md:w-96 " />
          <form onSubmit={onSearchSubmit} className="mt-5">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={onInputChange} />

            <button className="btn btn-gray-outline w-full mt-5">
              Search
            </button>
          </form>
        </div>

        <div className="w-full">
          <h4 className="mt-8 font-bold">Results</h4>
          <hr />

          {
            /*
              (q == '')
                ? (
                  <div class="mt-5 bg-blue-100 border-t border-b border-blue-500 rounded px-4 py-3" role="alert">
                    <p class="font-bold text-blue-700">Search a hero</p>
                    <p class="text-sm text-blue-700">Finding your selected hero</p>
                  </div>
                )
                : (heroes.length === 0) && (
                  <div class="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">Holy smokes!</strong>
                    <span class="block sm:inline"> No hero with <b>{q}</b></span>
                  </div>
                )*/
          }
          <div
            className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            style={{ display: showError ? '' : 'none' }}>
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline"> No hero with <b>{q}</b></span>
          </div>

          <div
            className="mt-5 bg-blue-100 border-t border-b border-blue-500 rounded px-4 py-3"
            style={{ display: showSearch ? '' : 'none' }}>
            <p className="font-bold text-blue-700">Search a hero</p>
            <p className="text-sm text-blue-700">Finding your selected hero</p>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
