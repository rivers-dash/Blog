import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lorem = 'Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.'

	posts = [
		{
			title: 'Mon premier post',
		  content: this.lorem,
		  loveIts: 0,
		  created_at: new Date()
		},
		{
			title: 'Mon second post',
		  content: this.lorem,
		  loveIts: 0,
		  created_at: new Date()
		},
		{
			title: 'Encore un post',
		  content: this.lorem,
		  loveIts: 0,
		  created_at: new Date()
		},
	]
}
