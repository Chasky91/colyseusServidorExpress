import { Room, CloseCode } from "colyseus";
import { MiEstadoDeSala, Jugador } from "./schema/MyRoomState.js";

export class MyRoom extends Room {
  maxClients = 4;
  state = new MiEstadoDeSala();

  messages = {
    move:(clietn ,  message) => {
      const  player = this.state.players.get(client.sessionId)
      if(!player) return

      player.x = message.x
      player.y = message.y
    },
  };

  onCreate(client, options) {
  console.log("room", this.roomId, "Creada...");

  }

  onJoin(client, options) {
     this.state.players.set(client.sessionId, new Player())
    this.broadcast("chat", `${client.sessionId} entró.`)
  }
  onLeave(client, code) {
    this.state.players.delete(client.sessionId);
    this.broadcast("chat", `${client.sessionId} salió.`)
  }

  onDispose() {
    /**
     * Called when the room is disposed.
     */
    console.log("room", this.roomId, "disposing...");
  }

}
