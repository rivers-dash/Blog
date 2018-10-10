import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

	@Input() title: string
	@Input() content: string
	@Input() loveIts: number
	@Input() createdAt: Date

  constructor() { }

	getBackgroundColor() {
		if (this.loveIts > 0) {
			return 'list-group-item-success'
		} else if (this.loveIts < 0) {
			return 'list-group-item-danger'
		} else {
			return ''
		}
	}

	onLike() {
		this.loveIts++
	}

	onDislike() {
		this.loveIts--
	}

  ngOnInit() {
  }

}
