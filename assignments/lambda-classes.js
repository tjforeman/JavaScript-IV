// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender=attributes.gender;
    }
    speak(){
      return `Hello my name is${this.name}. I am from ${this.location}.`;
    }
  }
  class Instructor extends Person{
      constructor(InstructorAttributes){
      super(InstructorAttributes);
      this.specialty = InstructorAttributes.specialty;
    this.favLanguage = InstructorAttributes.favLanguage;
    this.catchPhrase=InstructorAttributes.catchPhrase;
      }
      demo(subject){
          return `Today we are learning about ${subject}.`;
      }
      grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`
      }
      grader(student){
          let grade=student.grade
          const sprint= Math.random()
          return `${student.name}'s grade is${student.grade += sprint}`
      }
    }
    class Student extends Person{
        constructor(StudentAttributes){
        super(StudentAttributes);
        this.previousBackground = StudentAttributes.previousBackground;
      this.classname = StudentAttributes.classname;
      this.favSubjects=StudentAttributes.favSubjects;
      this.grade=StudentAttributes.grade;
        }
        listsSubjects(){
            return this.favSubjects;
        }
        PRAssignment(subject){
          return `${this.name} has submitted a PR for ${subject}`;
        }
        sprintchallenge(student,subject){
            return `${student.name} has begun sprint challenge on ${subject}`
        }
        graduate(student){
            let Studentgrade=this.grade;
            if (Studentgrade> 70){
            return `Congratulations ${this.name} you've graduated from Lambda school! `
        }else{
            return grader(student)
       
        }
    }
}
      class ProjectManager extends Instructor{
        constructor(ProjectManagerAttributes){
        super(ProjectManagerAttributes);
        this.gradClassName = ProjectManagerAttributes.gradClassName;
      this.favInstructor = ProjectManagerAttributes.favInstructor;
        }
        standup(channel){
            return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
        }
        codeDebug(student,subject){
          return `${this.name} debugs ${student.name}'s code on ${subject}`
        }
      }

      const fred = new Instructor({
        name: 'Fred',
        location: 'Bedrock',
        age: 37,
        gender: 'male',
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
      });

      const bob = new Instructor({
        name: 'bob',
        location: 'New York',
        age: 42,
        gender: 'male',
        favLanguage: 'Python',
        specialty: 'back-end',
        catchPhrase: `Up and atem`
      });

      const jill = new Instructor({
        name: 'Jill',
        location: 'Seattle',
        age: 32,
        gender: 'female',
        favLanguage: 'Java',
        specialty: 'Design',
        catchPhrase: `Wake up and smell the coffee`
      });

      const jim = new Student({
        name: 'Jim',
        location: 'Chicago',
        age: 28,
        gender: 'male',
        previousBackground: 'cook',
        classname: 'web-18',
        favSubjects: ["html","css"],
        grade:100
      });
      const sierra = new Student({
        name: 'Sierra',
        location: 'Los Angeles',
        age: 22,
        gender: 'female',
        previousBackground: 'customer service',
        classname: 'cs-12',
        favSubjects: ["react","angular"],
        grade:85
      });
      const mary = new Student({
        name: 'Mary',
        location: 'Miami',
        age: 34,
        gender: 'female',
        previousBackground: 'waitress',
        classname: 'IOS-4',
        favSubjects: ["javascript","c++"],
        grade:68
      });
      const mark = new ProjectManager({
        name: 'Mark',
        location: 'St.Louis',
        age: 30,
        gender: 'male',
        gradClassName: 'web-14',
        favInstructor:"Jill"
      });
      const sarah = new ProjectManager({
        name: 'Sarah',
        location: 'Atlanta',
        age: 29,
        gender: 'female',
        gradClassName: 'web-16',
        favInstructor:"Fred"
      });
      const dwight = new ProjectManager({
        name: 'Dwight',
        location: 'Scranton, PA',
        age: 33,
        gender: 'male',
        gradClassName: 'web-15',
        favInstructor:"Bob"
      });
      console.log(bob.name);
      console.log(jill.gender);
      console.log(dwight.location);
      console.log(mary.previousBackground);
      console.log(jim.age);
      console.log(sarah.gradClassName);
      console.log(sierra.classname);
      console.log(jill.specialty);
      console.log(jill.demo('javascript'));
      console.log(fred.grade(sierra,"CSS"));
      console.log(mary.listsSubjects());
      console.log(jim.PRAssignment("javascript"));
      console.log(sierra.sprintchallenge(jim,"react"));
      console.log(sarah.standup("web-18-sarah"));
      console.log(mark.codeDebug(mary,"angular"))
      console.log(dwight.grader(mary))
      console.log(jim.graduate())
      console.log(mary.graduate())





