<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/300px-Node.js_logo.svg.png" width="180" alt="NodeJS Logo" />
</p>

# SOA Architecture

Este es un ejemplo básico que muestra cómo los servicios pueden registrarse y descubrirse en una arquitectura SOA utilizando Node.js. Puedes expandir este ejemplo agregando más servicios, mejorando la lógica de registro y descubriendo servicios, y gestionando errores de manera más robusta

## Paso 1 - Instalar Dependencias (Client, Service Registry y ServiceA/ServiceB)

### Service-Registry

```
cd service-registry
npm install
```

### ServiceA

```
cd service/serviceA
npm install
```

### ServiceB

```
cd service/serviceB
npm install
```

### Client

```
cd client
npm install
```

## Paso 2 - Iniciar el servicio de registro

```
cd service-registry
```

```
npm run start
```

## Paso 3 - Iniciar los servicios

### ServiceA

```
cd service/serviceA
```

```
npm run start
```

### ServiceB

```
cd service/serviceB
```

```
npm run start
```

## Paso 4 - Ejecutar el cliente

```
cd client
```

```
npm run start
```

## Resultados

### Service-Registry

```
Service registry running on port 3000
Registered service: serviceA at http://localhost:4000
Registered service: serviceB at http://localhost:5000
```

### ServiceA

```
Service A running on port 4000
```

### ServiceB

```
Service B running on port 5000
```

### Client

```
Response from serviceA: Response from Service A
Response from serviceB: Response from Service B
```
