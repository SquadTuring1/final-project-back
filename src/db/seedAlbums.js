import { AlbumModel } from "../models/index.js";

const albums = [
  {
    title: "Here Comes A Big Black Cloud",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Here%20Comes%20A%20Big%20Black%20Cloud%21%21%20-%20Pompeii/cover_lfe9sw.webp",
  },
  {
    title: "Noises in my head",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
  },
  {
    title: "The Turquoise",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
  },
  {
    title: "Now That's What We Pump At The Party",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699846/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/cover_amli9x.webp",
  },
  {
    title: "Jazz Night",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
  },
  {
    title: "East of Jaffa",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/East%20of%20Jaffa/cover_wzhple.webp",
  },
  {
    title: "DogFlower",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Wolf%20Asylum%20-%20Dogflower/cover_ga8hks.webp",
  },
  {
    title: "First Space Voyage",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/cover_s4386r.webp",
  },
];

const seedAlbums = () => {
  return albums.map(async ({ title, imageUrl }) => {
    try {
      await AlbumModel.create({ title, imageUrl });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export default seedAlbums;
