export enum TodoState {
    created = 'created',
    completed = 'completed',
    archived = 'archived'
}

export interface ITodo {
    id: number,
    title: string,
    date: string,
    state: TodoState
}