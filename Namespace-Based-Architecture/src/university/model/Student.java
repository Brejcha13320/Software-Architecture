package university.model;

public class Student {
	
	// Estudiante - atributos.
	private String name;
	private int age;
    private String registration;
    
    public Student(String name, int age, String registration) {
        this.name = name;
        this.age = age;
        this.registration = registration;   
    }
    
    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getRegistration() {
		return registration;
	}

	public void setRegistration(String registration) {
		this.registration = registration;
	}
	
	@Override
    public String toString() {
        return "Estudiante{" +
                "nombre='" + name + '\'' +
                ", edad=" + age +
                ", matricula='" + registration + '\'' +
                '}';
    }

}
