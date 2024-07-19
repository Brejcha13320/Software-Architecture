package agentes;

import jade.core.Agent;
import jade.core.behaviours.Behaviour;
import jade.core.behaviours.OneShotBehaviour;
import jade.lang.acl.ACLMessage;

public class AgenteSubastador extends Agent {
	
	@Override
    protected void setup() {
        System.out.println("Agente Subastador " + getAID().getName() + " está listo.");

        addBehaviour(new OneShotBehaviour() {
            @Override
            public void action() {
                ACLMessage mensaje = new ACLMessage(ACLMessage.INFORM);
                mensaje.addReceiver(getAID("Comprador"));
                mensaje.setContent("Inicio de la subasta de un artículo");
                send(mensaje);
                System.out.println("Mensaje enviado a Comprador: " + mensaje.getContent());
            }
        });

        addBehaviour(new RecibirOfertasBehaviour());
    }
	
	private class RecibirOfertasBehaviour extends Behaviour {
        private boolean terminado = false;

        @Override
        public void action() {
            ACLMessage mensaje = receive();
            if (mensaje != null) {
                System.out.println("Subastador recibió: " + mensaje.getContent());
                terminado = true;
            } else {
                block();
            }
        }

        @Override
        public boolean done() {
            return terminado;
        }
    }

}
