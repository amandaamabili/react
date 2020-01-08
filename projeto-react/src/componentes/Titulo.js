import React from "react";
import PropTypes from "prop-types";

import "./Titulo.css"

function Titulo({children, cor}){
    return <h1 className= {cor}>{children} {cor}
</h1>
}
Titulo.propTypes ={
    children: PropTypes.node.isRequired,
    cor: PropTypes.oneOf(["vermelho", "azul", "verde"]),
}
Titulo.defaultProps = {
    cor:"vermelho",
}



/*const props={
    children:'Meu primeiro componente  tem um filho '
    cor : 'azul',
}
props.children;*/
export default Titulo;