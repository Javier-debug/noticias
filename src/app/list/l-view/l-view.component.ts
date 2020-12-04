import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { INew } from 'src/app/interfaces/new/new.interface';
import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-l-view',
  templateUrl: './l-view.component.html',
  styleUrls: ['./l-view.component.scss']
})
export class LViewComponent implements OnInit {
  neww: INew
  params: Params;
  constructor(
    private userService: NewService, // Servicio de usuarios
    private router: Router, // Clase para hacer la navegacion
    private activatedRoute: ActivatedRoute, // Obtener los parametros de la url
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      async (params: Params) => {
        this.params = params;
        await this.iniValuesHttp();
        console.log('Parametros: ', params)
      }, // next
      (error: any) => {
        console.log('Error parametros: ', error)
      }, // error
      () => {} // complete
    )
  }

  async iniValuesHttp(): Promise<void> {
    try {
      var neww = await this.userService.getNewById(this.params.newId).toPromise();
      if(neww.data()) {
        this.neww = neww.data();
      }
      else {
        this.router.navigate(['/', 'home', 'list', 'tpl', 'list']);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

}
