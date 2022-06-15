import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ApiService } from 'src/app/modules/core/services/api-service';

@Component({
  selector: 'app-loading-page',
  templateUrl: 'loading-page.component.html',
  styles: [``],
})
export class LoadingPageComponent {
  isLoading = true;
  constructor(private apiService: ApiService, private router: Router) {
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['admin']);
    }, 4000);
  }
}
