"use client"

import { useState, useEffect } from "react";

export const CodeEditor = () => {
  const [typedText, setTypedText] = useState("");

  const codeContent = `const contentCreator = {
  name: "Anubhav Chaudhary",
  handle: "@code.clash",
  platform: "Instagram",
  content: ["Tutorials", "Tips", "Projects"],

  createDaily: () => {
    return "Making coding accessible to everyone";
  }
};`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < codeContent.length) {
        setTypedText(codeContent.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Code Editor Window */}
      <div className="cyber-card p-6 hover-lift animate-cyber-pulse">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-neon-cyan/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-cyber-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-cyber-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-cyber-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-sm text-muted-foreground font-orbitron">content-creator.js</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="font-mono text-sm leading-relaxed font-rajdhani">
          <pre className="text-foreground whitespace-pre-wrap">
            <span className="text-neon-blue">const</span>{" "}
            <span className="text-neon-magenta">contentCreator</span>{" "}
            <span className="text-foreground">=</span>{" "}
            <span className="text-foreground">{"{"}</span>
            {"\n"}
            {"  "}<span className="text-neon-cyan">name</span>:{" "}
            <span className="text-neon-purple">"Anubhav Chaudhary"</span>,{"\n"}
            {"  "}<span className="text-neon-cyan">handle</span>:{" "}
            <span className="text-neon-purple">"@code.clash"</span>,{"\n"}
            {"  "}<span className="text-neon-cyan">platform</span>:{" "}
            <span className="text-neon-purple">"Instagram"</span>,{"\n"}
            {"  "}<span className="text-neon-cyan">content</span>:{" "}
            <span className="text-foreground">["</span>
            <span className="text-neon-purple">Tutorials</span>
            <span className="text-foreground">, </span>
            <span className="text-neon-purple">Tips</span>
            <span className="text-foreground">, </span>
            <span className="text-neon-purple">Projects</span>
            <span className="text-foreground">"]</span>,{"\n"}
            {"\n"}
            {"  "}<span className="text-neon-magenta">createDaily</span>:{" "}
            <span className="text-foreground">() =&gt; {"{"}</span>{"\n"}
            {"    "}<span className="text-neon-blue">return</span>{" "}
            <span className="text-neon-purple">"Making coding accessible to everyone"</span>;{"\n"}
            {"  "}<span className="text-foreground">{"}"}</span>{"\n"}
            <span className="text-foreground">{"}"}</span>;
          </pre>
          <div className="mt-4 flex items-center">
            <span className="text-neon-green animate-cyber-pulse">$</span>
            <span className="ml-2 text-muted-foreground">
              <span className="animate-cyber-pulse text-neon-cyan">|</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Instagram Icon */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-neon-magenta to-neon-purple rounded-xl flex items-center justify-center animate-cyber-float hover-glow border border-neon-cyan/50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="animate-cyber-pulse">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
    </div>
  );
};
