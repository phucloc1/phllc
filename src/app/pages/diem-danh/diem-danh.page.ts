import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController, ModalController } from '@ionic/angular';
import { TodoService, student, subject } from "../../service/todo.service";
import { ResultPage } from '../../result/result.page';

@Component({
  selector: 'app-diem-danh',
  templateUrl: './diem-danh.page.html',
  styleUrls: ['./diem-danh.page.scss'],
})
export class DiemDanhPage implements OnInit {
  Students: student[];
today = new Date().getTime();
status: Boolean;
constructor(
    public alertController: AlertController, 
    private router: Router,
    public navCtrl: NavController,
    private todoService: TodoService,
    private modalController: ModalController
 
  ) { }

  ngOnInit() {

    this.todoService.getStudent().subscribe(res => {
      this.Students = res;
    });
  }

  goBack(){
    this.navCtrl.pop();
  }

  

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResultPage,
      componentProps: { data: this.Students }
    });
    return await modal.present();
  }

}
