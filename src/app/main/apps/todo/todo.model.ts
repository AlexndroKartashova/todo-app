export class Todo
{   
    id:string;
    parentItemId?: number;
    name: string;
    isDone: boolean;
    isDeleted: boolean;

    /**
     * Constructor
     *
     * @param todo
     */
    constructor(todo)
    {
        {
            this.id = todo.id;
            this.parentItemId = todo.parentItemId;
            this.name = todo.name;
            this.isDone = false;
            this.isDeleted = false;
            
        }
    }
    /**
     * Toggle completed
     */
    toggleCompleted(): void
    {
        this.isDone = !this.isDone;
    }

    /**
     * Toggle deleted
     */
    toggleDeleted(): void
    {
        this.isDeleted = !this.isDeleted;
    }
}


