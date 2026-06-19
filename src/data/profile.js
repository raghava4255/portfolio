export const profile = {
  name: "Challa Raghava Achibabu",
  title: ".NET Developer & DevOps Engineer",
  email: "raghavaachibabu@gmail.com",
  phone: "+91 95738 94159",
  address: "Hyderabad, Telangana, India",
  github: "https://github.com/raghava4255",
  linkedin: "https://www.linkedin.com/in/challa-raghava-achibabu",
  bio: "Passionate .NET Developer and DevOps Engineer. I specialize in building highly scalable backend APIs using ASP.NET Core and designing containerized deployment pipelines. Dedicated to writing clean, maintainable code and learning modern cloud-native architectures.",
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University / Institute",
      duration: "2020 - 2024",
      description: "Focused on Software Engineering, Database Management Systems, and Web Technologies. Completed capstone project in cloud microservices."
    }
  ],
  skills: {
    backend: [
      { name: "ASP.NET Core Web API", level: 90, description: "RESTful APIs, Minimal APIs, Dependency Injection, Middleware, Auth" },
      { name: "ASP.NET MVC", level: 85, description: "Razor Pages, Controller actions, Routing, State Management" },
      { name: "Entity Framework Core", level: 88, description: "Code-First, Migrations, LINQ queries, Performance tuning" },
      { name: "Microsoft SQL Server", level: 80, description: "Database design, Stored procedures, Joins, Indexing" }
    ],
    devops: [
      { name: "Docker", level: 80, description: "Containerization, Multi-stage builds, Docker Compose, Volume mapping" },
      { name: "Git & GitHub", level: 85, description: "Branching, Pull requests, Git Actions, Repository management" },
      { name: "YAML (CI/CD Pipelines)", level: 75, description: "GitHub Actions workflows, build & test automation, deployment steps" }
    ]
  },
  projects: [
    {
      id: "emp-mgmt-sys",
      title: "Employee Management System",
      description: "A complete CRUD Web API backend for managing employee information, department details, and salary scales. Features repository pattern, clean architecture, and automated SQL database migrations.",
      category: "Web API",
      tech: ["ASP.NET Core Web API", "EF Core", "MS SQL Server", "Docker"],
      github: "https://github.com/raghava4255/EmployeeManagementSystem",
      demo: null
    },
    {
      id: "task-mgmt-app",
      title: "Task Management App",
      description: "A secure task-tracking application utilizing JWT authentication. Restricts task access using role-based authorization (Admin/User), featuring token validation and database audit trails.",
      category: "Full Stack",
      tech: ["ASP.NET Core Web API", "React", "JWT Auth", "EF Core"],
      github: "https://github.com/raghava4255/TaskManagementApp",
      demo: null
    },
    {
      id: "portfolio-backend-api",
      title: "Portfolio Backend API",
      description: "The backend service powering this portfolio site. Handles contact form message submission logging, email dispatch queues, and serves dynamic skills or project data.",
      category: "Web API",
      tech: ["ASP.NET Core Web API", "Docker", "Git Actions"],
      github: "https://github.com/raghava4255/PortfolioBackendAPI",
      demo: null
    },
    {
      id: "dockerized-api-project",
      title: "Dockerized API Project",
      description: "A template project showing how to containerize an ASP.NET Core Web API + SQL Server DB combination. Employs Docker Compose to orchestrate dependencies, environment configs, and health checks.",
      category: "DevOps",
      tech: ["Docker", "Docker Compose", "YAML", "ASP.NET Core"],
      github: "https://github.com/raghava4255/DockerizedApiTemplate",
      demo: null
    }
  ]
};
