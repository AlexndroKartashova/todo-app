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

export class User {

    email: string;
    firstName: string;
    lastName: string;
    birthday: Date;
    phoneNumber: Date;

    /**
     * Constructor
     *
     * @param user
     */
    constructor(user)
    {
        {
            this.email = user.email;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.birthday = user.birthday;
            this.phoneNumber = user.phoneNumber;
        }
    }
}

export class Contact {

    email?: string;
    name: string;
    phoneNumber?: Date;
    // userId: string;

    /**s
     * Constructor
     *
     * @param contact
     */
    constructor(contact)
    {
        {
            this.email = contact.email;
            this.name = contact.name;
            this.phoneNumber = contact.phoneNumber;
            // this.userId = contact.userId;
        }
    }
}
