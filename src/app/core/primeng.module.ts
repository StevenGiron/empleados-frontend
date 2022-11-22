import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule} from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CalendarModule,
    ConfirmDialogModule,
    DropdownModule,
    FieldsetModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ToastModule,
    ToolbarModule
    
  ],
  providers:[
    MessageService,
    ConfirmationService
  ]
})
export class PrimengModule { }
