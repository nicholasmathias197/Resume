function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="entry">
        <div className="entry-header">
          <div className="entry-title">Manifest Processor</div>
          <div className="entry-date">2025</div>
        </div>
        <p className="entry-description">
          Optimized a scalable Java application using Spring framework and RESTful APIs to
          efficiently route freight to optimal dock doors,
          significantly reducing unloading time and enhancing workflow.
          Designed an algorithm to process manifests and evaluate door assignments using real-time volume,
          proximity, and business rules.
          Built to scale from small facilities (10 doors) to major logistics hubs (500+ doors){' '}
          <a href="https://github.com/hakai197/Manifest_Processor2.0" target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>GitHub</a>
        </p>
      </div>

      <div className="entry">
        <div className="entry-header">
          <div className="entry-title">AssetMind</div>
          <div className="entry-date">2026</div>
        </div>
        <p className="entry-description">
        Assetmind 

AssetMind – AI-Powered Fixed Asset Management

AssetMind helps finance and accounting teams automate the management of fixed assets — from purchase to disposal.

What It Does

Upload an invoice or paste a description, and AssetMind's AI instantly classifies the asset (e.g., Computer Equipment, Furniture, Vehicle) with a GL code, useful life estimate, and confidence score.
The platform then calculates year-by-year depreciation schedules using methods like Straight Line, MACRS, Declining Balance, or Sum of Years — with support for Section 179 and bonus depreciation. An AI recommendation feature suggests the optimal depreciation strategy based on the asset type.
For tax planning, AssetMind provides state-aware recommendations, helping you decide between immediate deductions or spreading expenses over time
When purchasing complex assets like a commercial property or data center, the asset breakout feature splits the cost into components (building, roof, HVAC, etc.) with different useful lives — either manually or with AI suggestions.
All assets are stored with full CRUD operations, pagination, and filtering. Depreciation schedules come with interactive charts showing expense trends and book value decline over time.
Built for accountants, finance teams, and anyone managing business assets — AssetMind turns a manual, error-prone process into an intelligent, automated workflow.{' '}
          <a href="https://github.com/nicholasmathias197/assetmind" target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>GitHub</a>
        </p>
      </div>

      <div className="entry">
        <div className="entry-header">
          <div className="entry-title">BetaPages</div>
          <div className="entry-date">2026</div>
        </div>
        <p className="entry-description">
          Live at{' '}
          <a href="https://betapageshub.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>betapageshub.com</a>{' '}
          — deployed on AWS (EC2 + S3 + CloudFront). A full-stack web application connecting aspiring
          authors with beta readers. Authors upload story passages, control visibility (public/private),
          and receive structured feedback including highlighted quote-level comments from trusted readers.
          Features include passage management with category/genre tagging and NSFW flagging, a beta reader
          approval system, personalized feeds with a follower system, advanced filtering, and a full admin
          panel with content moderation, user management, and audit logs. All users agree to anti-plagiarism
          terms to protect original creative work. Built with React 18 + Vite 5 frontend and Java 21 /
          Spring Boot 3.3.5 backend, MySQL + Flyway migrations, Spring Security + JWT auth, SpringDoc
          OpenAPI (Swagger UI), and Spring Boot Actuator monitoring. Infrastructure managed with Terraform
          (EC2, S3, CloudFront, IAM, CloudWatch, SNS) with CI/CD via AWS CodePipeline → CodeBuild.
          Secrets stored in AWS SSM Parameter Store. Includes 27 integration tests and a Postman collection.{' '}
          <a href="https://github.com/nicholasmathias197/BetaPages" target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>GitHub</a>
        </p>
      </div>

      <div className="entry">
        <div className="entry-header">
          <div className="entry-title">The Void SSG</div>
          <div className="entry-date">2026</div>
        </div>
        <p className="entry-description">
          A full-stack blog engine with a Lovecraftian twist — a CMS where the content fights back.
          Content gradually degrades with eldritch symbols the more you use it. Regex-based detection
          for 7 Lovecraftian entities triggers unique side effects. Different readers see different
          content based on their "sanity threshold." Navigation links get obfuscated or vanish entirely,
          and the build process outputs ANSI-formatted narratives styled as terminal horror fiction.
          Built with Java 21 + Spring Boot 3.2 (virtual threads), React 19 + TypeScript + Vite,
          Three.js WebGL fluid simulation, Spring Shell CLI, and MySQL 8 + Flyway.
          Features configurable entropy modes, viewer-aware navigation, full REST API, interactive CLI,
          and a React UI.{' '}
          <a href="https://lnkd.in/gn-nG5rC" target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>GitHub</a>
        </p>
      </div>

      <div className="entry">
        <div className="entry-header">
          <div className="entry-title">U197 Hobbies</div>
          <div className="entry-date">2026</div>
        </div>
        <p className="entry-description">
          Capstone project from the PeopleShores/Accenture Junior Developer Apprenticeship — a full-stack
          e-commerce platform fully deployed on AWS. Built with React + Vite frontend and Java Spring Boot
          backend. Core features include authentication, product catalog, cart, checkout, orders, reviews,
          and admin flows. Emphasis on quality with unit/integration testing, code coverage, and Sonar analysis.
          Infrastructure fully provisioned and deployed on AWS using Terraform with CI/CD build and deploy
          pipelines.{' '}
          <a href="https://github.com/nicholasmathias197/Hobby_Shop_App" target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>GitHub</a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
