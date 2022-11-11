import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ExperienciaInterface } from '../interface/experiencia.interface';
import { PracticasInterface } from '../interface/practicas.interface';
import { ProyectosInterface } from '../interface/proyectos.interface';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private firestore: Firestore) { }

  getExperiencia(): Observable<ExperienciaInterface[]>{
    const expRef = collection(this.firestore,'experiencia');
    return collectionData(expRef, { idField: 'id'}) as Observable<ExperienciaInterface[]>;
  }

  getProyectos(): Observable<ProyectosInterface[]>{
    const proyRef = collection(this.firestore, 'proyectos');
    return collectionData(proyRef, {idField: 'id'}) as Observable<ProyectosInterface[]>;
  }

  getPracticas(): Observable<PracticasInterface[]>{
    const practRef = collection(this.firestore, 'practicas');
    return collectionData(practRef, {idField: 'id'}) as Observable<PracticasInterface[]>;
  }

 
}
