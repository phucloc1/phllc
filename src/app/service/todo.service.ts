import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface subject{
  id?: string,
  ma_lop: string,
  ten_lop: string,
  time: number,
  time_start: number,
  time_end: number,
  soluong: number
  // students?: {
  //   id?: string,
  //   mssv: string,
  //   name: string,
  //   status: boolean,
  //   n_co: number,
  //   n_vang: number,
  //   ma_lop: string
  // }
}
export interface student {
  id?: string,
  mssv: string,
  name: string,
  status: boolean,
  n_co: number,
  n_vang: number,
  note: string,
  waring: string,
  ma_lop: string
  // class: {
  //   class_id: string,
  // }
}
export interface result {
  id?: string,
  class: subject,
  date: string,
  Students: student
}


@Injectable({
  providedIn: "root"
})

export class TodoService {
  private subjectCollection: AngularFirestoreCollection<subject>;
  private subjects: Observable<subject[]>;
  private studentCollection: AngularFirestoreCollection<student>;
  private students: Observable<student[]>;


  constructor(db: AngularFirestore) {
    //get Subject 
    this.subjectCollection = db.collection<subject>('subjects');
    this.subjects = this.subjectCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };  
        });
      })
    );
    // getStudent
    this.studentCollection = db.collection<student>('students');
    this.students = this.studentCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };  
        });
      })
    );
    // getStudent

  }

// Subject
getLop(){
 return this.subjects;}
getLopbyId(id){
  return this.subjectCollection.doc<subject>(id).valueChanges();}
updateLop(Subject: subject, id: string){
  return this.subjectCollection.doc(id).update(Subject);}
addLop(Subject: subject){
 return this.subjectCollection.add(Subject);}
delLop(id){
 return  this.subjectCollection.doc(id).delete();}

// Student
getStudent(){
  return this.students; }
 getStudentById(id){
   return this.studentCollection.doc<student>(id).valueChanges();}
 updateStudent(Student: student, id: string){
   return this.studentCollection.doc(id).update(Student);}
 addStudent(Student: student){
  return this.studentCollection.add(Student);}
 delStudent(id){
  return  this.studentCollection.doc(id).delete();}



}
