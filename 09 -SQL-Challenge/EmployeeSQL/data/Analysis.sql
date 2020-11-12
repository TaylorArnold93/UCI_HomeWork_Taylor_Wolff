-- List of Employee#, Last_Name, First_Name, Sex & Salary.
SELECT
employees.emp_no,
employees.last_name,
employees.first_name,
employees.sex,
salaries.salary
FROM Employees JOIN Salaries ON
Employees.emp_no = salaries.emp_no;


--2. List first name, last name, and hire date for employees who were hired in 1986.
SELECT first_name, last_name, hire_date 
FROM Employees 
WHERE hire_date >= '1986-01-01' 
AND hire_date <= '1986-12-31';


-- 3. List the manager of each department with the following information: 
-- department number, department name, the manager's employee number, last name, first name.
SELECT
Dept_Manager.dept_no, 
Departments.dept_name, 
Dept_Manager.emp_no,
Employees.last_name,
Employees.first_name
FROM Departments 
Join Departments ON Dept_Manager.dept_no=Departments.dept_no
Join Employees On (employees.emp_no=Dept_Manager.emp_no) ;


-- 4. List the department of each employee with the following information: employee number, last name, first name, and department name.
Select
Dept_emp.emp_no,
Employees.last_name,
Employees.first_name,
Departments.dept_name
From Dept_emp 
Inner Join Departments ON Dept_EMP.dept_no=Departments.dept_no
Inner Join Employees On (employees.emp_no=Dept_emp.emp_no) ;


-- 5. List first name, last name, and sex for employees whose first name is "Hercules" and last names begin with "B."
SELECT first_name, last_name, sex From Employees Where first_name= 'Hercules' AND last_name like 'B%';


--6. List all employees in the Sales department, including their employee number, last name, first name, and department name.
Select
Dept_emp.emp_no,
Employees.last_name,
Employees.first_name,
Departments.dept_name
From Employees
Join Dept_emp On Dept_emp.emp_no=Employees.emp_no
Join Departments On (Dept_emp.dept_no=Departments.dept_no)
Where dept_name='Sales' ;


-- 7. List all employees in the Sales and Development departments, including their employee number, last name, first name, and department name. 
Select
Dept_emp.emp_no,
Employees.last_name,
Employees.first_name,
Departments.dept_name
From Employees
Join Dept_emp On Dept_emp.emp_no=Employees.emp_no
Join Departments On (Dept_emp.dept_no=Departments.dept_no)
Where dept_name='Sales' OR dept_name='Development' ;


--8. In descending order, list the frequency count of employee last names, i.e., how many employees share each last name.
Select last_name, Count(Last_Name) From Employees Group By last_name Order By Count Desc ;
