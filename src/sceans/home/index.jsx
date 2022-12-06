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
          {movieList && movieList.map((category) => (
            <ShowsCardScroller category={category} key={category.id} />
          ))}
        </div>
        <ShowsCard />
      </div>
    </PreviewCard>
  )
}

export default Home;