import CategoryContainer from "./conponents/CategoryContainer.component";

function App() {
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
    <div className="categories-container m-8 inline-grid gap-7 grid-cols-3 grid-row-3">
      {categories.map(({ id, title, url}) => (
        <CategoryContainer key={id} title={title} url={url} />
      ))}
    </div>
  );
}

export default App;
