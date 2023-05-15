import Project from "@/components/Project";

const data = [
  {
    id: 1,
    title: "Netflix Clone",
    imgPath: "/assets/projects/netflix.jpg",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    id: 2,
    title: "Property Website",
    imgPath: "/assets/projects/property.jpg",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue"],
  },
  {
    id: 3,
    title: "Twich Clone",
    imgPath: "/assets/projects/twitch.jpg",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
];

export default function Home() {
  return (
    <main className="mainContainer">
      {data.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </main>
  );
}
