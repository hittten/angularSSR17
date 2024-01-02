import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-angular-git-hub-page',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './angular-git-hub-page.component.html',
  styleUrl: './angular-git-hub-page.component.scss'
})
export class AngularGitHubPageComponent {
  private http = inject(HttpClient)
  data = this.http.get("https://api.github.com/users/angular");
}
