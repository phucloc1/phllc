import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';
import { TodoService, student, subject } from "../../service/todo.service";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.page.html',
  styleUrls: ['./list-students.page.scss'],
})
export class ListStudentsPage implements OnInit {
  Students: student[];
  constructor(
    public alertController: AlertController, 
    private router: Router,
    public navCtrl: NavController,
    private todoService: TodoService,
 
  ) { }

  ngOnInit() {
    this.todoService.getStudent().subscribe(res => {
      this.Students = res;
    });    
  }
  goBack(){
    this.navCtrl.pop();
  }

  removeStudent(item){
    this.todoService.delStudent(item.id);
  }

}
