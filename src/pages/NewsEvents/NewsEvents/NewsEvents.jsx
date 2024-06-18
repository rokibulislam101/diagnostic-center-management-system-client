import { Helmet } from "react-helmet-async"
import Gallery from "../Gallery/Gallery"
import NewEvents from "../NewEvents/NewEvents"


const NewsEvents = () => {
  return (
    <div>
      <Helmet>
        <title>News & Events</title>
      </Helmet>
      <NewEvents></NewEvents>
      <Gallery></Gallery>
    </div>
  )
}

export default NewsEvents
