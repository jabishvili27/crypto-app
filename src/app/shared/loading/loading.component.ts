import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  loading$: Observable<boolean> | null = null;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loading$ = this.loadingService.loading$;
  }
}