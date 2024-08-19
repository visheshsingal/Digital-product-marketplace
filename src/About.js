import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Apostles' Archive",
    para: "At Apostles' Archive, we're passionate about connecting creators with enthusiasts of digital content. Our platform provides a space for artists, writers, musicians, and developers to showcase their work and reach a global audience. Join us in celebrating creativity and exploring a world of digital possibilities.",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};
// const About = () => {
//   const { myName } = useProductContext();

//   const data = {
//     name: "Apostles' Archive",
//   };

//   return (
//     <>
//       {myName}
//       <HeroSection myData={data} />
//     </>
//   );
// };

export default About;
