const Formulariocli=()=>{
    return(
        <section className="formulariocli">
    <h5 className="titulo">Clientes</h5>
    <input className="cliente" type="text" placeholder="Nombre" />
    <input className="cliente" type="text"placeholder="Documento" />
    <input className="cliente"type="text"placeholder="Correo" />
    <input className="cliente"type="text" placeholder="Direccion"/>
    <input className="cliente"type="text" placeholder="Barrio"/>
    <input className="cliente"type="text" placeholder="Telefono"/>
    <input className="cliente"type="button" value="Enviar"/>
    </section>
    );
}

export default Formulariocli
