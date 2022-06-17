import { Injectable } from '@angular/core';

interface Lista {
  tarefa: string;
}

@Injectable()
export class ThaistasksService {
  tarefas: Array<Lista> = [];

  constructor() { 
  }

  adicionarTarefa(tarefa: string) {
    this.tarefas.push({tarefa});
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index,1);
  }

  listarTarefa() {
    return this.tarefas;
  }

  
}



