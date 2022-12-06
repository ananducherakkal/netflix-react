import ShowsCard from "../../components/ShowsCard";
import ShowsCardScroller from "../../components/ShowsCardScroller";
import { PreviewCard } from "../../context/PreviewCard";
import { movieList } from "../../mockData/movieList";


const Home = () => {
  return (
    <PreviewCard>
      <div className="flex flex-col overflow-x-auto min-h-screen relative">
        <div className="w-screen h-screen main-content-screen">
        </div>
        <div className="flex flex-col -mt-24 space-y-8">
          {movieList && movieList.map((category, id) => (
            <div  className="flex flex-col">
              <div className="text-neutral-200 text-lg font-semibold mb-2 px-12">
                { category.category }
              </div>
              <ShowsCardScroller key={id} shows={category.movies} />
            </div>
          ))}
        </div>
        <ShowsCard />
      </div>
    </PreviewCard>
  )
}

export default Home;