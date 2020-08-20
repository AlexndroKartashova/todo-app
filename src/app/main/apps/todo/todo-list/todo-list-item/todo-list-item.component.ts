import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryValueService } from '../../category-value.service';
import { ItemService } from 'app/core/items/item.service';
import { MatDialog,} from '@angular/material/dialog';
import { ModWindowComponent } from '../../mod-window/mod-window.component';
import { ConfirmModWindComponent } from '../../confirm-mod-wind/confirm-mod-wind.component';
import { Todo } from 'app/core/interface/models.model';

@Component({
    selector     : 'todo-list-item',
    templateUrl  : './todo-list-item.component.html',
    styleUrls    : ['./todo-list-item.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TodoListItemComponent implements OnInit
{
    @Input()
    todo: Todo;
    unBlockedAddItem = true;
    parentItem: any;
    
    constructor(
        private itemService: ItemService,
        public dalog: MatDialog,
        private categoryService: CategoryValueService,

    ) {}

    ngOnInit(): void {   
        this.categoryService.onItemChanged.subscribe((parentItem) => this.parentItem = parentItem);
    }

    onSelectedChange(todo) {
        this.itemService.chengeCheckbox(todo).subscribe(() => {
            this.categoryService.onItemChanged.next(this.parentItem);
            this.categoryService.onItemChanged.subscribe((i) => {
                this.categoryService.countCategoryChange.next(i);
            });
        });
    }
    
    deleteItem(todo) {
        if (todo.name != null) {
            
            var confirmModalWindow = this.dalog.open(ConfirmModWindComponent, {
                disableClose: false
            });

            confirmModalWindow.componentInstance.confirmMessage = `Are you sure you want to delete category '${todo.name}'?`;
            
            confirmModalWindow.afterClosed().subscribe(result => {
                if (result) {
                    this.itemService.deleteItem(todo.id).subscribe((i) => {
                        this.categoryService.onItemChanged.next(this.parentItem);
                        this.categoryService.countCategoryChange.next(i);
                    })
                }
            });
        }
    }

    editItem(todo) {
        if (todo.name != null) {
            
            var modalWindow = this.dalog.open(ModWindowComponent,{
                panelClass: 'event-form-dialog',
            });
            modalWindow.componentInstance.title = 'Edit Item';
            modalWindow.componentInstance.categoryName = todo.name; 
            
            modalWindow.afterClosed().subscribe((data) => {
                if (data != null) {
                    todo.name = data.value.item;

                    this.itemService.editItem(todo)
                        .subscribe(() => { 
                            this.categoryService.onItemChanged.next(this.parentItem);
                        })
                }
            })
        }    
    }
}
