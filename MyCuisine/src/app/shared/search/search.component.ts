import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeholder = 'Search this website ...';
  @Input() minlength: number;
  @Input() maxLength: number;

  @Output() onSearchQuery = new EventEmitter<string>();

  @ViewChild('f') form: any;

  searchQuery: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit($event) {
    if (this.form.valid) {
      this.onSearchQuery.emit(this.searchQuery);
      this.form.reset();
    }
  }
}
