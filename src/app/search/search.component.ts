import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	name :any;
	dataItem: any = []
	item: any = {}
	recipes: any[] = []

	constructor(private api: ApiService, public http: HttpClient) { }

	ngOnInit(): void {
		//load food 
		// this.api.search().subscribe(data => data );

		// console.log('foooddd',)
		
	}

	submit(){
		this.api.search(this.name).subscribe((item: any) => {
			//console.log(item);
			console.log(item.hits);
			// this.item = item
			this.item = item
			this.recipes = item.hits
		});
	}

	
}
