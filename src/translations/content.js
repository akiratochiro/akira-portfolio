// Estrutura por CHAVE: cada campo já contém en/pt juntos.
// Vantagem: se você adicionar um campo novo, é impossível esquecer
// de traduzir um dos idiomas — os dois ficam lado a lado aqui.

export const content = {
  header: {
    title: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    location: {
      en: "São Paulo, Brazil",
      pt: "São Paulo, Brasil",
    },
    status: {
      en: "Open to Opportunities",
      pt: "Aberto a Oportunidades",
    },
    description: {
      en: "Passionate about building modern web applications with React, Node.js, databases, and cloud technologies. Combining a strong engineering mindset with international experience to create scalable and user-focused solutions.",
      pt: "Apaixonado por construir aplicações web modernas com React, Node.js, bancos de dados e tecnologias de nuvem. Combinando uma mentalidade de engenharia sólida com experiência internacional para criar soluções escaláveis e focadas no usuário.",
    },
    projectsbuttom: {
      en: "View Projects",
      pt: "Ver Projetos",
    },
    contactbutton: {
      en: "Contact Me",
      pt: "Contato",
    },
  },

  about: {
    header: {
      en: "About Me",
      pt: "Sobre Mim",
    },
    title: {
      en: "Building solutions through technology",
      pt: "Construindo soluções através da tecnologia",
    },
    text1: {
      en: "I'm Akira, a Full Stack Developer with a passion for building modern, reliable, and user-focused applications. My background includes Computer Science studies and hands-on experience with JavaScript, React, Node.js, Express, SQL databases, REST APIs, Git, and AWS. My goal is to create solutions that are not only functional, but also intuitive, maintainable, and enjoyable to use. I am constantly learning, improving my skills, and challenging myself through personal projects that reflect real-world needs. I'm currently seeking opportunities where I can continue growing as a developer while helping build software that delivers value to users and businesses.",
      pt: "Sou Akira, um Desenvolvedor Full Stack apaixonado por criar aplicações modernas, confiáveis e centradas no usuário. Minha formação inclui estudos em Ciência da Computação e experiência prática com JavaScript, React, Node.js, Express, bancos de dados SQL, APIs REST, Git e AWS. Meu objetivo é desenvolver soluções que não sejam apenas funcionais, mas também intuitivas, fáceis de manter e agradáveis de utilizar. Estou sempre aprendendo, aprimorando minhas habilidades e me desafiando por meio de projetos pessoais que refletem necessidades do mundo real. Atualmente, busco oportunidades nas quais eu possa continuar evoluindo como desenvolvedor enquanto contribuo para a criação de softwares que gerem valor para usuários e empresas.",
    },
    text2: {
      en: "My background combines engineering, software development, and international experience. I enjoy creating modern, scalable applications that solve real-world problems and provide great user experiences.",
      pt: "Minha formação combina engenharia, desenvolvimento de software e experiência internacional. Gosto de criar aplicações modernas e escaláveis que resolvam problemas do mundo real e proporcionem ótimas experiências aos usuários.",
    },
    stackTitle: {
      en: "Tech Stack",
      pt: "Tecnologias",
    },
  },

  projects: {
    title: {
      en: "Projects",
      pt: "Projetos",
    },
    subtitle: {
      en: "A selection of projects showcasing my journey in full-stack development, cloud technologies and modern web applications.",
      pt: "Uma seleção de projetos que mostram minha jornada em desenvolvimento full-stack, tecnologias de nuvem e aplicações web modernas.",
    },
    projectcards: {
      title1: {
        en: "In My Fridge",
        pt: "In My Fridge",
      },
      description1: {
        en: "A full-stack application that helps users discover recipes based on ingredients in their fridge using an external API.",
        pt: "Aplicação fullstack que ajuda usuários a descobrir receitas com base nos ingredientes da geladeira usando uma API externa.",
      },
      title2: {
        en: "ShortYourLink",
        pt: "ShortYourLink",
      },
      description2: {
        en: "A URL shortener application built with Next.js, containerized with Docker and covered by Jest tests.",
        pt: "Aplicação encurtadora de URLs construída com Next.js, containerizada com Docker e coberta por testes com Jest.",
      },
      title3: {
        en: "Travel Planner",
        pt: "Travel Planner",
      },
      description3: {
        en: "A full stack application for planning trips and managing itineraries.",
        pt: "Uma aplicação full stack para planejar viagens e gerenciar itinerários.",
      },
    },
  },

  contact: {
    header: {
      en: "Contact",
      pt: "Contato",
    },
    title: {
      en: "Let's Connect",
      pt: "Vamos Conversar",
    },
    text: {
      en: "Interested in working together, discussing a project, or just saying hello? Feel free to send me a message and I'll get back to you as soon as possible.",
      pt: "Tem interesse em trabalhar comigo, discutir um projeto ou simplesmente trocar uma ideia? Envie uma mensagem e responderei assim que possível.",
    },
    emailLabel: {
      en: "Your Email",
      pt: "Seu Email",
    },
    messageLabel: {
      en: "Message",
      pt: "Mensagem",
    },
    button: {
      en: "Send Message",
      pt: "Enviar Mensagem",
    },
  },
};

// Acesso seguro: se o idioma pedido não existir para aquele campo,
// cai para "en" em vez de quebrar a tela com "undefined".
export function t(field, language) {
  if (!field) return "";
  return field[language] ?? field.en ?? "";
}