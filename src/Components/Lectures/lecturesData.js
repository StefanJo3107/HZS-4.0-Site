import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiPostman, SiSpring } from "react-icons/si";
import Pavle from "../../Assets/Images/Pavle.jpg";
import VladimirT from "../../Assets/Images/VladimirT.jpg";
import Dzeca from "../../Assets/Images/Dzeca.jpg";
import Mateja from "../../Assets/Images/Mateja.jpeg";

export const lecturesContent = [
  {
    lectureTitle: "Back-end",
    opisRadionice:
      "Na back-end radionici učesnici će saznati šta mogu ostvariti kroz Spring, njegov ekosistem i za šta on nudi rešenje. Programski jezik koji će biti korišćen je Java, a kreiraće se back-end aplikacija koja će se koristiti i na front-end radionici.",
    lecturerName: "Pavle Prica",
    aboutLecturer:
      "Pavle je Cloud inženjer i deo Zühlke tima. Bavi se aplikacijama baziranim na Cloud-u i fokus je na tehnologijama kao što su Java, Kotlin, Spring, Amazon Web Services.",
    lecturerPhoto: Pavle,
    icons: [
      <FaJava size={50} color="#f09218" />,
      <SiSpring size={50} color="#5cb230" />,
      <SiPostman size={50} color="#f76935" />,
    ],
  },
  {
    lectureTitle: "Front-end",
    opisRadionice:
      "Najveći deo ove radionice biće posvećen React tehnologiji. Uz pomoć nje će biti napravljen front-end jednostavne TO-DO aplikacije, koja će u pozadini koristiti Spring aplikaciju razvijenu na back-end radionici.",
    lecturerName: "Vladimir Tomić",
    aboutLecturer:
      "Vladimir je u kompaniji Zühlke od 2016. godine, a trenutno radi na poziciji Advanced Software Engineer. Oblasti interesovanja su mu Spring, React, Flutter, Solution Design, a u slobodno vreme se bavi fotografijom. ",
    lecturerPhoto: VladimirT,
    icons: [
      <FaHtml5 size={50} color="#dd4b25" />,
      <FaCss3Alt size={50} color="#1a6fb4" />,
      <FaJs size={50} color="#efd81d" />,
    ],
  },
  {
    lectureTitle: "Soft skills",
    opisRadionice:
      "Koliko je važno dobro kreirati softversko rešenje, toliko je bitno i znati prezentovati ga. Kroz iskustva drugih koji su kroz ovakva takmičenja prošli više puta, učesnici će saznati kako i o čemu sve treba da razmišljaju da bi predstavili svoje rešenje na pravi način.",
    lecturerName: "Mateja Ivanović",
    aboutLecturer:
      "Mateja je alumni član FONIS-a, apsolvent na Fakultetu organizacionih nauka i najviše se pronalazi u programiranju full stack aplikacija koristeći NodeJS i React.",
    lecturerPhoto: Mateja,
  },
  {
    lectureTitle: "Git",
    opisRadionice:
      "Cilj radionice je da upozna učesnike sa Git-om, najkorišćenijim distribuiranim sistemom za kontrolu verzije. Git uveliko olakšava timski rad na projektu, a popularnost je stekao i zato što je brz, besplatan i što podržava praćenje promena, lokalno i u zajedničkom okruženju.",
    lecturerName: "Jelena Milev",
    aboutLecturer:
      "Jelena je alumni član FONIS-a i već nešto više od godinu dana Junior Software Developer u kompaniji Levi9. Bavi se razvojem veb aplikacija korišćenjem Spring i Angular framework-a.",
    lecturerPhoto: Dzeca,
    icons: [
      <FaGitAlt size={50} color="#e84e31" />,
      <FaGithub size={50} color="#1a1e22" />,
    ],
  },
];
