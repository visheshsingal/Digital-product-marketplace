import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const allProd = [
  {
    "id": "thapaserialnoa",
    "name": "Deciphering Data Architectures",
    "company": "James Serra",
    "price": 129900,
    "colors": [
      "#22D3EF",
      "#CDD0D0"
    ],
    "image": "https://image.ebooks.com/cover/211219932.jpg?width=166&height=250&quality=85",
    "description": "Data fabric, data lakehouse, and data mesh have recently appeared as viable alternatives to the modern data warehouse. These new architectures have solid benefits, but they're also surrounded by a lot of hyperbole and confusion. This practical book provides a guided tour of these architectures to help data professionals understand the pros and cons of each.",
    "category": "book",
    "featured": true
  },
  {
    "id": "thapaserialnob",
    "name": "Berserk",
    "company": "Kentaro Miura",
    "price": 80000,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://m.media-amazon.com/images/I/71jnEkjX8RL._AC_UF1000,1000_QL80_.jpg",
    "description": "Berserk (Japanese: ベルセルク, Hepburn: Beruseruku) is a Japanese manga series written and illustrated by Kentaro Miura. Set in a medieval Europe-inspired dark fantasy world, the story centers on the characters of Guts, a lone swordsman, and Griffith, the leader of a mercenary band called the 'Band of the Hawk'.",
    "category": "manga",
    "shipping": true,
    "featured": true
  },
  {
    "id": "thapaserialnoc",
    "name": "Vagabond",
    "company": "Takehiko Inoue",
    "price": 60000,
    "colors": [
      "#22D3EF",
      "#CDD0D0",
      "#000000"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/en/9/99/Vagabond_%28manga%29_vol._1.png",
    "description": "Vagabond (Japanese: バガボンド, Hepburn: Bagabondo) is a Japanese epic martial arts manga series written and illustrated by Takehiko Inoue. It portrays a fictionalized account of the life of Japanese swordsman Musashi Miyamoto, based on Eiji Yoshikawa's novel Musashi. It has been serialized in Kodansha's seinen manga magazine Morning since September 1998, with its chapters collected in 37 tankōbon volumes as of July 2014. Viz Media licensed the series for English release in North America and has published the current 37 volumes as of April 2015. The series has been on an extended hiatus since May 2015.",
    "category": "manga"
  },
  {
    "id": "thapaserialnod",
    "name": "Vinland Saga",
    "company": "Makoto Yukimura",
    "price": 70000,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg",
    "description": "Vinland Saga (Japanese: ヴィンランド・サガ, Hepburn: Vinrando Saga) is a Japanese historical manga series written and illustrated by Makoto Yukimura. The series is published by Kodansha, and was first serialized in the boys-targeted manga magazine Weekly Shōnen Magazine before moving to the monthly manga magazine Monthly Afternoon, aimed at young adult men. As of June 2023, its chapters have been collected in 27 tankōbon volumes. Vinland Saga has been licensed for English-language publication by Kodansha USA. The story is a dramatization of the story of Thorfinn Karlsefni and his expedition to find Vinland, with the majority of the story covering his fictional counterpart's transition from a bloodthirsty, revenge-filled teenager into a pacifistic young man; juxtaposed against this is the rise to power of King Canute, the journey of his own counterpart directly contrasting with that of Thorfinn's.",
    "category": "manga",
    "shipping": true
  },
  {
    "id": "thapaserialnoe",
    "name": "How To Code in React.js",
    "company": "Joe Morgan",
    "price": 150000,
    "colors": [
      "#22D3EF",
      "#CDD0D0"
    ],
    "image": "https://freefrontend.com/assets/img/reactjs-books/how-to-code-in-react-js.png",
    "description": "This book is an introduction to React that works from the foundations upward. Each chapter takes you a little deeper into the React ecosystem, building on your previous knowledge. Along the way, you'll learn how to maintain internal state, pass information between parts of an application, and explore different options for styling your application. Whether you are completely new to React or if you've worked with it before, this series will be accessible to you. Every chapter is self contained, so you can jump between chapters or skip whole sections.",
    "category": "book",
    "shipping": true
  },
  {
    "id": "thapaserialnof",
    "name": "Data Structure and Algorithm in C++",
    "company": "Adam Drozdek",
    "price": 120000,
    "colors": [
      "#CDD0D0"
    ],
    "image": "https://m.media-amazon.com/images/I/A1MJ8nYJByL._SY466_.jpg",
    "description": "Strengthen your students' understanding of data structures and their algorithms for the foundation they need to successfully design, implement and maintain virtually any software system with this theoretical, yet practical, text - DATA STRUCUTRES AND ALGORITHMS IN C++, 4E. Experienced author Adam Drozdek highlights the fundamental connection between data structures and their algorithms, giving equal weight to the practical implementation of data structures and the theoretical analysis of algorithms and their efficiency.",
    "category": "book",
    "shipping": true
  },
  {
    "id": "thapaserialnog",
    "name": "Loki",
    "company": "Marvel",
    "price": 29900,
    "colors": [
      "#CDD0D0",
      "#000000"
    ],
    "image": "https://thecomicbookstore.in/storage/2022/09/TCBS2560.jpeg",
    "description": "Loki Laufeyson is a character appearing in American comic books published by Marvel Comics. Created by writer Stan Lee, scripter Larry Lieber, and penciller Jack Kirby, he is based on the Norse mythological deity of the same name. Although a version of Loki first appeared in Venus #6 (August 1949), his characterization as the adoptive brother and nemesis of the superhero Thor, which has persisted to the modern age, was not introduced until Journey into Mystery.",
    "category": "poster",
    "shipping": true
  },
  {
    "id": "thapaserialnoh",
    "name": "Iron man",
    "price": 39900,
    "company": "Marvel",
    "colors": [
      "#000000",
      "#ff0000"
    ],
    "image": "https://m.media-amazon.com/images/I/51iW7TbeloL.jpg",
    "description": "Iron Man is a superhero appearing in American comic books published by Marvel Comics. Co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby, the character first appeared in Tales of Suspense #39 in 1963, and received his own title with Iron Man #1 in 1968. Shortly after his creation, Iron Man was a founding member of a superhero team, the Avengers, with Thor, Ant-Man, the Wasp, and the Hulk. Iron Man stories, individually and with the Avengers, have been published consistently since the character's creation.",
    "category": "poster",
    "featured": true,
    "shipping": true
  },
  {
    "id": "thapaserialnoi",
    "name": "Doctor Strange",
    "price": 25000,
    "company": "Marvel",
    "colors": [
      "#000000",
      "#ff0000",
      "#22D3EF"
    ],
    "image": "https://m.media-amazon.com/images/I/61o5Ca6qCWL._SX679_.jpg",
    "description": "Dr. Stephen Vincent Strange is a character appearing in American comic books published by Marvel Comics. Created by Steve Ditko, the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Strange was introduced during the Silver Age of Comic Books in an attempt to bring a different kind of character and themes of mysticism to Marvel Comics.",
    "category": "poster",
    "shipping": true
  },
  {
    "id": "thapaserialnoj",
    "name": "Homelander",
    "company": "The Boys",
    "price": 44900,
    "colors": [
      "#ff0000",
      "#000000"
    ],
    "image": "https://images-cdn.ubuy.co.in/653095729f207122d32a81e2-379071-the-boys-season-2-amazon-prime.jpg",
    "description": "The Homelander (John Gillman)[1][2] is one of the main antagonists of the comic book series The Boys and the media franchise of the same name, created by Garth Ennis and Darick Robertson. The character is depicted as an egotistical and sadistic narcissist who serves as the extremely powerful leader of The Seven—a group of corrupt and hedonistic superheroes funded by Vought-American—and the archenemy of Billy Butcher. Beneath his public image as a noble and altruistic hero, the Homelander cares little about the well-being of those he professes to protect.",
    "category": "poster"
  },
  {
    "id": "thapaserialnok",
    "name": "Attack on Titan",
    "company": "Hajime Isayama",
    "price": 50000,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg",
    "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "manga"
  },
  {
    "id": "thapaserialnol",
    "name": "Machine Learning And Artificial Intelligence",
    "price": 180000,
    "company": "Chris Neil",
    "colors": [
      "#22D3EF",
      "#000000"
    ],
    "image": "https://m.media-amazon.com/images/I/81VY09a18cL._SY466_.jpg",
    "description": "Machine learning is a data-driven approach. Hence it implies the availability of large datasets in order to make accurate decisions. In case only a limited dataset is available to solve a particular problem, it is best to use a deterministic approach. When a limited dataset is available it is hard to train a machine learning model and generalize its applicability to other similar problem. The developed model, in this case, is only applicable for the few data it was trained on.",
    "category": "book"
  }
];

let a = { "id": "thapaserialnoa", "name": "Deciphering Data Architectures", "company": "James Serra", "price": 129900, "colors": ["#22D3EF", "#CDD0D0"], "description": "Data fabric, data lakehouse, and data mesh have recently appeared as viable alternatives to the modern data warehouse. These new architectures have solid benefits, but they're also surrounded by a lot of hyperbole and confusion. This practical book provides a guided tour of these architectures to help data professionals understand the pros and cons of each.", "category": "book", "featured": true, "stock": 5, "reviews": 58, "stars": 4.8, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": " https://image.ebooks.com/cover/211219932.jpg?width=166&height=250&quality=85", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": " https://cdn.ttgtmedia.com/rms/onlineimages/data_management-big_data_arch-h_half_column_mobile.png", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhyuC2bJ31l15w7f7ZK42hGFhytF9UdeLog&usqp=CAU", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://media.licdn.com/dms/image/sync/D5627AQFvk8P-EERpBA/articleshare-shrink_800/0/1713380498683?e=2147483647&v=beta&t=zs4_TGcL_LFDocIldiSfd1oXSvemkH9dKvX6RwXB-oU", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let b = { "id": "thapaserialnob", "name": "Berserk", "company": "Kentaro Miura", "price": 80000, "colors": ["#000000", "#CDD0D0"], "description": "Berserk (Japanese: ベルセルク, Hepburn: Beruseruku) is a Japanese manga series written and illustrated by Kentaro Miura. Set in a medieval Europe-inspired dark fantasy world, the story centers on the characters of Guts, a lone swordsman, and Griffith, the leader of a mercenary band called the 'Band of the Hawk'.", "category": "manga", "featured": true, "shipping": true, "stock": 10, "reviews": 28, "stars": 5.0, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": " https://m.media-amazon.com/images/I/71jnEkjX8RL._AC_UF1000,1000_QL80_.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://sm.ign.com/ign_in/screenshot/default/berserk-manga_s2q7.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://images-cdn.ubuy.co.in/63893a075ddebf6f2700a0e9-dubdubd-berserk-manga-kentaro-miura.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://qph.cf2.quoracdn.net/main-qimg-bc0449a224a3408968e619f758f4c856.webp", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let c = { "id": "thapaserialnoc", "name": "Vagabond", "company": "Takehiko Inoue", "price": 60000, "colors": ["#22D3EF", "#CDD0D0", "#000000"], "description": "Vagabond (Japanese: バガボンド, Hepburn: Bagabondo) is a Japanese epic martial arts manga series written and illustrated by Takehiko Inoue. It portrays a fictionalized account of the life of Japanese swordsman Musashi Miyamoto, based on Eiji Yoshikawa's novel Musashi. It has been serialized in Kodansha's seinen manga magazine Morning since September 1998, with its chapters collected in 37 tankōbon volumes as of July 2014. Viz Media licensed the series for English release in North America and has published the current 37 volumes as of April 2015. The series has been on an extended hiatus since May 2015.", "category": "manga", "stock": 12, "reviews": 28, "stars": 4.2, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://upload.wikimedia.org/wikipedia/en/9/99/Vagabond_%28manga%29_vol._1.png", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": " https://i.pinimg.com/736x/39/6b/60/396b602391f837c4417056c65213abd4.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://qph.cf2.quoracdn.net/main-qimg-9c83f18608e37a9ce3a4ff736e90e549", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://i.pinimg.com/736x/d8/6d/d4/d86dd47ca559f5aa83c16f3c1b0038c8.jpg", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let d = { "id": "thapaserialnod", "name": "Vinland Saga", "company": "Makoto Yukimura", "price": 70000, "colors": ["#000000", "#CDD0D0"], "description": "Vinland Saga (Japanese: ヴィンランド・サガ, Hepburn: Vinrando Saga) is a Japanese historical manga series written and illustrated by Makoto Yukimura. The series is published by Kodansha, and was first serialized in the boys-targeted manga magazine Weekly Shōnen Magazine before moving to the monthly manga magazine Monthly Afternoon, aimed at young adult men. As of June 2023, its chapters have been collected in 27 tankōbon volumes. Vinland Saga has been licensed for English-language publication by Kodansha USA. The story is a dramatization of the story of Thorfinn Karlsefni and his expedition to find Vinland, with the majority of the story covering his fictional counterpart's transition from a bloodthirsty, revenge-filled teenager into a pacifistic young man; juxtaposed against this is the rise to power of King Canute, the journey of his own counterpart directly contrasting with that of Thorfinn's.", "category": "manga", "shipping": true, "stock": 6, "reviews": 28, "stars": 4.5, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://qph.cf2.quoracdn.net/main-qimg-f9677ec14b424d00d3d464c2049ef3cf", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": " https://i.pinimg.com/564x/62/af/56/62af5659a8a3337bc3debf1dee102b76.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://jonurenawriter.com/wp-content/uploads/2023/06/155247940_751293782195617_5930385261515302137_n.jpg?w=768", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let e = { "id": "thapaserialnoe", "name": "How To Code in React.js", "company": "Joe Morgan", "price": 150000, "colors": ["#22D3EF", "#CDD0D0"], "description": "This book is an introduction to React that works from the foundations upward. Each chapter takes you a little deeper into the React ecosystem, building on your previous knowledge. Along the way, you'll learn how to maintain internal state, pass information between parts of an application, and explore different options for styling your application. Whether you are completely new to React or if you've worked with it before, this series will be accessible to you. Every chapter is self contained, so you can jump between chapters or skip whole sections.", "category": "book", "shipping": true, "stock": 4, "reviews": 28, "stars": 2.8, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://freefrontend.com/assets/img/reactjs-books/how-to-code-in-react-js.png", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": " https://freefrontend.com/assets/img/reactjs-books/getting-started-with-react.png", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://www.codingdojo.com/blog/wp-content/uploads/react.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://miro.medium.com/v2/resize:fit:1400/1*90Jp-egw-DwRYf2F81YFMw.png", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let f = { "id": "thapaserialnof", "name": "Data Structure and Algorithm in C++", "company": "Adam Drozdek", "price": 120000, "colors": ["#CDD0D0"], "description": "Strengthen your students' understanding of data structures and their algorithms for the foundation they need to successfully design, implement and maintain virtually any software system with this theoretical, yet practical, text - DATA STRUCUTRES AND ALGORITHMS IN C++, 4E. Experienced author Adam Drozdek highlights the fundamental connection between data structures and their algorithms, giving equal weight to the practical implementation of data structures and the theoretical analysis of algorithms and their efficiency.", "category": "book", "shipping": true, "stock": 6, "reviews": 12, "stars": 4.1, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://m.media-amazon.com/images/I/A1MJ8nYJByL._SY466_.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://cdn.educba.com/academy/wp-content/uploads/2015/08/Data-Structures-and-Algorithms-C-1.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://media.geeksforgeeks.org/wp-content/uploads/20200630225034/gfgcode.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://media.geeksforgeeks.org/wp-content/uploads/20210305145144/builtinsnippets.png", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let g = { "id": "thapaserialnog", "name": "Loki", "company": "Marvel", "price": 29900, "colors": ["#CDD0D0", "#000000"], "description": "Loki Laufeyson is a character appearing in American comic books published by Marvel Comics. Created by writer Stan Lee, scripter Larry Lieber, and penciller Jack Kirby, he is based on the Norse mythological deity of the same name. Although a version of Loki first appeared in Venus #6 (August 1949), his characterization as the adoptive brother and nemesis of the superhero Thor, which has persisted to the modern age, was not introduced until Journey into Mystery.", "category": "poster", "shipping": true, "stock": 6, "reviews": 23, "stars": 3.7, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://thecomicbookstore.in/storage/2022/09/TCBS2560.jpeg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://www.redwolf.in/image/cache/catalog/posters/loki-believe-poster-india-600x800.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": " https://static.displate.com/857x1200/displate/2021-09-24/d678ddc9513fd459cbfe2fe5062a39aa_e9883f8da7b1fff42aecb4eac5961d26.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://static.displate.com/857x1200/displate/2021-09-09/20ad3d053587c0e8c7876a47c1822792_78018a805792f4f0956ea6159a8d2f01.jpg", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let h = { "id": "thapaserialnoh", "name": "Iron man", "price": 39900, "company": "Marvel", "colors": ["#000000", "#ff0000"], "description": "Iron Man is a superhero appearing in American comic books published by Marvel Comics. Co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby, the character first appeared in Tales of Suspense #39 in 1963, and received his own title with Iron Man #1 in 1968. Shortly after his creation, Iron Man was a founding member of a superhero team, the Avengers, with Thor, Ant-Man, the Wasp, and the Hulk. Iron Man stories, individually and with the Avengers, have been published consistently since the character's creation.", "category": "poster", "featured": true, "shipping": true, "stock": 6, "reviews": 23, "stars": 4.2, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://m.media-amazon.com/images/I/51iW7TbeloL.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": " https://images.meesho.com/images/products/169091029/aehje_512.webp", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": " https://m.media-amazon.com/images/I/71yEdyNJJ5L._AC_UF1000,1000_QL80_.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://images.meesho.com/images/products/169090624/5jmtp_512.webp", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let i = {
  "id": "thapaserialnoi", "name": "Doctor Strange", "price": 25000, "company": "Marvel", "colors": ["#000000", "#ff0000", "#22D3EF"], "description": "Dr. Stephen Vincent Strange is a character appearing in American comic books published by Marvel Comics. Created by Steve Ditko, the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Strange was introduced during the Silver Age of Comic Books in an attempt to bring a different kind of character and themes of mysticism to Marvel Comics.", "category": "poster", "shipping": true, "stock": 6, "reviews": 23, "stars": 4.6, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://m.media-amazon.com/images/I/61o5Ca6qCWL._SX679_.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": " https://m.media-amazon.com/images/I/71zOzPsEC3L._AC_UF1000,1000_QL80_.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://m.media-amazon.com/images/I/61I4EcHDhBL._AC_UF1000,1000_QL80_.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://thecomicbookstore.in/storage/2022/09/TCBS2551.jpg", "filename": "prod-4.png", "size": 1080, "type": "image/png" }]
};

let j = { "id": "thapaserialnoj", "name": "Homelander", "company": "The Boys", "price": 44900, "colors": ["#ff0000", "#000000"], "description": "The Homelander (John Gillman)[1][2] is one of the main antagonists of the comic book series The Boys and the media franchise of the same name, created by Garth Ennis and Darick Robertson. The character is depicted as an egotistical and sadistic narcissist who serves as the extremely powerful leader of The Seven—a group of corrupt and hedonistic superheroes funded by Vought-American—and the archenemy of Billy Butcher. Beneath his public image as a noble and altruistic hero, the Homelander cares little about the well-being of those he professes to protect.", "category": "poster", "stock": 6, "reviews": 23, "stars": 4.2, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://images-cdn.ubuy.co.in/653095729f207122d32a81e2-379071-the-boys-season-2-amazon-prime.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": " https://images-cdn.ubuy.co.in/63a8fa37524f2f3756515a78-the-boys-homelander-wall-poster.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://i.ebayimg.com/images/g/u4QAAOSwVqxlTj7T/s-l1200.webp", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://sportshub.cbsistatic.com/i/2024/03/05/0cbb7407-b6e2-4a5a-a784-165b48d9c497/the-boys-season-4-poster-homelander-make-america-super-again.jpg?auto=webp&width=1200&height=1500&crop=0.8:1,smart", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let k = { "id": "thapaserialnok", "name": "Attack on Titan", "company": "Hajime Isayama", "price": 50000, "colors": ["#000000", "#CDD0D0"], "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.", "category": "manga", "stock": 6, "reviews": 60, "stars": 4.8, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://wallpapers.com/images/hd/aot-manga-w0t6rqqacrey5lg0.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://pbs.twimg.com/media/E5r22iIWYAQrfLL?format=png&name=4096x4096", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://dthezntil550i.cloudfront.net/9n/latest/9n2010041510373530016947697/1280_960/7816bad3-6eac-4053-9de2-c6082139f2f7.png", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let l = { "id": "thapaserialnol", "name": "Machine Learning And Artificial Intelligence", "price": 180000, "company": "Chris Neil", "colors": ["#22D3EF", "#000000"], "description": "Machine learning is a data-driven approach. Hence it implies the availability of large datasets in order to make accurate decisions. In case only a limited dataset is available to solve a particular problem, it is best to use a deterministic approach. When a limited dataset is available it is hard to train a machine learning model and generalize its applicability to other similar problem. The developed model, in this case, is only applicable for the few data it was trained on.", "category": "book", "stock": 6, "reviews": 60, "stars": 4.4, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://m.media-amazon.com/images/I/81VY09a18cL._SY466_.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": " https://i0.wp.com/steveblank.com/wp-content/uploads/2022/05/AI-Definition.jpg?ssl=1", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": " https://images.datacamp.com/image/upload/v1693994041/image3_6ea5d44077.png", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://m.foolcdn.com/media/dubs/images/what-is-artificial-intelligence-infographic.width-880.png", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      let products = await res.data;
      products = allProd;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url, id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      let singleProduct = await res.data;
      switch (id) {
        case "thapaserialnoa":
          singleProduct = a;
          break;
        case "thapaserialnob":
          singleProduct = b;
          break;
        case "thapaserialnoc":
          singleProduct = c;
          break;
        case "thapaserialnod":
          singleProduct = d;
          break;
        case "thapaserialnoe":
          singleProduct = e;
          break;
        case "thapaserialnof":
          singleProduct = f;
          break;
        case "thapaserialnog":
          singleProduct = g;
          break;
        case "thapaserialnoh":
          singleProduct = h;
          break;
        case "thapaserialnoi":
          singleProduct = i;
          break;
        case "thapaserialnoj":
          singleProduct = j;
          break;
        case "thapaserialnok":
          singleProduct = k;
          break;
        case "thapaserialnol":
          singleProduct = l;
          break;
      }
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
