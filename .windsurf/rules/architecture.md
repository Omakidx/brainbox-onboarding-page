---
trigger: always
---

# System Architecture Constitution

## Core Philosophies
- **Separation of Concerns:** Business logic must never be coupled to the transport layer (API/Web) or persistence layer (Database).
- **Immutability:** Data should be treated as immutable once it enters the system core. State changes must be explicit and traceable.
- **Dependency Inversion:** High-level modules must not depend on low-level modules. Both must depend on abstractions.
- **Explicit is Better than Implicit:** No "magic" global variables or hidden side effects.

## Layered Hierarchy (The "Clean" Rule)
Dependencies must only point **inward**. An inner layer cannot know anything about an outer layer.

| Layer | Responsibility | Allowed Dependencies |
| :--- | :--- | :--- |
| **1. Domain/Core** | Enterprise rules, Entities, Pure Functions, Interfaces. | None (Strictly Isolated) |
| **2. Application** | Use Cases, Orchestrators, Business Workflows. | Domain |
| **3. Infrastructure** | DB Repositories, Third-party Clients, Auth Providers. | Application, Domain |
| **4. Presentation** | UI Components, API Controllers, CLI Input/Output. | Infrastructure, Application |

## Data Flow & Validation
- **Zero-Trust Input:** Every external payload must be validated at the boundary using a schema-first approach (e.g., Zod, Pydantic).
- **Sanitization:** All strings must be sanitized to prevent injection (SQL/XSS) before being passed to Use Cases.
- **DTO Pattern:** Use Data Transfer Objects for all external responses. Never leak raw database models or internal system metadata.
- **Standardized Errors:** Use a global error handler. Error messages must be descriptive for developers but sanitized for end-users.

## State & Communication
- **Single Source of Truth:** Centralized state management. Avoid local "shadow" states that can drift.
- **Atomic Operations:** Ensure all database or state mutations are atomic. If one part of a multi-step process fails, the system must rollback or compensate.
- **Asynchrony:** Long-running tasks must be offloaded to a queue or background worker. The main execution thread must remain responsive.

## Security & Secrets
- **Statelessness:** Prefer stateless authentication (e.g., JWT/OIDC) where possible to enable horizontal scaling.
- **Environment Parity:** All configuration must be driven by Environment Variables. Hardcoding secrets, URLs, or port numbers is a **Blocker**.
- **Least Privilege:** Code must request the minimum permissions necessary for a task.

## Compliance Checklist
Before submitting any code, verify:
1. **Dependency Check:** No UI component imported into a Business Logic file.
2. **Validation:** Schema/type guard exists for every new input.
3. **Error Handling:** Every new function has a `try/catch` or error return type.
4. **Side Effects:** No function does more than its name implies.
5. **Testing:** Logic can be unit tested without mocking an entire database.
