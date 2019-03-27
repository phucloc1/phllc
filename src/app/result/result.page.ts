import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  constructor(
    public modalController: ModalController,private  navParams: NavParams
  ) { }
  data = null;
  ngOnInit() {
    this.data = this.navParams.get('data');
    console.log(this.data);
  }
  close() {
    this.modalController.dismiss();
  }
}
