import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { PracticasInterface } from '../interface/practicas.interface';
import { ProyectosInterface } from '../interface/proyectos.interface';

export interface Item { id: string; }

@Injectable({
  providedIn: 'root'
})


export class DocumentService {
   // public itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {  }

 getPractica(id: string): Observable<PracticasInterface>{
    const collectionRef = this.afs.collection<PracticasInterface>('practicas');
      return collectionRef.doc(id).valueChanges({idField: 'id'}) as Observable<PracticasInterface> ;
  }

  getProyecto(id: string): Observable<ProyectosInterface>{
    const collectionRef = this.afs.collection<ProyectosInterface>('proyectos');
      return collectionRef.doc(id).valueChanges({idField: 'id'}) as Observable<ProyectosInterface> ;
  }


  
}
