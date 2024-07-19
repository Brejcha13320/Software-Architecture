package principal;

import jade.core.Profile;
import jade.core.ProfileImpl;
import jade.core.Runtime;
import jade.wrapper.AgentContainer;
import jade.wrapper.AgentController;
import jade.wrapper.StaleProxyException;
import agentes.AgenteComprador;
import agentes.AgenteSubastador;

public class SubastaMain {
	
	public static void main(String[] args) {
        Runtime rt = Runtime.instance();
        Profile p = new ProfileImpl();
        AgentContainer mainContainer = rt.createMainContainer(p);

        try {
            AgentController subastador = mainContainer.createNewAgent("Subastador", AgenteSubastador.class.getName(), null);
            subastador.start();

            AgentController comprador = mainContainer.createNewAgent("Comprador", AgenteComprador.class.getName(), null);
            comprador.start();
        } catch (StaleProxyException e) {
            e.printStackTrace();
        }
    }

}
