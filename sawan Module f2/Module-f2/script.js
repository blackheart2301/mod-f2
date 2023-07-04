// Define the array of students
const students = [
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
    { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' }
  ];
  
  // Function to display the list of students
  function displayStudents() {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
  
    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>${student.degree}</td>
        <td>${student.email}</td>
        <td>
          <button class="editButton" data-id="${student.ID}">Edit</button>
          <button class="deleteButton" data-id="${student.ID}">Delete</button>
        </td>
      `;
      studentsList.appendChild(row);
    });
  }
  
  // Function to add a new student profile
  function addStudent(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const degree = document.getElementById('degree').value;
    const email = document.getElementById('email').value;
  
    const newStudent = {
      ID: students.length + 1,
      name,
      age,
      grade,
      degree,
      email
    };
  
    students.push(newStudent);
    displayStudents();
    document.getElementById('studentForm').reset();
  }
  
  // Function to edit a student profile
  function editStudent(event) {
    event.preventDefault();
  
    const id = event.target.dataset.id;
    const student = students.find(student => student.ID === parseInt(id));
  
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
    document.getElementById('degree').value = student.degree;
    document.getElementById('email').value = student.email;
  
    const submitButton = document.getElementById('submitButton');
    submitButton.textContent = 'Edit Student';
    submitButton.dataset.id = id;
  }
  
  // Function to update a student profile
  function updateStudent(event) {
    event.preventDefault();
  
    const id = event.target.dataset.id;
    const student = students.find(student => student.ID === parseInt(id));
  
    student.name = document.getElementById('name').value;
    student.age = document.getElementById('age').value;
    student.grade = document.getElementById('grade').value;
    student.degree = document.getElementById('degree').value;
    student.email = document.getElementById('email').value;
  
    displayStudents();
    document.getElementById('studentForm').reset();
    document.getElementById('submitButton').textContent = 'Add Student';
    delete event.target.dataset.id;
  }
  
  // Function to delete a student profile
  function deleteStudent(event) {
    const id = event.target.dataset.id;
    const index = students.findIndex(student => student.ID === parseInt(id));
  
    students.splice(index, 1);
    displayStudents();
  }
  
  // Function to search for students
  function searchStudents() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
  
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchQuery) ||
      student.email.toLowerCase().includes(searchQuery) ||
      student.degree.toLowerCase().includes(searchQuery)
    );
  
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
  
    filteredStudents.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>${student.degree}</td>
        <td>${student.email}</td>
        <td>
          <button class="editButton" data-id="${student.ID}">Edit</button>
          <button class="deleteButton" data-id="${student.ID}">Delete</button>
        </td>
      `;
      studentsList.appendChild(row);
    });
  }
  
  // Event listeners
  document.getElementById('studentForm').addEventListener('submit', addStudent);
  document.getElementById('studentsList').addEventListener('click', event => {
    if (event.target.classList.contains('editButton')) {
      editStudent(event);
    } else if (event.target.classList.contains('deleteButton')) {
      deleteStudent(event);
    }
  });
  document.getElementById('submitButton').addEventListener('click', updateStudent);
  document.getElementById('searchBox').addEventListener('input', searchStudents);
  
  // Initial display of students
  displayStudents();