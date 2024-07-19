
<p align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" width="180" alt="NodeJS Logo" />
</p>

# Event Driven Architecture

Este es un ejemplo sencillo de cómo implementar la arquitectura orientada a eventos en Laravel utilizando el sistema de eventos y listeners. Sigue los pasos detallados a continuación.

## Paso 1: Crear un Proyecto de Laravel
Primero, necesitas crear un nuevo proyecto de Laravel. Si no tienes Laravel instalado, puedes hacerlo utilizando Composer:
```
composer create-project --prefer-dist laravel/laravel EventDrivenApp cd EventDrivenApp
```
## Paso 2: Configurar la Base de Datos
Configura la conexión a la base de datos en el archivo `.env` **(instalar un gestor de base de datos mysql y crear la base datos "event_driven_app")**:
```
DB_CONNECTION=mysql 
DB_HOST=127.0.0.1 DB_PORT=3306 
DB_DATABASE=event_driven_app 
DB_USERNAME=root 
DB_PASSWORD=
```
## Paso 3: Crear una Migración y un Modelo
Crea una tabla para almacenar los datos que generarán eventos. Por ejemplo, una tabla de `orders`:
```
php artisan make:model Order -m
```
Luego, edita la migración generada en **`database/migrations/xxxx_xx_xx_create_orders_table.php`**:
```
public function up()
{
	 Schema::create('orders', function (Blueprint $table) {
		 $table->id(); $table->string('product_name');
		 $table->integer('quantity'); $table->timestamps();
	}); 
 }
```
Ejecuta la migración:
```
`php artisan migrate
```
## Paso 4: Crear un Evento
Crea un evento llamado **`OrderCreated`**:
```
php artisan make:event OrderCreated
```
Edita el evento generado en `app/Events/OrderCreated.php`:
```
namespace App\Events; 
use App\Models\Order; 
use Illuminate\Broadcasting\InteractsWithSockets; 
use Illuminate\Foundation\Events\Dispatchable; 
use Illuminate\Queue\SerializesModels; 
class OrderCreated
{ 
	use Dispatchable, InteractsWithSockets, SerializesModels; 
	public $order; 
		public function __construct(Order $order) { 
			$this->order = $order; 
		} 
}
```
## Paso 5: Crear un Listener
Crea un listener llamado **`SendOrderNotification`**:
```
php artisan make:listener SendOrderNotification --event=OrderCreated
```
Edita el listener generado en **`app/Listeners/SendOrderNotification.php`**:
```
namespace App\Listeners; 
use App\Events\OrderCreated; 
use Illuminate\Contracts\Queue\ShouldQueue; 
use Illuminate\Queue\InteractsWithQueue; 
use Illuminate\Support\Facades\Mail; 
use App\Mail\OrderNotification; 
class SendOrderNotification { 
	public function handle(OrderCreated $event) 
	{ 
		// Lógica para enviar una notificación por correo electrónico 
		Mail::to('admin@example.com')->send(new OrderNotification($event->order)); 
	} 
}
```
## Paso 6: Registrar el Evento y el Listener
Registra el evento y el listener en **`app/Providers/EventServiceProvider.php`**:
```
protected $listen = [
    'App\Events\OrderCreated' => [
        'App\Listeners\SendOrderNotification',
    ],
];
```
## Paso 7: Crear un Mail
Crea una clase de correo electrónico para enviar la notificación:
```
php artisan make:mail OrderNotification
```
Edita el correo electrónico generado en **`app/Mail/OrderNotification.php`**:
```
namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $order;

    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function build()
    {
        return $this->view('emails.order_notification')
                    ->with([
                        'productName' => $this->order->product_name,
                        'quantity' => $this->order->quantity,
                    ]);
    }
}
```
Crea una vista para el correo electrónico en **`resources/views/emails/order_notification.blade.php`**:
```
<p>New Order Created:</p>
<p>Product Name: {{ $productName }}</p>
<p>Quantity: {{ $quantity }}</p>

```
## Paso 8: Despachar el Evento
En el controlador donde creas una nueva orden, despacha el evento **`OrderCreated`**. Por ejemplo, en **`OrderController.php`**:
```
namespace App\Http\Controllers;

use App\Models\Order;
use App\Events\OrderCreated;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $order = Order::create([
            'product_name' => $request->input('product_name'),
            'quantity' => $request->input('quantity'),
        ]);

        event(new OrderCreated($order));

        return response()->json(['message' => 'Order created successfully']);
    }
}
```
## Paso 9: Probar la Implementación
Para probar la implementación, puedes crear una orden enviando una solicitud POST a `orders`:
```
curl -X POST http://yourapp.test/orders \
     -H "Content-Type: application/json" \
     -d '{"product_name": "Product 1", "quantity": 10}'
```
Esto debería crear una nueva orden y despachar el evento `OrderCreated`, que a su vez activará el listener `SendOrderNotification` y enviará un correo electrónico de notificación.

Este es un ejemplo completo y detallado de cómo implementar una arquitectura orientada a eventos en Laravel. Puedes expandir este ejemplo añadiendo más eventos y listeners según sea necesario para tu aplicación.