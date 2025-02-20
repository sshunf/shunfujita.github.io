import Animation from "./Animation";

function About() {
    return (
        <div>
            <Animation>
                <h1 className="mb-4 text-[#7d6459]">Shun Fujita</h1>
                <p className="mx-auto flex max-w-[700px] text-justify text-lg text-[#57443c]">
                    Hello! My name is Shun Fujita, an undergraduate at Northwestern University,
                    passionate about the intersection of Computer Science and Mathematics. I was
                    born and raised in Japan for my whole life (20 years). My broad interests lie
                    in software development, statistics, machine learning, and systems programming and 
                    I hope to work in field where I can leverage technology to make an impact.
                </p>
            </Animation>
        </div>
        
    )
}

export default About;