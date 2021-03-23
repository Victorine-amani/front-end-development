function getGrade(marks) {
    let grades;
    if (marks >= 80) {
        grades = "A";
        console.log(grades)
    } else if (marks >= 70 && marks < 80) {
        grades = "B",
            console.log(grades)
    } else if (marks >= 60 && marks < 70) {
        grades = "C";
        console.log(grades);
    } else if (marks >= 50 && marks < 60) {
        grades = "D";
        console.log(grades)
    } else if (marks >= 40 && marks < 50) {
        grades = "E";
        console.log(grades)
    } else {
        grades = "F";
        console.log(grades)
    }
    return grades;
}
getGrade(90)