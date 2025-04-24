import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private dbservice: DbService) {}

  items: { id: string; title: string; code: string }[] = [];

  isLoading = true;

  ngOnInit() {
    this.dbservice.getAllSnippet().then((data:any) => {
      console.log("HOME Component -------->",data);
      this.items = data;
      this.isLoading = false;

    })

  }

  // ngOnInit() {
  //   this.dbservice.getAllSnippet().then((data: any[]) => {
  //     console.log(data);
  //     this.items = (data ?? []).filter(
  //       (item) => item && item.id && item.title && item.code
  //     );
  //   });
  // }
}
