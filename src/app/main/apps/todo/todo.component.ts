import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

import { Todo } from 'app/main/apps/todo/todo.model';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemModWindowComponent } from './item-mod-window/item-mod-window.component';
import { ConfirmModWindComponent } from './confirm-mod-wind/confirm-mod-wind/confirm-mod-wind.component';
import { ItemService } from 'app/core/items/item.service';
import { CategoryValueService } from './category-value.service';
import { Router } from '@angular/router';

@Component({
    selector     : 'todo',
    templateUrl  : './todo.component.html',
    styleUrls    : ['./todo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class TodoComponent implements OnInit
{
    // searchInput: FormControl= new FormControl('');
    categories: Todo[];
    selectedItem: number;

    constructor(
        private authService: AuthService,
        private itemService: ItemService,
        public dalog: MatDialog,
        private categoryService: CategoryValueService,
        private router: Router,
    ) {}
      
    ngOnInit(): void {
        this.getCategories();
    }

    logOut() {
        this.authService.logOut();
    }

    selectProfile() {
        this.router.navigate(['/profile']); 
    }

    getCategories() {
        this.categoryService.countCategoryChange.subscribe(() => {
            this.itemService.getAllItems()
                .subscribe((items) => {
                    this.categories = items;
                }, err => {})
        })
    }
    
    newCategory() {  
        var modalWindow = this.dalog.open(ItemModWindowComponent,{
            panelClass: 'event-form-dialog',
        });
            
        modalWindow.componentInstance.title = 'Add New Category';

        modalWindow.afterClosed().subscribe((data) => {
            if (data != null) {
                const name = data.value.item;

                this.itemService.addItem(name)
                .subscribe(() => { 
                    this.getCategories();
                })
            } 
        })
    }   

    deleteCategory(category) {
        if (category.name != null) {
            var confirmModalWindow = this.dalog.open(ConfirmModWindComponent, {
                disableClose: false
            });
            
            confirmModalWindow.componentInstance.confirmMessage = `Are you sure you want to delete category '${category.name}'?`;
            
            confirmModalWindow.afterClosed().subscribe(result => {
                if (result) {
                    this.itemService.deleteItem(category.id).subscribe(() => {
                        this.getCategories();
                    })
                }
            });
       } 
    }

    editCategory(category) {
        if (category.name != null) {
            var modalWindow = this.dalog.open(ItemModWindowComponent,{
                panelClass: 'event-form-dialog',
                });

            modalWindow.componentInstance.title = 'Edit Category';
            modalWindow.componentInstance.categoryName = category.name;

            modalWindow.afterClosed().subscribe((data) => {
                if (data != null) {
                    category.name = data.value.item;

                    this.itemService.editItem(category)
                        .subscribe(() => { 
                            this.getCategories();
                        })
                }
            })
        }
    }

    selectCategory(category) {     
        this.categoryService.onItemChanged.next(category);
        this.selectedItem = category.id;  
    }    
}
