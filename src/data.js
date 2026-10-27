export const faqItems = [
  { id: 'direitos', title: 'Onde posso consultar meus direitos trabalhistas?', content: 'Consulte a CLT e a convenção coletiva aplicável à sua categoria. A convenção pode estabelecer condições específicas de jornada, reajuste salarial e benefícios. Para avaliar uma situação individual, procure orientação do sindicato ou de um profissional habilitado.' },
  { id: 'convencao', title: 'O que é uma convenção coletiva de trabalho?', content: 'É um acordo firmado entre o sindicato dos trabalhadores e o sindicato patronal, que estabelece condições de trabalho para as categorias representadas. A vigência, a base territorial e as categorias abrangidas devem ser verificadas no documento.' },
  { id: 'homologacao', title: 'Como funciona a homologação da rescisão?', content: 'A homologação é a conferência dos documentos e valores relacionados ao encerramento do contrato. A necessidade de assistência sindical depende das regras aplicáveis, inclusive da convenção coletiva. Consulte o sindicato sobre agendamento e documentos necessários.' },
  { id: 'juridico', title: 'Como buscar orientação jurídica trabalhista?', content: 'Reúna contrato de trabalho, contracheques, registros de jornada e documentos ligados à sua dúvida. Consulte os canais oficiais do sindicato para confirmar a existência do serviço, os critérios de atendimento e a forma de agendamento.' },
  { id: 'filiacao', title: 'Quem pode se filiar ao sindicato?', content: 'A filiação depende da categoria profissional e da base territorial representadas pelo sindicato. Consulte o estatuto e os canais oficiais para confirmar os requisitos, os documentos e as condições de contribuição.' },
];
export const benefitTabs = [
  { id: 'saude', title: 'Saúde e farmácia', icon: 'heart', heading: 'Mais cuidado com você e sua família.', description: 'Conheça exemplos de parcerias que podem facilitar o acesso à saúde e ao bem-estar.', benefits: [
    { title: 'Consultas e exames', description: 'Rede de clínicas parceiras com condições especiais para os filiados.', highlight: 'Atendimento para toda a família' },
    { title: 'Farmácias parceiras', description: 'Condições diferenciadas em medicamentos e produtos de cuidado pessoal.', highlight: 'Economia no dia a dia' },
  ] },
  { id: 'educacao', title: 'Educação e cursos', icon: 'book', heading: 'Conhecimento que abre novos caminhos.', description: 'Exemplos de oportunidades para aprender, desenvolver habilidades e continuar sua formação.', benefits: [
    { title: 'Formação profissional', description: 'Cursos de tecnologia e desenvolvimento de carreira em instituições parceiras.', highlight: 'Aprendizado contínuo' },
    { title: 'Cursos de idiomas', description: 'Condições especiais em cursos de línguas para diferentes níveis de aprendizagem.', highlight: 'Novas possibilidades' },
  ] },
  { id: 'lazer', title: 'Lazer e férias', icon: 'sun', heading: 'Seu descanso também é importante.', description: 'Exemplos de benefícios para aproveitar o tempo livre com quem faz parte da sua vida.', benefits: [
    { title: 'Colônia de férias', description: 'Possibilidade de hospedagem em espaços conveniados, conforme disponibilidade.', highlight: 'Momentos em família' },
    { title: 'Cultura e lazer', description: 'Parcerias com espaços culturais e de recreação para os filiados.', highlight: 'Mais experiências' },
  ] },
];
export const documentCategories = [{ value: 'todos', label: 'Todos os documentos' }, { value: 'convencoes', label: 'Convenções coletivas' }, { value: 'editais', label: 'Editais de assembleia' }, { value: 'boletins', label: 'Boletins informativos' }];
export const documents = [
  { id: 'cct-2026', category: 'convencoes', type: 'Convenção coletiva', title: 'Convenção Coletiva 2026', description: 'Modelo ilustrativo de organização das condições de trabalho.', content: 'Uma convenção oficial deve identificar as partes, a categoria, a base territorial, a vigência e as cláusulas negociadas. Este exemplo não contém condições de trabalho reais.' },
  { id: 'assembleia', category: 'editais', type: 'Edital de assembleia', title: 'Assembleia da categoria', description: 'Exemplo de edital com pauta e orientações de participação.', content: 'Pauta ilustrativa: discussão de propostas para negociação coletiva. Data, horário e local: não definidos. Este exemplo não convoca uma assembleia real.' },
  { id: 'boletim', category: 'boletins', type: 'Boletim informativo', title: 'Informativo do filiado', description: 'Modelo de boletim com informações e serviços sindicais.', content: 'O portal reúne dúvidas trabalhistas, exemplos de benefícios e modelos de documentos. Consulte os canais oficiais para informações atualizadas.' },
];
