import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs'

import { ListarComponent } from './listar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpleadoService } from '../../shared/empleado.service';
import { Empleado } from '../../shared/model/empleado';


describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;
  let empleadoService: EmpleadoService;
  const listaEmpleados: Empleado[] = [new Empleado('Financiera',
                                                   'steven.giron@cidenet.com.co',
                                                   'Activo',
                                                   new Date('Mon, 17 Oct 2022 17:17:16 GMT'),
                                                   new Date('Sat, 15 Oct 2022 00:00:00 GMT'),
                                                   '1116281305',
                                                   'JHON',
                                                   'Colombia',
                                                   'GIRON',
                                                   'STEVEN',
                                                   'ARCILA',
                                                   'Cedula de Ciudadanía',
                                                   1),
                                     new Empleado('Administración',
                                                  'sebastian.arcila@cidenet.com.co',
                                                  'Activo',
                                                  new Date('Mon, 17 Oct 2022 17:17:16 GMT'),
                                                  new Date('Sat, 15 Oct 2022 00:00:00 GMT'),
                                                  '11154541305',
                                                  '',
                                                  'Estados Unidos',
                                                  'ARCILA',
                                                  'SSEBASTIAN',
                                                  'TASCON',
                                                  'Pasaporte',
                                                  2),  
                                    ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComponent ],
      imports:[
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [empleadoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
