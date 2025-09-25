import { obtenerSuperheroePorId, obtenerSuperheroesMayoresde30, buscarSuperheroesPorAtributo, verSuperheroes } from "../services/superheroesService.mjs";
import { renderizarListaSuperheroes, renderizarSuperheroe } from "../views/responseView.mjs";

export function obtenerSuperheroePorIdController(req, res){
    const {id} = req.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id));

    if(superheroe){
        res.send(renderizarSuperheroe(superheroe));
    }else{
        res.status(404).send({mensaje: "Superheroe no encontrado"});
    }

}

export function buscarSuperheroesPorAtributoController(req, res){
    const {atributo, valor} = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

    if (superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes));
    }else{
        res.status(404).send({mensaje: "No se encontraron superheroes con ese atributo"});
    }

}

export function obtenerSuperheroesMayoresde30Controller(req, res){
    const superheroes = obtenerSuperheroesMayoresde30();
    res.send(renderizarListaSuperheroes(superheroes));
}

export function verSuperheroesController(req, res){
    const superheroes = verSuperheroes();
    res.send(renderizarListaSuperheroes(superheroes));
}