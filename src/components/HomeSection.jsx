import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Java Developer";

  useEffect(() => {
    let index = 0;
    let timer;

    const type = () => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
        timer = setTimeout(type, 100);
      }
    };

    type();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Name Header */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Satyam
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Choudhary
            </span>
          </h1>

          {/* Typewriter Subheader */}
          <div className="mt-2">
            <h2 className="text-xl md:text-2xl font-medium text-primary inline-block min-h-[2rem] opacity-0 animate-fade-in-delay-3">
              {text}
              <span className="border-r-2 border-primary ml-1 animate-pulse"></span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I develop full stack web applications using Java and modern
            frameworks, creating robust backends and elegant, responsive
            interfaces.
          </p>

          {/* Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
