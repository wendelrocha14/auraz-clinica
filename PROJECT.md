# PROJECT.md — AURAZ Clínica | Landing Page

> Documento mestre do projeto. Toda decisão de código, design e conteúdo deve seguir este documento.
> Qualquer mudança de decisão aqui registrada precisa ser justificada e atualizada neste arquivo antes de ser aplicada ao código.

---

## 1. Objetivos do Projeto

### Objetivo de negócio
Converter tráfego vindo majoritariamente do Instagram (90%+) em agendamentos via WhatsApp, institucional ou individual por profissional.

### Objetivo de experiência
Transmitir, em segundos, a percepção de "clínica de alto padrão" — sofisticação, leveza, acolhimento — antes mesmo da visitante ler qualquer texto.

### Objetivo técnico
Entregar uma landing page performática, acessível, responsiva mobile-first, com código limpo e componentizado, fácil de manter e expandir.

### Não-objetivos (fora de escopo nesta versão)
- Sem agenda online / sistema de agendamento integrado — conversão é 100% via WhatsApp.
- Sem multilíngue.
- Sem CMS — conteúdo será hardcoded em arquivos de dados (`.ts`/`.json`) para facilitar edição futura sem mexer em componentes.
- Sem depoimentos reais nesta versão (dados fictícios sinalizados — ver seção 9).

---

## 2. Tecnologias

| Tecnologia | Função | Justificativa |
|---|---|---|
| **React + Vite** | Base do projeto | Build rápido, DX moderna, adequado para SPA leve como esta landing |
| **TailwindCSS** | Estilização | Consistência via design tokens, evita CSS solto, acelera responsividade mobile-first |
| **Framer Motion** | Animações | Scroll reveal, fade, transições suaves pedidas no briefing — API declarativa, boa performance |
| **Lucide Icons** | Ícones | Leve, moderno, combina com estética minimalista pedida |
| **React Hook Form** | *(reservado, não usado nesta versão)* | Não há formulário nesta fase (conversão é só WhatsApp). Documentado aqui para não ser esquecido caso o escopo mude depois. |

**Decisão:** nenhuma biblioteca de UI pronta (ex: shadcn, MUI) será usada nos componentes visuais principais. Justificativa: o briefing exige explicitamente "evitar aparência de template pronto" — bibliotecas de componentes genéricos tendem a vazar sua identidade visual própria. Tailwind puro + componentes autorais garantem controle total da identidade AURAZ.

---

## 3. Arquitetura da Informação (ordem das seções)

1. Hero
2. Sobre a Clínica
3. Nossa Equipe
4. Serviços
5. Benefícios
6. Como Funciona
7. Depoimentos
8. Instagram
9. Localização
10. CTA Final
11. Rodapé

**Justificativa da ordem:** segue a jornada emocional→racional definida na Fase 1 — abre com impacto visual e promessa (Hero), constrói confiança institucional (Sobre), individualiza o cuidado (Equipe), detalha a oferta (Serviços/Benefícios), reduz ansiedade sobre o processo (Como Funciona), reforça com prova social (Depoimentos/Instagram) e remove a última barreira prática (Localização) antes do fechamento (CTA Final).

---

## 4. Fluxo da Usuária (User Flow)

```
Instagram (bio/story/anúncio)
        ↓
   Hero (impacto + 2 CTAs: "Agendar agora" / "Conhecer profissionais")
        ↓
   ┌────┴────┐
   ↓         ↓
CTA direto   Explora a página
(WhatsApp    (Sobre → Equipe → Serviços → ...)
institucional)   ↓
              Decide por uma profissional
                 ↓
              WhatsApp individual (mensagem pré-preenchida
              contextual: nome + especialidade da profissional)
                 ↓
              [Fora do escopo da LP] Atendimento humano no WhatsApp
```

**Regra de arquitetura de conversão:** existem sempre dois caminhos de conversão válidos e com peso visual equivalente — **institucional** (Hero, CTA Final) e **individual** (cards de Equipe). Nenhum dos dois é tratado como secundário. Ambos usam o mesmo componente de botão (ver seção 6), variando apenas o número de destino e a mensagem pré-preenchida.

---

## 5. Design System

### 5.1 Paleta de cores

