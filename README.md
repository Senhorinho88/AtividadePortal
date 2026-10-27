# Portal do Sindicato — SINDADOS-BA

Projeto acadêmico em React.js baseado na atividade “Portal do Sindicato (Módulo Reduzido)”, do curso de Engenharia de Software da UCSAL. Conteúdo demonstrativo, sem vínculo oficial com o sindicato.

## Executar

Requer Node.js 22.12 ou superior.

```bash
npm ci
npm run dev
```

Abra a URL informada pelo Vite (normalmente http://localhost:5173).

## GitHub Codespaces

1. Envie os arquivos desta pasta, incluindo `.devcontainer`, para um repositório no GitHub.
2. No repositório, selecione **Code → Codespaces → Create codespace on main**.
3. Aguarde o contêiner instalar as dependências via `npm ci`.
4. No terminal do Codespace, execute `npm run dev`.
5. Abra a porta **5173** na aba **Ports**.

A configuração está preparada para Codespaces. O desenvolvimento e a validação desta versão ocorreram no ambiente local da sessão; não foi criado um Codespace.

## Estrutura e requisitos

- `src/App.jsx`: orquestra as seções e controla a categoria que filtra documentos.
- `src/components/Accordion.jsx`: recebe `items` com `id`, `title` e `content` por props; usa `useState` para abrir somente uma resposta por vez ou fechar a atual.
- `src/components/Tabs.jsx`: recebe `tabs` por props e controla a aba ativa com `useState`. Inclui Saúde e Farmácia, Educação e Cursos, Lazer e Férias.
- `src/components/DropdownMenu.jsx`: recebe opções, valor e callback por props. Usa estado local para abrir/fechar e `useEffect`/`useRef` para fechar ao clicar fora. Fecha ao selecionar, perder foco para fora e pressionar Escape.
- `src/data.js`: concentra perguntas, benefícios e documentos de exemplo. Edite aqui para personalizar o conteúdo.
- `src/styles.css`: CSS puro, com ajustes para celulares e desktops.

Os componentes incluem atributos ARIA, foco visível, navegação por teclado e link para pular ao conteúdo. Abas aceitam setas esquerda/direita, Home e End. O menu aceita setas cima/baixo, Home, End e Escape.

Os downloads são arquivos TXT demonstrativos gerados no navegador. Não representam documentos oficiais, editais reais ou condições de convênios vigentes. Não há backend nem coleta de dados. As fontes do Google são opcionais; o CSS tem fontes alternativas locais.

## Validação e produção

```bash
npm test
npm run build
npm run preview
```

Os testes verificam a exclusividade do acordeão, a troca das abas, o filtro dos documentos, o fechamento do menu e a navegação por teclado. `npm run build` gera o site estático em `dist/`.

### Resultado da validação nesta sessão

- `npm test`: 4 testes aprovados.
- `npm run build`: compilação de produção concluída.
- Aparência em navegador e execução real no GitHub Codespaces: não verificadas neste ambiente.
- Publicação online não realizada: os scripts locais exigidos pelo fluxo do Sites não estão disponíveis neste ambiente.
