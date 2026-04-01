import GridGallery from "../components/grid-gallery";

export default function Index() {
  const images = [
    "./1.jpg",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
    "./7.jpg"
  ];

  return (
    <>
      <GridGallery images={images} />
    </>
  );
}
