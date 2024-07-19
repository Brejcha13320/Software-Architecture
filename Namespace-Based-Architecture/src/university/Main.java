package university;

import university.model.Student;
import university.service.StudentService;
import university.util.Utilities;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		StudentService service = new StudentService();
		
		Student student1 = new Student("Bryam Trochez", 25, "123456");
		Student student2 = new Student("Andrea Barco", 28, "7891011");
		Student student3 = new Student("Laura Hernandez", 30, "12131415");
		
		service.addStudent(student1);
		service.addStudent(student2);
		service.addStudent(student3);
		
		Utilities.printMessage("Listado de estudiantes:");
		
		for (Student student : service.listStudent()) {
			Utilities.printMessage(student.toString());
		}
        

	}

}
