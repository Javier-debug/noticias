import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INew } from 'src/app/interfaces/new/new.interface';
import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() neww: INew; 

  constructor(
    private newService: NewService,
    private router: Router
  ) {
    console.log(this.neww)
   }

  ngOnInit(): void {
    if(this.neww.imageUrl == ''){
      this.neww.imageUrl = 'https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png'
    }
    console.log(this.neww)
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

  checkNew(neww: INew): void {
    this.router.navigate(['/', 'home', 'list', 'tpl', neww._id]);
  }
}
