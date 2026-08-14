import { Hero } from "@/components/sections/Hero/Hero";
import { Team } from "@/components/sections/Team/Team";
import { Services } from "@/components/sections/Services/Services";

/**
 * Fase 3, módulo 3/11: Especialidades adicionada. As demais seções serão
 * incluídas aqui, uma a uma, seguindo a ordem definida no PROJECT.md, seção 3.
 */
function App() {
  return (
    <main>
      <Hero />
      <Team />
      <Services />
    </main>
  );
}

export default App;
