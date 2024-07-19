package university.service;

import java.util.ArrayList;
import java.util.List;
import university.model.Student;

public class StudentService {
	
	private List<Student> students = new ArrayList<>();
	
	// Agrega los estudiantes.
	public void addStudent(Student student) {
		students.add(student);
    }

	// Lista los estudiantes.
    public List<Student> listStudent() {
        return students;
    }

}
