export class Empleado {
    area                :string;
    correoElectronico?  :string;
    estado?             :string;
    fechaHoraRegistro?  :Date | string;
    fechaIngreso        :Date | string;
    numeroIdentificacion:string;
    otrosNombres        :null | string;
    paisEmpleo          :string;
    primerApellido      :string;
    primerNombre        :string;
    segundoApellido     :string;
    tipoIdentificacion  :string;
    id?                 :number;

    constructor(
        area                :string,
        correoElectronico   :string,
        estado              :string,
        fechaHoraRegistro   :Date,
        fechaIngreso        :Date,
        numeroIdentificacion:string,
        otrosNombres        :null | string,
        paisEmpleo          :string,
        primerApellido      :string,
        primerNombre        :string,
        segundoApellido     :string,
        tipoIdentificacion  :string,
        id?                 :number
    ){
        this.area                 = area;
        this.correoElectronico    = correoElectronico;
        this.estado               = estado;
        this.fechaHoraRegistro    = fechaHoraRegistro;
        this.fechaIngreso         = fechaIngreso;
        this.numeroIdentificacion = numeroIdentificacion;
        this.otrosNombres         = otrosNombres;
        this.paisEmpleo           = paisEmpleo;
        this.primerApellido       = primerApellido;
        this.primerNombre         = primerNombre;
        this.segundoApellido      = segundoApellido;
        this.tipoIdentificacion   = tipoIdentificacion;
        this.id                   = id;
    }
}
