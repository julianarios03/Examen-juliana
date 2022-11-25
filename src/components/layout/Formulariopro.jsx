const Formulariopro=()=>{
    return(
        <section className="formulariopro">
            <h5 className="titulo">Producto</h5>
    <input className="producto" type="text" placeholder="Nombre" />
    <input className="producto" type="text"placeholder="Sexo" />
    <input className="producto"type="text"placeholder="Referencia" />
    <input className="producto"type="text" placeholder="Tamaño"/>
    <input className="producto"type="text" placeholder="cantidad"/>
    <input className="producto"type="text" placeholder="Descripcion"/>
    <input className="producto"type="button" value="Enviar"/>
    </section>
    );
}

export default Formulariopro
