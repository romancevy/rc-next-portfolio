import Project from "@/components/Project";

const data = [
  {
    id: "001",
    title: "Application for Image generation",
    description:
      "A Single-Page-Application for Image generation with OpenAI-API",
    imgPath: "/assets/projects/dalle.jpg",
    meta: [
      "React",
      "Tailwind",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Cloudinary",
    ],
    site: "https://s-dalle.up.railway.app",
    code: "https://github.com/romancevy/salvador-dalle-project",
    wip: false,
  },
  {
    id: "002",
    title: "Vanlife",
    description:
      "Frontend for a van rental portal as an exercise for the React Router v6.4",
    imgPath: "/assets/projects/van.jpg",
    meta: ["React", "React Router", "Express", "Mongoose", "MongoDB"],
    site: "https://vanlife.up.railway.app",
    code: "https://github.com/romancevy/vanlife-project",
    wip: false,
  },
  {
    id: "003",
    title: "Pokedex",
    description:
      "An application to display Pokemon statistics using the Poke API",
    imgPath: "/assets/projects/pokedex.jpg",
    meta: ["React", "CSS", "Poke API"],
    site: "https://pokedex-supercode.netlify.app",
    code: "https://github.com/romancevy/project-pokemonAPI",
    wip: false,
  },
];

export default function Home() {
  return (
    <main className="main-container">
      {data.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </main>
  );
}
