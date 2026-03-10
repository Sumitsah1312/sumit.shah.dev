export const PROFILE = {
    name: "Sumit Shah",
    role: "Software Developer (.NET Backend Focused)",
    location: "Delhi, India",
    summary: "A backend-focused .NET developer experienced in building scalable business applications, REST APIs, authentication systems and database-driven enterprise modules. Strong understanding of real-world workflows like HR systems, hospital management, survey engines and customer platforms. Comfortable owning complete features from database schema to API to UI integration.",
    tagline: "Backend-Driven Software Developer building real world systems, not just CRUD apps.",
    email: "sks13122003@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumit-shah-b8a193209/",
    github: "https://github.com/Sumitsah1312?tab=repositories",
};

export const SKILLS = {
    Backend: [
        "ASP.NET Core MVC",
        "ASP.NET Core Web API",
        "C#",
        ".NET Core",
        "Entity Framework Core",
        "LINQ",
        "Identity & Role Management",
        "JWT Authentication",
        "OTP Authentication Systems",
        "Repository & Service Patterns"
    ],
    Database: [
        "PostgreSQL (Npgsql)",
        "Relational Database Design",
        "Query Optimization"
    ],
    Frontend: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "jQuery",
        "React",
        "AJAX",
        "Dynamic Form Handling & Validations"
    ],
    "Integrations & Features": [
        "Email Sending (SMTP)",
        "Barcode Generation (ZXing/iTextSharp)",
        "PDF Generation",
        "File Upload Handling",
        "External API Integration"
    ],
    Tools: [
        "Git & GitHub",
        "Postman",
        "Visual Studio"
    ]
};
export const PROJECTS = [
    {
        id: 1,
        title: "Hospital Management System",
        image: "/images/projects/project_hospital_api.png",
        description:
            "Designed and implemented secure REST APIs using .NET for patient authentication, OTP verification, and medical record management. Implemented role-based access control where Super Admin manages hospitals, departments, doctors, and patients with patient-to-doctor assignment functionality.",
        features: [
            "JWT authentication",
            "Role-based access control",
            "Patient–Doctor assignment",
            "Modular API architecture",
            "Validation and error handling"
        ],
        tech: ["ASP.NET Web API", "JWT", "C#", "PostgreSQL"],
        github: "https://github.com/Sumitsah1312/HMS",
        live: "https://managehos.netlify.app/"
    },

    {
        id: 2,
        title: "HRMS",
        image: "/images/projects/project_hr_clearance.png",
        description:
            "Developed backend APIs and dashboard features for HRMS including employee dashboard data, forget punch-in module, and authentication-based workflows.",
        features: [
            "Employee dashboard data APIs",
            "Forget punch-in request module",
            "Role-based authentication",
            "Secure API endpoints"
        ],
        tech: ["ASP.NET Web API", "JWT", "PostgreSQL"],
        github: "",
        live: "https://www.setika.one/"
    },

    {
        id: 3,
        title: "Feedback System (Admin Portal)",
        image: "/images/projects/project_survey_system.png",
        description:
            "Built an admin portal for creating dynamic feedback forms where administrators can add questions of different types and track response submissions.",
        features: [
            "Dynamic question builder",
            "Multiple question types",
            "Response tracking dashboard",
            "Admin form management"
        ],
        tech: ["ASP.NET MVC", "JavaScript", "jQuery", "PostgreSQL"],
        github: "",
        live: "https://fbsys.zamitqai.com/Feedback/#/home?ctid=y78RtER%2FGSI%3D"
    },
    {
        id: 5,
        title: "Microloan Application",
        image: "/images/projects/project_microloan.png",
        description:
            "Worked on the user module of a microloan platform where users can apply for loans, manage loan details, and access a personalized dashboard.",
        features: [
            "Loan application workflow",
            "User dashboard",
            "Loan details management",
            "API-driven architecture"
        ],
        tech: ["ASP.NET MVC", ".NET Web API", "JavaScript", "PostgreSQL"],
        github: "",
        live: "https://dally.in/microloanweb/"
    },

    {
        id: 6,
        title: "Business Website for Local Client (Gym)",
        image: "/images/projects/project_gym.png",
        description:
            "Designed and developed a responsive business website for a local gym to showcase services and improve digital presence.",
        features: [
            "Responsive design",
            "Service showcase",
            "Contact form integration"
        ],
        tech: ["React", "CSS3", "JavaScript"],
        github: "https://github.com/Sumitsah1312/GymApplication",
        live: "https://wellgym.netlify.app/"
    },

    {
        id: 7,
        title: "Business Website for Local Client (Salon)",
        image: "/images/projects/project_salon_website.png",
        description:
            "Built a responsive salon website to highlight services, pricing, and contact information for a local business.",
        features: [
            "Responsive design",
            "Service showcase",
            "Contact form"
        ],
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/Sumitsah1312/Salon",
        live: "https://unisexloonix.netlify.app/"
    }
];

export const EXPERIENCE = [
    {
        id: 1,
        role: "Software Developer",
        company: "Mash Virtual",
        period: "2024 - Present",
        description: "Developing scalable backend systems using ASP.NET Core and C#, designing secure REST APIs, optimizing database queries, and supporting enterprise-level application architecture."
    }
];

export const PHILOSOPHY = [
    {
        title: "Maintainability",
        description: "Writing clean, self-documenting code that is easy for teams to understand and extend."
    },
    {
        title: "Structured Architecture",
        description: "Following Repository and Service patterns to separate concerns and improve testability."
    },
    {
        title: "Validation & Error Handling",
        description: " robust input validation and global error handling to ensure system stability."
    },
    {
        title: "Security Practices",
        description: "Implementing secure authentication (JWT/Identity) and data protection measures."
    }
];

export const EDUCATION = [
    {
        id: 1,
        degree: "Bachelor of Technology (B-tech)",
        institution: "Delhi Technological University",
        board: "DTU , Delhi",
        period: "2020 – 2024",
        description: "Graduated in Electronics and Communication Engineering (ECE) and supplemented my studies with optional coursework in core Computer Science subjects such as Data Structures, Algorithms, DBMS, Software Engineering, and Web Technologies, developing strong programming and application development fundamentals.",
        image: "/images/edu/dtu.png",
        grade: "8.3 CGPA"
    },
    {
        id: 2,
        degree: "Senior Secondary (12th)",
        institution: "R.S.V Roop Bagar No.4",
        board: "CBSE",
        period: "2020",
        description: "Completed senior secondary education with a focus on Computer Science, Mathematics, and Science.",
        image: "/images/edu/12th.png",
        grade: "93%"
    }
    ,
    {
        id: 3,
        degree: "Class Xth",
        institution: "B.R Tyagi Pub. School",
        board: "CBSE",
        period: "2018",
        description: "Completed education with a focus on General Subjects.",
        image: "/images/edu/10th.png",
        grade: "90%"
    }
];