| Token | Uso | Hex (base sugerida) |
|---|---|---|
| `--color-bg-primary` | Fundo principal (off-white) | `#FAF8F5` |
| `--color-bg-secondary` | Fundo alternado de seções (bege claro) | `#F0EBE3` |
| `--color-surface` | Cards, superfícies elevadas | `#FFFFFF` |
| `--color-primary` | Verde oliva suave — cor de marca | `#8A9A7E` |
| `--color-primary-dark` | Hover/estado ativo do verde oliva | `#6F7D65` |
| `--color-accent` | Dourado discreto — detalhes, ícones, bordas sutis | `#C9A868` |
| `--color-text-primary` | Texto principal (grafite, não preto puro) | `#3A3A38` |
| `--color-text-secondary` | Texto secundário/legendas | `#6B6B67` |
| `--color-whatsapp` | Botões de WhatsApp (verde reconhecível, mas dessaturado para não brigar com a paleta) | `#4A7A5C` |

**Justificativa:** preto puro (`#000`) e branco puro (`#FFF`) são evitados no texto/fundo — quebram a sensação de leveza/sofisticação pedida. Grafite e off-white suavizam o contraste mantendo acessibilidade (validar contraste mínimo AA na Fase 4).

**Regra:** o dourado (`--color-accent`) é usado com moderação — bordas finas, ícones, detalhes tipográficos. Nunca como cor de fundo extensa ou botão principal. Justificativa: dourado em excesso lê como "luxo genérico/exagerado", contrário à leveza pedida no briefing.

### 5.2 Tipografia

| Papel | Estilo | Justificativa |
|---|---|---|
| Títulos (H1, H2) | Serif refinada (ex: Playfair Display ou similar) | Transmite sofisticação/feminilidade elegante sem cair em clichê |
| Corpo de texto / UI | Sans-serif humanista (ex: Inter ou Manrope) | Legibilidade em mobile, neutralidade que não compete com a serif dos títulos |
| Destaques/citações | Serif itálica, uso pontual | Reforça tom acolhedor em depoimentos e frases de impacto |

**Regra de hierarquia:** máximo de 2 famílias tipográficas na página inteira (serif para títulos, sans para o resto). Mais que isso quebra a percepção de "clean/minimalista".

### 5.3 Espaçamento e Grid

- Escala de espaçamento baseada em múltiplos de 4px (padrão Tailwind), com respiro generoso entre seções (mínimo `py-20` em desktop, `py-12` em mobile) — briefing pede explicitamente "muito espaço em branco".
- Grid mobile-first: 1 coluna até `md`, 2 colunas em `md`, 3 colunas em `lg` para cards (Equipe, Serviços, Depoimentos).
- Largura máxima de conteúdo: `max-w-7xl`, centralizado, com padding lateral responsivo.

### 5.4 Componentes base (design tokens de comportamento)

| Componente | Regra |
|---|---|
| **Botão primário** (institucional) | Fundo verde oliva, texto off-white, cantos suavemente arredondados, hover com leve escurecimento + micro-elevação (scale 1.02) |
| **Botão WhatsApp** (individual) | Mesmo padrão visual de botão primário, ícone Lucide de WhatsApp, cor `--color-whatsapp` — visualmente reconhecível como ação de contato, mas dentro da paleta da marca |
| **Card** | Fundo `--color-surface`, sombra suave (nunca dura/genérica), cantos arredondados consistentes (`rounded-2xl`), padding interno generoso |
| **Placeholder de imagem** | `aspect-ratio` fixo por contexto (retrato 4:5 para profissionais, paisagem 16:9 para ambiente), fundo `--color-bg-secondary` com ícone sutil enquanto a imagem real não é adicionada — nunca "imagem quebrada" |
| **Animações** | Fade + slight translateY no scroll reveal (Framer Motion `whileInView`), duração 400–600ms, `ease-out`. Nada com bounce ou exagero — briefing pede "nada exagerado" |

---

