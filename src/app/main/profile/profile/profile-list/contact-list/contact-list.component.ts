import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { fuseAnimations } from '@fuse/animations';
import { AddContactModalWindowComponent } from '../../add-contact-modal-window/add-contact-modal-window.component';
import { ContactService } from 'app/core/contacts/contact.service';
import { Contact } from 'app/core/interface/models.model';
import { MatTableDataSource } from '@angular/material/table';
import { EditContactModalWindowComponent } from '../../edit-contact-modal-window/edit-contact-modal-window.component';
import { ConfirmModWindComponent } from '../../confirm-mod-wind/confirm-mod-wind.component';

@Component({
    selector     : 'contacts-contact-list',
    templateUrl  : './contact-list.component.html',
    styleUrls    : ['./contact-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ContactsContactListComponent implements OnInit
{
    @ViewChild('dialogContent', {static: false})
    dialogContent: TemplateRef<any>;

    contacts: Contact[];
    user: any;
    displayedColumns = ['name', 'email', 'phone', 'buttons'];
    dialogRef: any;
    dataSource: MatTableDataSource<any>;

    // Private

    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     * @param {MatDialog} _matDialog
     */
    constructor(
        public dalog: MatDialog,
        private contactService: ContactService
    )
    { }
    ngOnInit(): void
    { 
        this.getContacts();
    }

    getContacts() {
        this.contactService.getContacts().subscribe((contact) => {
            this.dataSource = new MatTableDataSource(contact);
        }, err => {})
    }

    addContact() {
        console.log('clic');
        
        var modalWindow = this.dalog.open(AddContactModalWindowComponent,{
            panelClass: 'event-form-dialog',
        });
            
        modalWindow.componentInstance.title = 'Add New Contact';

        modalWindow.afterClosed().subscribe((data) => {
            if (data != null) {
                const name = data.value.name;
                const email = data.value.email;
                const phoneNumber = data.value.phoneNumber;

                this.contactService.addContact(name, email, phoneNumber)
                .subscribe(() => { 
                    this.getContacts();
                    console.log('contact', data)
                })
            } 
        })
    }

    editContact(contact) {
        if (contact.name  != null) {
            console.log('contact', contact);
            var modalWindow = this.dalog.open(EditContactModalWindowComponent,{
                panelClass: 'event-form-dialog',
            });
    
            modalWindow.componentInstance.title = 'Edit Contact';
            modalWindow.componentInstance.name = contact.name;
            // modalWindow.componentInstance.phoneNumber = contact.phoneNumber;
            modalWindow.componentInstance.email = contact.email;
    
            modalWindow.afterClosed().subscribe((data) => {
                if (data != null) {
                    console.log('data', data);

                    contact.name = data.value.name;
                    contact.phoneNumber = data.value.phoneNumber.internationalNumber;
                    contact.email = data.value.email;
                    
                    console.log('contact', contact);
                    console.log('value', data.value);

                    this.contactService.editContact(contact)
                        .subscribe(() => { 
                            console.log('contact', contact);

                            this.getContacts();
                        })
                }
            })
        }
    }

    deleteContact(contact) {
        if (contact.name != null) {
            var confirmModalWindow = this.dalog.open(ConfirmModWindComponent,{
                disableClose: false
            });
    
            confirmModalWindow.componentInstance.confirmMessage = `Are you sure you want to delete category '${contact.name }'?`;
    
            confirmModalWindow.afterClosed().subscribe((result) => {
                if (result) {
                   this.contactService.deleteContact(contact.id)
                    .subscribe(() => {
                        this.getContacts();
                    }); 
                }
            });
        }
    }
}

