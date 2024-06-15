import type { ReactNode } from "react";

import { Box, Stack, Typography } from "@mui/joy";

type HomeProps = Readonly<{
  children: ReactNode;
}>;

export default function HomePage({}: HomeProps) {
  return (
    <Stack py={6} gap={4}>
      <Box>
        <Typography level="h2">Gabriel Diniz</Typography>
        <Typography level="h4">Desenvolvedor Fullstack Senior</Typography>
      </Box>

      <Box flexGrow={1}>
        <Typography>
          Estudante das mais recentes tecnologias do mercado, dedicado,
          organizado e bem comunicativo, trabalhando em equipe, sempre !
          Comumente expressando suas ideias e melhorias, sejam em questões de
          arquitetura (como por exemplo, esboçando diagramas e sugerindo
          tecnologias que se enquadrem com o esquema proposto) ou até mesmo
          implementações de sistema, para as mais variadas tarefas que apareçam
          pelo caminho. E sempre aprendendo as Stacks mais usadas no mercado,
          como Golang, Python, React, Node, arquitetura de micro serviços,
          aplicações em nuvem, aplicações real-time, design patterns, deploys
          automatizados, TDD, e muito mais !
        </Typography>
      </Box>

      <Box flexGrow={1}>
        <Typography>
          Desenvolvedor Full-Stack Web com ênfase em Back-End, dedicado com as
          atuais tecnologias do mercado, como Angular, Next.js e Nest.js
          implementando JWT, utilizando GraphQL (server e client) e padrões
          REST, conceito de micro serviços, bancos relacionais e não relacionais
          (MySQL, MariaDB, MongoDB, Redis, DynamoDB). Sólido conhecimento de
          serviços em nuvem e Serverless Framework, utilizando AWS (Amazon S3,
          SNS, SQS, DynamoDB, Lambda Functions, API Gateway, entre outros).
          Ambas as aplicações escritas em TypeScript e JavaScript com testes
          automatizados, unitários, ponta-a-ponta (e2e) e de integração, com
          Jest, Playwright e Supertest. Aplicando conceitos de Closure, Design
          Patterns (como SOLID, Factory, KISS, Clean Code, entre outros), GIT,
          CI/CD, Scrum + Kanban, POO, entre outros.
        </Typography>
      </Box>
    </Stack>
  );
}
