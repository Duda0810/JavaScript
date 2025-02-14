class Tarefa {
    descricao: string;
    prioridade: number;
    status: string;

    constructor(descricao: string, prioridade: number = 0) {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = 'Pendente';
    }

    mostrarInfo(): string {
        return `Tarefa: ${this.descricao}, Prioridade: ${this.prioridade}, Status: ${this.status}`;
    }
}

class FilaTarefa {
    private tarefas: Tarefa[];

    constructor() {
        this.tarefas
 = [];
    }

    addTarefas(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
        console.clear();
        console.log('Tarefa adicionada com sucesso!');
    }

    removeTarefa(): Tarefa | null {
        if (this.tarefas.length > 0) {
            const removetarefa = this.tarefas.shift();
            console.clear();
            console.log('Tarefa removida:', removetarefa?.descricao);
            return removetarefa || null;
        } else {
            console.clear();
            console.log('Nenhuma tarefa na fila.');
            return null;
        }
    }

    listaTarefa(): void {
        console.clear();
        if (this.tarefas.length > 0) {
            console.log('Tarefas na fila:');
            this.tarefas.forEach((tarefa, index) => {
                console.log(`${index + 1}. ${tarefa.mostrarInfo()}`);
            });
        } else {
            console.log('Nenhuma tarefa na fila.');
        }
    }

    tarefaCompleta(): void {
        console.clear();
        if (this.tarefas.length > 0) {
            this.tarefas[0].status = 'Concluída';
            console.log(`Tarefa "${this.tarefas[0].descricao}" foi marcada como concluída.`);
        } else {
            console.log('Nenhuma tarefa na fila.');
        }
    }
}

import * as readlineSync from 'readline-sync';

function menuIntarativo() {
    const fila = new FilaTarefa
();
    let option = '';

    while (option !== '5') {
        console.clear();
        console.log('\n--- Menu To-Do List ---');
        console.log('1. Adicionar tarefa');
        console.log('2. Remover tarefa');
        console.log('3. Listar tarefas');
        console.log('4. Marcar tarefa como concluída');
        console.log('5. Sair');
        option = readlineSync.question('Escolha uma opção: ');

        switch (option) {
            case '1':
                console.clear();
                const descricao = readlineSync.question('Descrição da tarefa: ');
                const prioridade = readlineSync.questionInt('Prioridade da tarefa (0 para opcional): ');
                const tarefa = new Tarefa(descricao, prioridade);
                fila.addTarefas(tarefa);
                break;
            case '2':
                fila.removeTarefa();
                break;
            case '3':
                fila.listaTarefa
        
        ();
                break;
            case '4':
                fila.tarefaCompleta();
                break;
            case '5':
                console.clear();
                console.log('Saindo...');
                break;
            default:
                console.clear();
                console.log('Opção inválida.');
                break;
        }
        
        if (option !== '5') {
            readlineSync.question('Pressione Enter para continuar...');
        }
    }
}

menuIntarativo();
