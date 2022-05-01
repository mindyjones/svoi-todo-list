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

export interface IUser {
    id: number;
    name: string;
}

export interface ITag {
    id: number,
    title: string,
    color: string,
}