const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Create Buttons 
function createButtons() {
    const subjects = [...new Set(courses.map(course => course.subject))]; //gettin subject
    const btnContainer = document.querySelector("#courses-name");
    btnContainer.innerHTML = ""; // Clear buttons

    //Button "all"
    const allButton = document.createElement('button');
    allButton.textContent = "All";
    allButton.onclick = () => displayCourses();
    allButton.classList.add('btn-course')
    btnContainer.appendChild(allButton);

    //Button by subject
    subjects.forEach(subject => {
        const btnSubject = document.createElement('button');
        btnSubject.textContent = subject;
        btnSubject.onclick = () => displayCourses(subject);
        btnSubject.classList.add('btn-course')
        btnContainer.appendChild(btnSubject)
    })

}

function displayCourses(subject) {
    const container = document.querySelector("#courses-detail");
    container.innerHTML = "";  // Limpiar contenido previo

    let filteredCourses;

    if (!subject || subject === "All") {
        // display all courses
        courses.filter(course => course.subject === subject);
    } else {
        // filter by subject
        filteredCourses = courses.filter(course => course.subject === subject);
    }

    // Display modal for each course


    filteredCourses.forEach(course => {
        const btnFiltered = document.createElement("button");
        btnFiltered.textContent = `${course.subject} ${course.number}`
        btnFiltered.classList.add('btn-course')
        if (course.completed) {
            btnFiltered.textContent = `✔️ ${course.subject} ${course.number}`;
            btnFiltered.classList.add('completed-course')
        }

        btnFiltered.addEventListener('click', () => {
            displayCourseDetails(course);
        });
        container.appendChild(btnFiltered);

        const totalCredits = filteredCourses
            .filter(course => course.completed)
            .reduce((sum, course) => sum + course.credits, 0);

        document.getElementById("credits").textContent = `The total credits for course listed above is ${totalCredits}`;
    });

}

createButtons()


// Modals
const courseDetails = document.querySelector("#open-details");

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${courses.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();


    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

