PROFESSIONAL POSTGRESQL LOGIN SYSTEM
====================================

Project features:
- PostgreSQL database
- Node.js + Express backend
- bcrypt password hashing
- Signup
- Login
- Duplicate email protection
- Login state
- Protected dashboard page
- Logout
- Responsive professional UI

PROJECT STRUCTURE
-----------------
postgre/
  server.js
  package.json
  database.sql
  frontend/
    signup.html
    signup.js
    login.html
    login.js
    home.html
    home.js
    style.css

SETUP
-----
1. Make sure PostgreSQL 18 and pgAdmin 4 are installed.
2. Make sure the database "login_system" and table "users" exist.
3. Open server.js.
4. Replace YOUR_POSTGRES_PASSWORD with your PostgreSQL postgres-user password.
5. Open terminal in this folder.
6. Run:
       npm install
7. Start:
       npm run dev
   or:
       node server.js
8. Open frontend/signup.html with Live Server.
9. Sign up, then login.

IMPORTANT
---------
The frontend localStorage value is only used as a basic client-side
login-state demonstration. Production authentication should use secure
server-side sessions or an equivalent secure authentication mechanism.
