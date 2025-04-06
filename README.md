# 🏥 **Consultório Médico – Medical Appointment Scheduling System**

**Consultório Médico** is a full-stack web application designed to facilitate the scheduling of medical appointments. Developed using **Java**, **JavaScript**, **TypeScript**, **Spring Boot**, and **H2 Database**, the system allows patients to book consultations by selecting available doctors, specifying dates and times, and choosing medical specialties.

---

## 🧠 **Project Overview**

The system streamlines the appointment scheduling process by providing functionalities such as:

- **Doctor Management:** Register and manage doctor information, including specialties.
- **Patient Management:** Register and manage patient details.
- **Appointment Scheduling:** Book consultations by selecting a doctor, date, and time.
- **Specialty Filtering:** Filter doctors based on medical specialties.
- **Data Persistence:** Store information using an in-memory H2 database during development.

---

## 🛠️ **Technologies and Architecture**

### 🔹 Back-End: Java and Spring Boot

- **Java:** The core programming language used for back-end development.
- **Spring Boot:** A framework that simplifies the creation of RESTful APIs and web applications.
- **Spring MVC:** Facilitates the implementation of the Model-View-Controller architecture.
- **Spring Data JPA:** Simplifies data access and ORM (Object-Relational Mapping) with Java Persistence API.
- **H2 Database:** An in-memory database used for development and testing purposes.

### 🔹 Front-End: Angular and TypeScript

- **Angular:** A platform for building single-page client applications using HTML and TypeScript.
- **TypeScript:** A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Angular Components:** Modular building blocks for the user interface, promoting reusability and organization.

---

## 📂 **Estrutura do Projeto**

O repositório é organizado em diretórios distintos para componentes de back-end e front-end:

- **Back-End:**
- `BackendApplication.java`: Classe principal para executar o aplicativo Spring Boot.
- `Medico.java`, `Paciente.java`, `Agendamento.java`: Classes de entidade que representam médicos, pacientes e consultas.
- `MedicoController.java`, `PacienteController.java`, `AgendamentoController.java`: Controladores que manipulam solicitações HTTP relacionadas a médicos, pacientes e consultas.
- `MedicoRepository.java`, `PacienteRepository.java`, `AgendamentoRepository.java`: Interfaces de repositório para operações de banco de dados.

- **Front-End:**
- `app.module.ts`: Módulo principal que define o aplicativo Angular.
- `app.component.ts`, `app.component.html`, `app.component.css`: Componente raiz da aplicação.
- `agendamento-consulta.component.ts`, `agendamento-consulta.component.html`, `agendamento-consulta.component.css`: Componente para agendamento de consultas.
- `agendamento.service.ts`: Serviço que trata chamadas de API relacionadas ao agendamento de consultas.

---

## ▶️ **How to Run the Project Locally**

### 1. Clone the Repository

```bash
git clone https://github.com/LucasSerrato/ConsultorioM-dico.git
cd ConsultorioM-dico
```

### 2. Run the Back-End

Navigate to the back-end directory and start the Spring Boot application:

```bash
cd backend
./mvnw spring-boot:run
```

The back-end API will be available at `http://localhost:8080`.

### 3. Run the Front-End

Navigate to the front-end directory, install dependencies, and start the Angular application:

```bash
cd frontend
npm install
ng serve
```

The front-end application will be available at `http://localhost:4200`.

---

## 🤝 **Contributions**

Contributions are welcome! Feel free to fork the project, open issues, or submit pull requests with enhancements and fixes.

---

## 📧 **Contact**

**Lucas Serrato**  
[LinkedIn](https://www.linkedin.com/in/lucasserrato201)  
📩 alfalifeclothes@gmail.com  
☕ [Donate via Pix](https://livepix.gg/lkshow)

---

## 🎓 **Academic Note**

This project exemplifies the integration of **Java**, **Spring Boot**, **Angular**, and **TypeScript** in developing a full-stack web application. It serves as a practical demonstration of building a system with a clear separation of concerns, utilizing modern frameworks and technologies.

---

---

# 🏥 **Consultório Médico – Sistema de Agendamento de Consultas Médicas**

**Consultório Médico** é uma aplicação web full-stack desenvolvida para facilitar o agendamento de consultas médicas. Utilizando **Java**, **JavaScript**, **TypeScript**, **Spring Boot** e **H2 Database**, o sistema permite que pacientes agendem consultas selecionando médicos disponíveis, especificando datas e horários, e escolhendo especialidades médicas.

---

## 🧠 **Visão Geral do Projeto**

O sistema otimiza o processo de agendamento de consultas, oferecendo funcionalidades como:

- **Gerenciamento de Médicos:** Cadastro e administração de informações dos médicos, incluindo especialidades.
- **Gerenciamento de Pacientes:** Cadastro e administração de detalhes dos pacientes.
- **Agendamento de Consultas:** Marcação de consultas selecionando médico, data e horário.
- **Filtragem por Especialidade:** Filtrar médicos com base em suas especialidades médicas.
- **Persistência de Dados:** Armazenamento de informações utilizando o banco de dados em memória H2 durante o desenvolvimento.

---

## 🛠️ **Tecnologias e Arquitetura**

### 🔹 Back-End: Java e Spring Boot

- **Java:** Linguagem de programação principal utilizada no desenvolvimento do back-end.
- **Spring Boot:** Framework que simplifica a criação de APIs RESTful e aplicações web.
- **Spring MVC:** Facilita a implementação da arquitetura Model-View-Controller.
- **Spring Data JPA:** Simplifica o acesso a dados e o mapeamento objeto-relacional com a Java Persistence API.
- **H2 Database:** Banco de dados em memória utilizado para fins de desenvolvimento e testes.

### 🔹 Front-End: Angular e TypeScript

- **Angular:** Plataforma para construção de aplicações cliente de página única utilizando HTML e TypeScript.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade e manutenção do código.
- **Componentes Angular:** Blocos modulares para a interface do usuário, promovendo reutilização e organização.

---

## 📂 **Estrutura do Projeto**

O repositório está organizado em diretórios distintos para os componentes de back-end e front-end:

- **Back-End:**
  - `BackendApplication.java`: Classe principal para executar a aplicação Spring Boot.
  - `Medico.java`, `Paciente.java`, `Agendamento.java`: Classes de entidade representando médicos, pacientes e agendamentos.
  - `MedicoController.java`, `PacienteController.java`, `AgendamentoController.java`: Controladores que lidam com requisições HTTP relacionadas a médicos, pacientes e agendamentos.
  - `MedicoRepository.java`, `PacienteRepository.java`, `AgendamentoRepository.java`: Interfaces de repositório para operações de banco de dados.

- **Front-End:**
  - `app.module.ts`: Módulo principal que define a aplicação Angular.
  - 
