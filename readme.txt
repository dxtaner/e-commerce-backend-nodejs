Made with NodeJs and Express framework. Used MongoDB as a database and handled communication between server
and database by using native mongodb driver.

[Your Project Name] is a web application built with Node.js and Express.js, designed to provide a comprehensive set 
of functionalities for managing various aspects of an e-commerce platform. The project utilizes a modular and organized 
structure, making it scalable and maintainable.


JavaScript: Primary programming language.
NodeJS: Runtime environment for server-side development.
Express: Web application framework for Node.js.
MongoDB: NoSQL database for storing and retrieving data.
GitHub: Version control for collaborative development.

MongoDB Integration:

Utilized the native MongoDB driver for efficient communication between the server and the database.
Followed the Controller, Service, Repository pattern for a well-structured and maintainable codebase.
Authentication System:

Implemented a session-based custom authentication system.
Used bcrypt to encrypt passwords, ensuring user security.
Authenticated requests are handled by passing the session header to the request.
File Uploads:

Managed file uploads using the Multer package.
Email Notifications:

Sent welcome emails to users using the Nodemailer package.
Provided a seamless onboarding experience for new users.
Real-Time Updates:

Implemented Socket.io with MongoDB collection watchers.
Users can observe real-time product changes, enhancing the interactive experience.