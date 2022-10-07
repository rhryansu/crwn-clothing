import CategoryContainer from "../../components/categoryContainer.component";
import { Outlet } from "react-router-dom";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      url: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      url: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      url: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      url: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      url: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className="categories-container mx-8 flex flex-wrap gap-4">
      <Outlet />
      {categories.map(({ id, title, url }) => (
        <CategoryContainer key={id} title={title} url={url} />
      ))}
    </div>
  );
}

export default Home;
