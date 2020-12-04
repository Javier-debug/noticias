import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-f-new',
  templateUrl: './f-new.component.html',
  styleUrls: ['./f-new.component.scss']
})
export class FNewComponent implements OnInit {
  form: FormGroup;
  params: Params;
  // Valida si es un nuevo maestro
  isNew: boolean;
  img = ''
  files: any;

  constructor(
    private newService: NewService, // Servicio de usuarios
    private router: Router, // Clase para hacer la navegacion
    private activatedRoute: ActivatedRoute, // Obtener los parametros de la url
  ) { }

  ngOnInit(): void {
    this.isNew = true;
    // Instancia del grupo de controles
    this.form = new FormGroup({
      // Definicion de cada uno de los controles
      // (valor inicial, validaciones sincronas, validaciones asincronas)
      title: new FormControl('', [Validators.required]), 
      content: new FormControl('', [Validators.required])
    });

    // Obtener los parametros de la url
     this.activatedRoute.params.subscribe(
      async (params: Params) => {
        this.params = params;
        this.isNew = params.newId === 'new' ? true : false;
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
      if(!this.isNew) {
        var neww = await this.newService.getNewById(this.params.newId).toPromise();
        console.log(neww.data())
        if(neww.data()) {
          this.form = new FormGroup({
            // Definicion de cada uno de los controles
            // (valor inicial, validaciones sincronas, validaciones asincronas)
            title: new FormControl(neww.data().title, [Validators.required]), 
            content: new FormControl(neww.data().content, [Validators.required])
          });

          if(neww.data().imageUrl == '') {
            this.img = 'https://interaxiona.com/wp-content/uploads/2018/08/cargando-loading-043.gif'
          }
          else {
            console.log(neww.data().imageUrl)
            this.img = neww.data().imageUrl;
          }
        }
      }
      else {
        this.form.reset();
        this.img = 'https://interaxiona.com/wp-content/uploads/2018/08/cargando-loading-043.gif';
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  async onAdd(): Promise<void> {
    console.log(this.form)
    if(this.form.valid) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var date = mm + '/' + dd + '/' + yyyy;
      const url = await this.newService.uploadFile(`profile/${this.files[0].name}`, this.files[0]);
      const user = await this.newService.addNew({...this.form.value, imageUrl: url, date: date});
      this.router.navigate(['/', 'home', 'list', 'tpl', 'list']);
    }
    else {
      console.log('El formulario es invalido');
    }
  }

  async onUpdate(): Promise<void> {
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var date = mm + '/' + dd + '/' + yyyy;
      const url = await this.newService.uploadFile(`profile/${this.files[0].name}`, this.files[0]);
      await this.newService.updateNew(this.params.newId ,{...this.form.value, imageUrl: url, date: date});
      this.router.navigate(['/', 'home', 'list', 'tpl', 'list']);
    }
    catch(error) {
      console.log(error);
    }
  }

  async onChange(event: any): Promise<any> {
    this.files = event.target.files;
    if(this.files.length > 0) {
      this.img = await this.getBase64(this.files[0]);
    } 
    else {
      console.log('No selecciono un archivo');
    }
  }
  
  getBase64(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });
  }

}
