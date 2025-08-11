import GenericsHero from "../../layouts/GenericsHero";
import MainLayout from "../../layouts/MainLayout";
import AlbumPromo from "./components/AlbumPromo";
import ToursList from "./components/ToursList";

const Home = () => {
  return (
    <MainLayout>
      <GenericsHero />
      <AlbumPromo />
      <ToursList />
    </MainLayout>
  );
};

export default Home;
