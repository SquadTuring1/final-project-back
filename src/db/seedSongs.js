import {
  AlbumModel,
  GenreModel,
  SongModel,
  UserModel,
} from "../models/index.js";
const songs = [
  {
    title: "First Space Voyage",
    artist: "Megatone",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/01_Megatone_-_First_Space_Voyage_a9prkm.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/cover_s4386r.webp",
    album: "First Space Voyage",
    genre: "Electronic",
  },
  {
    title: "Starship (Inside Yourself)",
    artist: "Megatone",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/02_Megatone_-_Starship_Inside_Yourself_acn0ec.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/cover_s4386r.webp",
    album: "First Space Voyage",
    genre: "Electronic",
  },
  {
    title: "Electron",
    artist: "Megatone",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/03_Megatone_-_Electron_ruoksp.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/cover_s4386r.webp",
    album: "First Space Voyage",
    genre: "Electronic",
  },
  {
    title: "Mindframe",
    artist: "Megatone",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/04_Megatone_-_Mindframe_gmyti3.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/cover_s4386r.webp",
    album: "First Space Voyage",
    genre: "Electronic",
  },
  {
    title: "Beyond The Universe (Transcendance)",
    artist: "Megatone",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/05_Megatone_-_Beyond_The_Universe_Transcendance_gahate.mp33",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/cover_s4386r.webp",
    album: "First Space Voyage",
    genre: "Electronic",
  },
  {
    title: "Existence (Without A Cause) (part 2)",
    artist: "Megatone",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/06_Megatone_-_Existence_Without_A_Cause_part_2_npshsc.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Megatone%20-%20First%20Space%20Voyage/cover_s4386r.webp",
    album: "First Space Voyage",
    genre: "Electronic",
  },
  {
    title: "Mr. Pink",
    artist: "Wolf Asylum",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699915/electronic/Wolf%20Asylum%20-%20Dogflower/01_Wolf_Asylum_-_Mr._Pink_mdz2gq.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Wolf%20Asylum%20-%20Dogflower/cover_ga8hks.webp",
    album: "DogFlower",
    genre: "Electronic",
  },
  {
    title: "Hubris",
    artist: "Wolf Asylum",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699915/electronic/Wolf%20Asylum%20-%20Dogflower/02_Wolf_Asylum_-_Hubris_rwrder.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Wolf%20Asylum%20-%20Dogflower/cover_ga8hks.webp",
    album: "DogFlower",
    genre: "Electronic",
  },
  {
    title: "Koord",
    artist: "Wolf Asylum",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699915/electronic/Wolf%20Asylum%20-%20Dogflower/03_Wolf_Asylum_-_Koord_cvfqef.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Wolf%20Asylum%20-%20Dogflower/cover_ga8hks.webp",
    album: "DogFlower",
    genre: "Electronic",
  },
  {
    title: "Psyche",
    artist: "Wolf Asylum",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699914/electronic/Wolf%20Asylum%20-%20Dogflower/04_Wolf_Asylum_-_Psyche_eyt1fo.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Wolf%20Asylum%20-%20Dogflower/cover_ga8hks.webp",
    album: "DogFlower",
    genre: "Electronic",
  },
  {
    title: "Zorthos",
    artist: "Wolf Asylum",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699915/electronic/Wolf%20Asylum%20-%20Dogflower/05_Wolf_Asylum_-_Zorthos_wv4nk1.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Wolf%20Asylum%20-%20Dogflower/cover_ga8hks.webp",
    album: "DogFlower",
    genre: "Electronic",
  },
  {
    title: "Psyche - Adaption Mix",
    artist: "Wolf Asylum",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699915/electronic/Wolf%20Asylum%20-%20Dogflower/06_Wolf_Asylum_-_Psyche_-_Adaption_Mix_nxz3y8.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699912/electronic/Wolf%20Asylum%20-%20Dogflower/cover_ga8hks.webp",
    album: "DogFlower",
    genre: "Electronic",
  },
  {
    title: "The Father, The Son, and The Harold Rubin",
    artist: "Ehran Elisha, Harold Rubin and Haim Elisha",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699791/jazz/East%20of%20Jaffa/01_Ehran_Elisha_Harold_Rubin_and_Haim_Elisha_-_The_Father_The_Son_and_The_Harold_Rubin_cd1ab3.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/East%20of%20Jaffa/cover_wzhple.webp3",
    album: "East of Jaffa",
    genre: "Jazz",
  },
  {
    title: "No More Blues",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699790/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/01_Jazz_at_Mladost_Club_-_No_More_Blues_v3zjp1.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Avenue B",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699793/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/02_Jazz_at_Mladost_Club_-_Avenue_B_aeeh2g.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Blue Monk",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699807/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/03_Jazz_at_Mladost_Club_-_Blue_Monk_takncx.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Cravan",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666719376/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/04_Jazz_at_Mladost_Club_-_Caravan_n1szj3.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Balkan improvisation",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666719426/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/05_Jazz_at_Mladost_Club_-_Balkan_improvisation_zokpmf.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Blue bossa",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666719423/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/06_Jazz_at_Mladost_Club_-_Blue_bossa_tt7x2c.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Maiden voyage",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699803/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/07_Jazz_at_Mladost_Club_-_Maiden_voyage_xxkiu5.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "C-mol blues",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699804/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/08_Jazz_at_Mladost_Club_-_C-mol_blues_cza6hu.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Kurina blues",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666719517/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/09_Jazz_at_Mladost_Club_-_Kurina_blues_tzw8a7.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Song for Bilbao",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666719514/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/10_Jazz_at_Mladost_Club_-_Song_for_Bilbao_ubckvr.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Konflikt",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699791/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/11_Jazz_at_Mladost_Club_-_Konflikt_fwt1oh.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Arana",
    artist: "Jazz at Mladost Club",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699791/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/12_Jazz_at_Mladost_Club_-_Arana_h6ub1d.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699779/jazz/Jazz%20at%20Mladost%20Club%20-%20Jazz%20Night/cover_pzehw3.webp",
    album: "Jazz Night",
    genre: "Jazz",
  },
  {
    title: "Met Some New Colors",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699851/pop/The%20Pop%20Winds%20-%20The%20Turquoise/01_The_Pop_Winds_-_Met_Some_New_Colors_ab4rcc.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "Owl Eyes",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699849/pop/The%20Pop%20Winds%20-%20The%20Turquoise/02_The_Pop_Winds_-_Owl_Eyes_vxdvgt.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "Fools",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699851/pop/The%20Pop%20Winds%20-%20The%20Turquoise/03_The_Pop_Winds_-_Fools_d8gsuo.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "Perennial",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699852/pop/The%20Pop%20Winds%20-%20The%20Turquoise/04_The_Pop_Winds_-_Perennial_tc4xsj.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "The Turquoise",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699855/pop/The%20Pop%20Winds%20-%20The%20Turquoise/05_The_Pop_Winds_-_The_Turquoise_qhn247.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "Feel It",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699851/pop/The%20Pop%20Winds%20-%20The%20Turquoise/06_The_Pop_Winds_-_Feel_It_qng0cs.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "Drowning In The Dark",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699851/pop/The%20Pop%20Winds%20-%20The%20Turquoise/07_The_Pop_Winds_-_Drowning_In_The_Dark_scylqk.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "Good Person",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699854/pop/The%20Pop%20Winds%20-%20The%20Turquoise/08_The_Pop_Winds_-_Good_Person_ol8d5i.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "Will Be A Dream",
    artist: "The Pop Winds",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699854/pop/The%20Pop%20Winds%20-%20The%20Turquoise/09_The_Pop_Winds_-_Will_Be_A_Dream_qqiwjq.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699847/pop/The%20Pop%20Winds%20-%20The%20Turquoise/cover_tyq4ic.webp",
    album: "The Turquoise",
    genre: "Pop",
  },
  {
    title: "Groove Is In The Heart",
    artist: "Ergo Phizmiz and the Midnight Florists",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699849/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/01_Ergo_Phizmiz_and_the_Midnight_Florists_-_Groove_Is_In_The_Heart_dlarf5.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699846/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/cover_amli9x.webp",
    album: "Now That's What We Pump At The Party",
    genre: "Pop",
  },
  {
    title: "Mr Vain",
    artist: "Ergo Phizmiz and the Midnight Florists",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699849/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/02_Ergo_Phizmiz_and_the_Midnight_Florists_-_Mr_Vain_qemy9r.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699846/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/cover_amli9x.webp",
    album: "Now That's What We Pump At The Party",
    genre: "Pop",
  },
  {
    title: "Blue (Da Ba Dee)",
    artist: "Ergo Phizmiz and the Midnight Florists",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699849/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/03_Ergo_Phizmiz_and_the_Midnight_Florists_-_Blue_Da_Ba_Dee_c3iac5.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699846/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/cover_amli9x.webp",
    album: "Now That's What We Pump At The Party",
    genre: "Pop",
  },
  {
    title: "Gonna Make You Sweat",
    artist: "Ergo Phizmiz and the Midnight Florists",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699848/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/04_Ergo_Phizmiz_and_the_Midnight_Florists_-_Gonna_Make_You_Sweat_p4xpzz.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699846/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/cover_amli9x.webp",
    album: "Now That's What We Pump At The Party",
    genre: "Pop",
  },
  {
    title: "Mambo No 5",
    artist: "Ergo Phizmiz and the Midnight Florists",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699849/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/05_Ergo_Phizmiz_and_the_Midnight_Florists_-_Mambo_No_5_mzpqjv.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699846/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/cover_amli9x.webp",
    album: "Now That's What We Pump At The Party",
    genre: "Pop",
  },
  {
    title: "Rhythm is a Dancer",
    artist: "Ergo Phizmiz and the Midnight Florists",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699855/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/06_Ergo_Phizmiz_and_the_Midnight_Florists_-_Rhythm_is_a_Dancer_nglzu8.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699846/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/cover_amli9x.webp",
    album: "Now That's What We Pump At The Party",
    genre: "Pop",
  },
  {
    title: "Encore Une Fois",
    artist: "Ergo Phizmiz and the Midnight Florists",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699852/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/07_Ergo_Phizmiz_and_the_Midnight_Florists_-_Encore_Une_Fois_exha4d.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699846/pop/Ergo%20Phizmiz%20and%20the%20Midnight%20Florists%20-%20Now%20That%27s%20What%20We%20Pump%20At%20The%20Party/cover_amli9x.webp",
    album: "Now That's What We Pump At The Party",
    genre: "Pop",
  },
  {
    title: "Death March",
    artist: "Pompeii",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699876/rock/Here%20Comes%20A%20Big%20Black%20Cloud%21%21%20-%20Pompeii/01_Here_Comes_A_Big_Black_Cloud_-_Death_March_xvnwc4.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Here%20Comes%20A%20Big%20Black%20Cloud%21%21%20-%20Pompeii/cover_lfe9sw.webp",
    album: "Here Comes A Big Black Cloud",
    genre: "Rock",
  },
  {
    title: "Graverobbin",
    artist: "Pompeii",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699876/rock/Here%20Comes%20A%20Big%20Black%20Cloud%21%21%20-%20Pompeii/02_Here_Comes_A_Big_Black_Cloud_-_Graverobbin_htuxtg.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Here%20Comes%20A%20Big%20Black%20Cloud%21%21%20-%20Pompeii/cover_lfe9sw.webp",
    album: "Here Comes A Big Black Cloud",
    genre: "Rock",
  },
  {
    title: "The Fly Pt. II",
    artist: "Pompeii",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699876/rock/Here%20Comes%20A%20Big%20Black%20Cloud%21%21%20-%20Pompeii/03_Here_Comes_A_Big_Black_Cloud_-_The_Fly_Pt._II_s4vxrd.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Here%20Comes%20A%20Big%20Black%20Cloud%21%21%20-%20Pompeii/cover_lfe9sw.webp",
    album: "Here Comes A Big Black Cloud",
    genre: "Rock",
  },
  {
    title: "Come Back (and stop those rainy days)",
    artist: "Rod",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699886/rock/Rod%20-%20Noises%20in%20my%20head/01_Rod_-_Come_Back_and_stop_those_rainy_days_ykgbqk.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
    album: "Noises in my head",
    genre: "Rock",
  },
  {
    title: "The River Of The Dream",
    artist: "Rod",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699877/rock/Rod%20-%20Noises%20in%20my%20head/02_Rod_-_The_River_Of_The_Dream_xkgq2z.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
    album: "Noises in my head",
    genre: "Rock",
  },
  {
    title: "Tempest In My Head",
    artist: "Rod",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699882/rock/Rod%20-%20Noises%20in%20my%20head/03_Rod_-_Tempest_In_My_Head_gzk10o.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
    album: "Noises in my head",
    genre: "Rock",
  },
  {
    title: "Inner Guitars",
    artist: "Rod",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/04_Rod_-_Inner_Guitars_bshexe.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
    album: "Noises in my head",
    genre: "Rock",
  },
  {
    title: "Time",
    artist: "Rod",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699884/rock/Rod%20-%20Noises%20in%20my%20head/06_Rod_-_Time_r2wjwx.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
    album: "Noises in my head",
    genre: "Rock",
  },
  {
    title: "Sursaut",
    artist: "Rod",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/07_Rod_-_Sursaut_fdbdrw.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
    album: "Noises in my head",
    genre: "Rock",
  },
  {
    title: "Inner Voices",
    artist: "Rod",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699878/rock/Rod%20-%20Noises%20in%20my%20head/08_Rod_-_Inner_Voices_yfc2vr.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
    album: "Noises in my head",
    genre: "Rock",
  },
  {
    title: "Inner Rhthym",
    artist: "Rod",
    fileUrl:
      "https://res.cloudinary.com/dwrqbkeyb/video/upload/v1666699885/rock/Rod%20-%20Noises%20in%20my%20head/05_Rod_-_Inner_Rhythm_x2dey0.mp3",
    imageUrl:
      "https://res.cloudinary.com/dwrqbkeyb/image/upload/v1666699876/rock/Rod%20-%20Noises%20in%20my%20head/download_bjejyr.webp",
    album: "Noises in my head",
    genre: "Rock",
  },
];

const seedSongs = async () => {
  try {
    songs.forEach(async (song) => {
      const allUsers = await UserModel.find({});
      const allAlbums = await AlbumModel.find({});
      const allGenres = await GenreModel.find({});
      const usersId = allUsers.map((user) => user._id.toString());
      const randomUser = usersId[Math.floor(Math.random() * usersId.length)];
      const randomUser2 =
        usersId[Math.floor(Math.random() * usersId.length) - 1];

      const findGenre = allGenres.filter((genre) =>
        genre.title.toLowerCase() === song.genre.toLowerCase()
          ? genre.id
          : null,
      );

      const findAlbum = allAlbums.filter((album) =>
        song.album.toLowerCase() === album.title.toLowerCase()
          ? album.id
          : null,
      );

      await SongModel.create({
        title: song.title,
        artist: song.artist,
        fileUrl: song.fileUrl,
        imageUrl: song.imageUrl,
        album: findAlbum[0]._id.toString(),
        genre: findGenre[0]._id.toString(),
        likedBY: [randomUser, randomUser2],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export default seedSongs;
