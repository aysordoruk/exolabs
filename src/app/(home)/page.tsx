import { Card, Cards } from 'fumadocs-ui/components/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 py-12">
      {/* Header Section */}
      <h1 className="text-2xl font-bold mb-4">Exo<a className='text-[#d97757]'>Labs</a></h1>
      
      <p className="text-fd-muted-foreground mb-8">
        Dept. of <b><span className="text-[#d97757]">Computer Engg. & IoT</span></b><br />
        <span>Session 2024-27</span>
      </p>

      {/* Cards Section */}
      <div className="w-full max-w-2xl mx-auto px-4">
        <Cards>
          <Card
            title="Semester 3" 
            description="Records only" 
            href="/docs/tres" 
            className="transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#d97757]-500 hover:shadow-xl hover:shadow-orange-500/30 hover:border-[#d97757]"
          />
          <Card 
            title="Semester 4" 
            description="Records & Projects" 
            href="/docs/cuatro"
            className="transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#d97757]-500 hover:shadow-xl hover:shadow-orange-500/30 hover:border-[#d97757]"
          />
        </Cards>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-sm text-fd-muted-foreground">
        &copy; {new Date().getFullYear()} &bull; Developed by <a href="https://github.com/dorukaysor" target="_blank" rel="noopener noreferrer" className="text-[#d97757] hover:text-cyan-500">Doruk</a>
      </footer>
    </div>
  );
}
