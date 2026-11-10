import { schema, t } from "@colyseus/schema";

export const Jugador = schema({

  x:t.number().default(0),
  y: t.number().default(0),

});

export  const  MiEstadoDeSala = schema({
  jugadores: t.map(Jugador)
})
