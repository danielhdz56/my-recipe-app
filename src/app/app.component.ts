import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCagqiKzv3MZtUQizagYc9kJzNd397nFCw",
      authDomain: "udemy-ng-http-85067.firebaseapp.com"
    });
  }
  
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
