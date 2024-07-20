package agentes;

import jade.core.Agent;
import jade.core.behaviours.CyclicBehaviour;
import jade.lang.acl.ACLMessage;

public class AgenteComprador extends Agent {
	@Override
    protected void setup() {
        System.out.println("Agente Comprador " + getAID().getName() + " está listo.");

        addBehaviour(new CyclicBehaviour() {
            @Override
            public void action() {
                ACLMessage mensaje = receive();
                if (mensaje != null) {
                    System.out.println("Comprador recibió: " + mensaje.getContent());
                    ACLMessage respuesta = mensaje.createReply();
                    respuesta.setPerformative(ACLMessage.PROPOSE);
                    respuesta.setContent("Puja de 100 unidades");
                    send(respuesta);
                    System.out.println("Enviada puja: " + respuesta.getContent());
                } else {
                    block();
                }
            }
        });
    }

}
