import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INew } from 'src/app/interfaces/new/new.interface';
import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-l-list',
  templateUrl: './l-list.component.html',
  styleUrls: ['./l-list.component.scss']
})
export class LListComponent implements OnInit {
  news: INew[];

  constructor(
    private newService: NewService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.news = [];
    this.newService.getNewsFirebase().subscribe((news: INew[]) => {
      this.news = news;
      console.log('Lista de noticias firebase: ', this.news);
    })
  }

  async onDelete(neww: INew): Promise<void> {
    try {
      const newDeleted =await this.newService.deleteNewById(neww._id);
      console.log('Noticia eliminado: ', newDeleted);
    } catch(error) {
      console.log('No se pudo eliminar la noticia: ', error);
    }
    
  }

  onUpdate(neww: INew): void {
    this.router.navigate(['/', 'home', 'form', neww._id]);
  }

}
