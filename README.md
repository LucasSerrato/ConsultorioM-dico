# 🏥 Consultório Médico – Medical Appointment Scheduling System
Consultório Médico is a modern full-stack web application that streamlines the process of scheduling medical appointments. Built with Java, Spring Boot, H2 Database, Angular, and TypeScript, it allows patients to easily book consultations, while doctors and administrators manage availability and records.

🧠 Project Overview
This system is designed to digitize and optimize clinic appointment workflows. It provides:

✅ Doctor Management: Add, edit, and view registered doctors, including their specialties.

✅ Patient Management: Register and manage patients and their medical information.

✅ Appointment Scheduling: Book consultations with available doctors by date and specialty.

✅ Specialty Filtering: Easily find doctors by their medical specialty.

✅ Data Persistence: Utilizes an in-memory H2 database during development, simulating real-world database interactions.

🛠️ Technologies and Architecture
🔹 Back-End: Java & Spring Boot
Java 17+: Core programming language for the back-end logic.

Spring Boot: Simplifies the creation of REST APIs and microservices.

Spring MVC: Implements the Model-View-Controller pattern to separate logic cleanly.

Spring Data JPA: Simplifies database access and object-relational mapping (ORM).

H2 Database: Lightweight, in-memory database for fast testing and development.

🔹 Front-End: Angular & TypeScript
Angular 15+: Framework for building single-page applications with modular components.

TypeScript: Provides type safety and structure to JavaScript code.

RxJS: Handles asynchronous data streams.

Bootstrap/CSS: For a responsive and clean UI design.

📁 Project Structure
bash
Copiar
Editar
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
▶️ How to Run the Project Locally
1. Clone the Repository
bash
Copiar
Editar
git clone https://github.com/LucasSerrato/ConsultorioM-dico.git
cd ConsultorioM-dico
2. Run the Back-End
bash
Copiar
Editar
cd backend
./mvnw spring-boot:run
✅ Access the back-end API at: http://localhost:8080

3. Run the Front-End
bash
Copiar
Editar
cd frontend
npm install
ng serve
✅ Access the front-end at: http://localhost:4200

🔐 Security & Validation
DTOs: Data Transfer Objects used to decouple data sent to and from the API.

Validation: Backend uses @Valid annotations to ensure input correctness.

CORS Configured: Enables front-end and back-end communication during development.

🧪 Testing & Database
H2 Console: Available at http://localhost:8080/h2-console for quick DB inspections.

Sample data: Can be initialized using data.sql or CommandLineRunner.

🚀 Future Improvements
✅ Authentication and role-based access (Admin / Doctor / Patient).

✅ Pagination and search for doctor listings.

✅ Switchable production database (e.g., PostgreSQL).

✅ Email/SMS notifications for appointments.

🤝 Contributions
Contributions are welcome and encouraged! Open an issue, suggest a feature, or submit a PR. All help is appreciated!

📧 Contact
Lucas Serrato
🔗 LinkedIn
📩 alfalifeclothes@gmail.com
☕ Donate via Pix

🎓 Academic Note
This project is a great example of integrating Spring Boot (Java) and Angular (TypeScript) into a complete full-stack web application. It demonstrates core backend concepts like REST API development, DTOs, and in-memory databases, along with frontend modular architecture, services, and HTTP communication—all aligned with modern software engineering practices.
---
