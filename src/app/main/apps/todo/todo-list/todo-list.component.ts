import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

import { Todo } from 'app/main/apps/todo/todo.model';
import { ItemService } from 'app/core/items/item.service';
import { CategoryValueService } from '../category-value.service';
import { MatDialog } from '@angular/material/dialog';
import { ModWindowComponent } from '../mod-window/mod-window.component';

@Component({
    selector     : 'todo-list',
    templateUrl  : './todo-list.component.html',
    styleUrls    : ['./todo-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class TodoListComponent implements OnInit
{
    todos: Todo[];
    parentItem: any;
    
    constructor(
        private categoryService: CategoryValueService,
        public dalog: MatDialog,
        private itemService: ItemService,
    ) {}

    ngOnInit(): void {   
        this.getItems();
    }

    getItems() {
        this.categoryService.onItemChanged.subscribe(item => {
            if (item != null) {
                this.itemService.getItems(item.id).subscribe((items) => {
                    this.todos = items;
                    this.parentItem = item;
                }) 
            }
        })
    }

    newItem() {
        var modalWindow = this.dalog.open(ModWindowComponent,{
            panelClass: 'event-form-dialog',
        });
            
        modalWindow.componentInstance.title = 'Add New Item';

        modalWindow.afterClosed().subscribe((data) => {
            if (data != null) {
                const name = data.value.item;
                const parentItemId = this.parentItem.id;

                this.itemService.addItem(name, parentItemId)
                .subscribe(() => { 
                this.getItems();
                })
            }
        })
    }

    selectItem(todo) {
        this.categoryService.onItemChanged.next(todo);
        console.log(todo);
    }

    return() {
        this.itemService.getById(this.parentItem.parentItemId)
            .subscribe((data) => {
                if (data) {
                    this.categoryService.onItemChanged.next(data);
                }
            })
    }
}
