import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css',
})
export class ViewSnippetComponent {
  codeSnippets = {
    title: '',
    code: ''
  }

  constructor(private route: ActivatedRoute, private dbservice: DbService) {}

  // codeSnippets: { id: string; title: string; code:string} | null = null;


  ngOnInit() {
    const docId = this.route.snapshot.params['id'];
    this.dbservice.getSnippetById(docId).then((data?: any) => {
      this.codeSnippets = data;
      console.log('VIEW Component ------->', this.codeSnippets);
    });
  }
}
