import { Student } from "../models/Student.js";

export class StudentManager {
  private students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
    this.saveToLocalStorage();
  }

  getAllStudents(): Student[] {
    return this.students;
  }

  findStudentByID(id: string): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  findStudentsByName(name: string): Student[] {
    const lowerName = name.toLowerCase();
    return this.students.filter(s =>
      s.first_name.toLowerCase().includes(lowerName) ||
      s.last_name.toLowerCase().includes(lowerName)
    );
  }

  findStudentsByMajor(major: string): Student[] {
    return this.students.filter(s =>
      s.major.toLowerCase().includes(major.toLowerCase())
    );
  }

  findStudentByEmail(email: string): Student | undefined {
    return this.students.find(s => s.email === email);
  }

  saveToLocalStorage(): void {
    localStorage.setItem("students", JSON.stringify(this.students));
  }

  loadFromLocalStorage(): void {
    const data = localStorage.getItem("students");
    if (data) {
      this.students = JSON.parse(data);
    }
  }
}