## 🏥 Consultório Médico – Medical Appointment Scheduling System

Consultório Médico is a full-stack web application designed to facilitate the scheduling of medical appointments. Developed using Java, JavaScript, TypeScript, Spring Boot, and H2 Database, the system allows patients to book consultations by selecting available doctors, specifying dates and times, and choosing medical specialties.

## 🧠 Project Overview
-✅Doctor Management
- ✅Patient Management
- ✅Appointment Scheduling
- ✅Specialty Filtering
- ✅Data Persistence with H2

## Technologies and Architecture
🔹Back-End: Java, Spring Boot, Spring MVC, Spring Data JPA, H2 Database

 Java 17+: Core programming language for the back-end logic.

Spring Boot: Simplifies the creation of REST APIs and microservices.

Spring MVC: Implements the Model-View-Controller pattern to separate logic cleanly.

Spring Data JPA: Simplifies database access and object-relational mapping (ORM).

H2 Database: Lightweight, in-memory database for fast testing and development.

## 🔹Front-End: Angular, TypeScript

Angular 15+: Framework for building single-page applications with modular components.

TypeScript: Provides type safety and structure to JavaScript code.

RxJS: Handles asynchronous data streams.

Bootstrap/CSS: For a responsive and clean UI design.


Consultorio-Medico/
│
├── backend/
│   ├── src/main/java/com/consultorio/
│   │   ├── ConsultorioApplication.java          # Entry point of the Spring Boot app
│   │   ├── controller/
│   │   │   ├── MedicoController.java            # Doctor-related endpoints
│   │   │   ├── PacienteController.java          # Patient-related endpoints
│   │   │   └── AgendamentoController.java       # Appointment-related endpoints
│   │   ├── model/
│   │   │   ├── Medico.java                      # Doctor entity
│   │   │   ├── Paciente.java                    # Patient entity
│   │   │   └── Agendamento.java                 # Appointment entity
│   │   └── repository/
│   │       ├── MedicoRepository.java
│   │       ├── PacienteRepository.java
│   │       └── AgendamentoRepository.java
│
└── frontend/
    ├── src/app/
    │   ├── app.module.ts                        # Angular root module
    │   ├── app.component.ts/html/css            # Main app component
    │   ├── agendamento-consulta/
    │   │   ├── agendamento-consulta.component.ts/html/css
    │   │   └── agendamento.service.ts           # Service for API communication


## 🔐 Security & Validation
DTOs: Data Transfer Objects used to decouple data sent to and from the API.

Validation: Backend uses @Valid annotations to ensure input correctness.

CORS Configured: Enables front-end and back-end communication during development.

## 🧪 Testing & Database
H2 Console: Available at http://localhost:8080/h2-console for quick DB inspections.

Sample data: Can be initialized using data.sql or CommandLineRunner.

## 🚀 Future Improvements
✅ Authentication and role-based access (Admin / Doctor / Patient).

✅ Pagination and search for doctor listings.

✅ Switchable production database (e.g., PostgreSQL).

✅ Email/SMS notifications for appointments.



## How to Run the Project Locally
1. Clone the Repository
2. Run Back-End: ./mvnw spring-boot:run
3. Run Front-End: npm install && ng serve

## Implemented Features
- Doctor and Patient registration
- Appointment scheduling with doctor, date, time, and specialty
- Full integration between front-end and back-end

## Possibilities for Expansion
- Authentication and Authorization (JWT/Spring Security)
- Medical history and PDF reports
- Notifications and real database integration

## Contact
Lucas Serrato
LinkedIn: https://www.linkedin.com/in/lucasserrato201
Email: alfalifeclothes@gmail.com
Donate via Pix: https://livepix.gg/lkshow

## Academic Note
This project demonstrates the integration of Java, Spring Boot, Angular, and TypeScript to build a scalable and complete full-stack web application.

---

