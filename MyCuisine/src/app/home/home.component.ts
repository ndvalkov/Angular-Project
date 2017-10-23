import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {NotificationService} from '../services/notification.service';
import {Recommendation} from '../models/recommendation.model';
import {Testimonial} from '../models/testimonial.model';
import {Dish} from '../models/dish.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  options = {
    position: ['bottom', 'right'],
    timeOut: 1000,
    lastOnBottom: true
  };

  recommendations: Dish[] = [];
  testimonial: Testimonial = new Testimonial();
  testimonialContent = '';

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService) {
  }

  ngOnInit() {
    this.isLoading = true;

    const recPromise = this.dataService.getRecommendations();
    const testPromise = this.dataService.getTestimonials();

    Promise.all([recPromise, testPromise])
      .then(res => {
        this.isLoading = false;
        if (res[0].length && res[0].length !== 0) {
          const latestRec = res[0].pop() as Recommendation;
          this.recommendations = latestRec.dishes.filter(x => x);
        }

        if (res[1].length && res[1].length !== 0) {
          this.testimonial = res[1].pop();
          this.testimonialContent = this.trimTestimonial(this.testimonial.content, 100, '...');
        }
      })
      .catch(err => {
        this.isLoading = false;
        this.notificationService.showError(err._body);
      });
  }

  // TODO: Make pipe, use for recommendations too
  trimTestimonial(value, length, overflowSuffix): string {
    if (value.length <= length) {
      return value;
    }
    const strAry = value.split(' ');
    let retLen = strAry[0].length;
    let i;
    for (i = 1; i < strAry.length; i++) {
      if (retLen === length || retLen + strAry[i].length + 1 > length) {
        break;
      }
      retLen += strAry[i].length + 1;
    }
    return strAry.slice(0, i).join(' ') + (overflowSuffix || '');
  }
}
