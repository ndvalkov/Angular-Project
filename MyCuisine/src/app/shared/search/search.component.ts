import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {NotificationService} from '../../services/notification.service';

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

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  onSubmit($event) {
    this.dataService
      .searchPosts(this.searchQuery)
      .then(res => {
        this.onSearchQuery.emit(res);
      })
      .catch(err => {
        this.notificationService.showError('Unable to process search query');
      });
  }
}
