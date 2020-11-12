#Creating table for titles.csv
CREATE TABLE Titles (
    Title_ID VARCHAR(10) NOT NULL,
    Title VARCHAR(30) NOT NULL,
	Primary Key (Title_ID)
);

# Creating table for employees.csv
CREATE TABLE Employees (
    emp_no INT NOT NULL,
    emp_title VARCHAR(10) NOT NULL,
    birth_date VARCHAR(20) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    sex VARCHAR(1) NOT NULL,
    hire_date DATE NOT NULL,
    Primary Key (emp_no),
	Foreign Key (emp_title) References Titles(Title_ID)
);

# Creating table for Departments.csv
CREATE TABLE Departments (
    dept_no VARCHAR(4) NOT NULL,
    dept_name VARCHAR(20) NOT NULL,
	PRIMARY KEY (dept_no)
);


# Creating table for Dept_Manager.csv
CREATE TABLE Dept_Manager (
	dept_no VARCHAR(4)  NOT NULL,
	emp_no INT NOT NULL,
	FOREIGN Key (dept_no) REFERENCES Departments (dept_no),
	FOREIGN Key (emp_no) REFERENCES Employees (emp_no)
);

# Creating table for Dept_Emp.csv
CREATE TABLE Dept_Emp (
    emp_no INT NOT NULL,
    dept_no VARCHAR(4)   NOT NULL,
	FOREIGN Key (dept_no) REFERENCES Departments(dept_no), 
    FOREIGN Key (emp_no) REFERENCES Employees(emp_no) 
);

# Creating table for Salaries.csv
CREATE TABLE Salaries (
    emp_no INT  NOT NULL,
    salary INT  NOT NULL,
    Foreign Key (emp_no) References Employees(emp_no)
);