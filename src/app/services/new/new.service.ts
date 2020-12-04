import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { INew } from 'src/app/interfaces/new/new.interface';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  private newsCollection: AngularFirestoreCollection<INew>
  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
    ) { 
      this.newsCollection = angularFirestore.collection<INew>('news');
    }

    getNewsFirebase(): Observable<INew[]> {
      return this.newsCollection.valueChanges({idField: '_id'})
    }

    getNewById(id: string): Observable<firebase.firestore.DocumentSnapshot<INew>> {
      return this.newsCollection.doc(id).get();
    }

    updateNew(id: string, neww: INew): Promise<void> {
      return this.newsCollection.doc(id).update(neww);
    }

    addNew(neww: INew): Promise<any> {
      return this.newsCollection.add(neww);
    }

    deleteNewById(id: string): Promise<void> {
      return this.newsCollection.doc(id).delete();
    }

    async uploadFile(path: string, data: any): Promise<any> {
      await this.angularFireStorage.upload(path, data)
      return await this.angularFireStorage.ref(path).getDownloadURL().toPromise();
    }
}