## 6. Componentização (mapa de componentes)

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/                      # componentes base reutilizáveis
│   │   ├── Button.tsx           # variantes: primary | whatsapp | ghost
│   │   ├── Card.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ImagePlaceholder.tsx
│   │   └── Badge.tsx            # usado no badge "exemplo" dos depoimentos fictícios
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Team.tsx
│       │   └── TeamCard.tsx
│       ├── Services.tsx
│       │   └── ServiceCard.tsx
│       ├── Benefits.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       │   └── TestimonialCard.tsx
│       ├── InstagramPreview.tsx
│       ├── Location.tsx
│       └── FinalCTA.tsx
├── data/                        # conteúdo separado de componente
│   ├── team.ts
│   ├── services.ts
│   ├── testimonials.ts          # inclui flag isPlaceholder: true
│   └── siteConfig.ts            # WhatsApp institucional, endereço, links sociais
├── lib/
│   └── whatsapp.ts              # função utilitária para montar link + mensagem pré-preenchida
├── styles/
│   └── tokens.css               # CSS variables da seção 5.1
└── App.tsx
```

**Justificativa da separação `data/` de `components/`:** como o conteúdo (profissionais, serviços, depoimentos) tende a mudar com frequência e não é fixo como estrutura de UI, isolar em arquivos de dados evita que alguém precise editar JSX para trocar um texto ou telefone — reduz risco de erro e facilita manutenção futura, inclusive por alguém sem conhecimento profundo de React.

---

## 7. Regras Gerais para Todos os Componentes

1. **Mobile-first sempre.** Todo componente é construído pensando primeiro na experiência de celular (90%+ do tráfego), depois adaptado para desktop — nunca o inverso.
2. **Nenhum texto hardcoded direto em componente de seção.** Todo conteúdo variável vem de `src/data/*`.
3. **Todo botão de ação usa o componente `Button` único**, nunca `<a>` ou `<button>` estilizado manualmente — garante consistência visual e de comportamento (analytics futuro plugado num só lugar).
4. **Toda imagem passa pelo componente `ImagePlaceholder`**, que decide internamente se renderiza a imagem real ou o placeholder — nenhum componente de seção lida com essa lógica diretamente.
5. **Acessibilidade obrigatória por componente:** contraste mínimo AA, `alt` descritivo em toda imagem, área de toque mínima de 44x44px em botões, navegação por teclado funcional, `aria-label` em ícones sem texto visível.
6. **Sem inline styles.** Apenas classes Tailwind ou CSS variables definidas em `tokens.css`.
7. **Animações via Framer Motion apenas em `sections/`**, nunca em componentes `ui/` base — mantém os componentes base neutros e reutilizáveis.
8. **Nomenclatura:** componentes em `PascalCase`, arquivos de dados e utilitários em `camelCase`, sempre em inglês no código (nomes de variáveis/funções), conteúdo visível sempre em português (pt-BR).

---

## 8. Convenções de Código

- **TypeScript obrigatório** em todos os arquivos (`.tsx`/`.ts`) — reduz erros em tempo de desenvolvimento, especialmente importante com múltiplos arquivos de dados estruturados (equipe, serviços).
- **Props tipadas via `interface`**, uma por componente, nomeada `[NomeDoComponente]Props`.
- **Sem lógica de negócio dentro de JSX complexo** — extrair para funções nomeadas acima do `return`.
- **Um componente por arquivo.** Subcomponentes usados em um único lugar (ex: `TeamCard`) ficam no mesmo diretório da seção que os usa.
- **Importações absolutas** via alias `@/` (configurado no Vite), evitando `../../../` longos.

---

## 9. Pontos de Atenção Registrados (não esquecer)

- ⚠️ **Depoimentos fictícios:** a seção `Testimonials` nasce com dados de exemplo, cada um com `isPlaceholder: true` em `data/testimonials.ts`, exibindo um badge visual discreto "Exemplo" no card. **Isso precisa ser substituído por depoimentos reais antes do deploy em produção.** Registrado aqui para não ser esquecido na Fase 4 (auditoria).
- ⚠️ **Imagens pendentes:** onde a foto real ainda não existir, `ImagePlaceholder` assume automaticamente — nenhuma seção deve quebrar visualmente por falta de imagem.
- ⚠️ **Peso visual igual entre as 7 profissionais:** ao popular `data/team.ts`, manter descrições de tamanho semelhante (recomendo limite de ~120 caracteres) para não quebrar o alinhamento do grid.

---

## 10. Regra de Governança do Projeto

> Durante todo o desenvolvimento, este documento é a fonte da verdade. Qualquer decisão de código, cor, componente ou copy deve ser consistente com o que está aqui registrado. Se uma decisão precisar mudar, ela é discutida e **este arquivo é atualizado antes** de qualquer código ser alterado.

---

**Status:** ✅ Pronto para validação do cliente.
**Próximo passo (Fase 3):** desenvolvimento por módulos, começando pelo **Hero**, mediante sua aprovação deste documento.
