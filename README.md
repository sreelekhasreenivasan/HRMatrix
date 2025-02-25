
# 🚀 HRMatrix


The Employee Management System is a web application built with Next.js for the frontend, Bootstrap for styling, and MySQL as the database. It allows organizations to efficiently manage employee records, including adding, updating, and deleting employee details.


## 🧐 Features

- 📝 Employee CRUD operations (Create, Read, Update, Delete)
- 🔍 Search & filter employees
- 🔐 Authentication & role-based access (Admin, Employee)
- 📊 Dashboard with employee statistics
- 📄 Responsive UI with Bootstrap


## 🛠️ Installation Steps:

1. Clone the Repository

```bash
git clone git@github.com:sreelekhasreenivasan/HRMatrix.git
cd hrmatrix

```
2. Install Dependencies  

```bash
npm install

```
3. Configure Environment Variables
Create a .env.local file in the root directory and add:
```bash
DATABASE_URL=mysql://user:password@localhost:3306/employees_db
NEXTAUTH_SECRET=your_secret_key
```
4. Configure Environment Variables
Ensure MySQL is running and create the database:
```bash
CREATE DATABASE dbname;

```
5. Configure Environment Variables

```bash
npm run dev

```
Visit http://localhost:3000 in your browser.


## 🛠️ Tech Stack

- Frontend: Next.js, React, Bootstrap
- Backend: Next.js API routes, Node.js
- Database: MySQL

