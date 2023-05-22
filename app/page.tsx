import Project from "@/components/Project";

const data = [
  {
    id: 1,
    title: "Application for Image generation",
    imgPath: "/assets/projects/salvador.jpg",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    id: 2,
    title: "VANLIFE",
    imgPath: "/assets/projects/vanlife.png",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue"],
  },
  {
    id: 3,
    title: "Pokedex",
    imgPath: "/assets/projects/pokemon.png",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript"],
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
