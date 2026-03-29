# API Design Documentation

## Authentication
### Endpoint: `/api/auth/login`
- **Method:** POST  
- **Description:** Authenticates user and returns a token.  
- **Request Body:**  
  - `username`: string  
  - `password`: string  
- **Response:**  
  - `token`: string  
  - `expiresIn`: number  

### Endpoint: `/api/auth/logout`
- **Method:** POST  
- **Description:** Logs the user out and invalidates the token.


## Question Papers
### Endpoint: `/api/question-papers`
- **Method:** GET  
- **Description:** Retrieves a list of question papers.  
- **Response:**  
  - `papers`: Array of question paper objects

### Endpoint: `/api/question-papers/{id}`
- **Method:** GET  
- **Description:** Retrieves a specific question paper by ID.

### Endpoint: `/api/question-papers`
- **Method:** POST  
- **Description:** Creates a new question paper.  
- **Request Body:**  
  - `title`: string  
  - `content`: string  

### Endpoint: `/api/question-papers/{id}`
- **Method:** PUT  
- **Description:** Updates a specific question paper by ID.

### Endpoint: `/api/question-papers/{id}`
- **Method:** DELETE  
- **Description:** Deletes a specific question paper by ID.


## Chat
### Endpoint: `/api/chat`
- **Method:** GET  
- **Description:** Retrieves chat messages.

### Endpoint: `/api/chat`
- **Method:** POST  
- **Description:** Sends a new chat message.


## Export
### Endpoint: `/api/export`
- **Method:** GET  
- **Description:** Exports data in specified format (e.g., PDF, CSV).  


## Sharing
### Endpoint: `/api/share`
- **Method:** POST  
- **Description:** Shares resources with other users.  
- **Request Body:**  
  - `resourceId`: string  
  - `userId`: string


## User Management
### Endpoint: `/api/users`
- **Method:** GET  
- **Description:** Retrieves a list of users.

### Endpoint: `/api/users/{id}`
- **Method:** GET  
- **Description:** Retrieves a specific user by ID.

### Endpoint: `/api/users`
- **Method:** POST  
- **Description:** Creates a new user account.  
- **Request Body:**  
  - `username`: string  
  - `password`: string  

### Endpoint: `/api/users/{id}`
- **Method:** PUT  
- **Description:** Updates user information by ID.

### Endpoint: `/api/users/{id}`
- **Method:** DELETE  
- **Description:** Deletes a specific user by ID.

---