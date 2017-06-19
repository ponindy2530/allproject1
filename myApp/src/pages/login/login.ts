import { Component } from '@angular/core';

import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // @Input() lg: boolean = false;
  // isLogin = false;
  // username: any;
  // password: any;
  // models: any;
  // models1: any;
  // models2: any;
  songs: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire, public alertCtrl: AlertController,public actionSheetCtrl:ActionSheetController) {
    //  itemObservable.set({ name: 'new name!'});
    this.songs = af.database.list('/songs');
    console.log(this.songs);
    
  }



  addSong() {
    let prompt = this.alertCtrl.create({
      title: 'Song Name',
      message: "Enter a name for this new song you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },{
          name: 'position',
          placeholder: 'ตำแหนง'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.songs.push({
              title: data.title,position:data.position
            });
          }
        }
      ]
    });
    prompt.present();
  }
updateSong(songId, songTitle){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Update the name for this song",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: songTitle
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.songs.update(songId, {
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}
removeSong(songId: string){
  this.songs.remove(songId);
}
  showOptions(songId, songTitle) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete Song',
          role: 'destructive',
          handler: () => {
            this.removeSong(songId);
          }
        }, {
          text: 'Update title',
          handler: () => {
            this.updateSong(songId, songTitle);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
