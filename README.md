# Broadcast WebSocket Server
https://roadmap.sh/projects/broadcast-server  
Este es un proyecto básico de servidor y cliente WebSocket, que permite transmitir mensajes públicos y privados entre clientes conectados. Además, incluye un CLI personalizado para iniciar tanto el servidor como el cliente usando comandos simples.

## Características

- **Servidor WebSocket**: Transmite mensajes públicos a todos los clientes conectados.
- **Mensajes privados**: Permite enviar mensajes privados a un cliente específico.
- **CLI personalizado**: Inicia el servidor y conecta el cliente usando comandos simples como `broadcast-server start` y `broadcast-server connect`.
- **Interfaz de consola**: Los mensajes se envían y reciben a través de la consola, con colores para distinguir los diferentes tipos de mensajes.

## Requisitos

- Node.js v18 o superior
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/katarro/BroadcastServer.git
   ```

2. Instala las dependencias 
   ```bash
   cd BroadcastServer
   npm install
   ```
3. Vincula el comando globalmente para poder usar el CLI:
   ```bash
   npm link
   ```

## Uso
### Iniciar el servidor

Para iniciar el servidor WebSocket, usa el siguiente comando:

```bash
broadcast-server start
```

El servidor se iniciará en el puerto **8001**, y los clientes podrán conectarse a él.

### Conectar el cliente
Para conectar el cliente al servidor, usa el siguiente comando:

```bash
broadcast-server connect
```
Esto iniciará un cliente WebSocket que se conectará al servidor y te permitirá enviar mensajes públicos y privados.

### Enviar mensajes
- **Mensajes públicos:** Escribe cualquier texto en la consola para enviar un mensaje público a todos los clientes conectados.
- **Mensajes privados:** Usa el comando **/private** mensaje para enviar un mensaje privado.

## Ejemplo de interacción
1. En una terminal, inicia el servidor:

    ```bash
    broadcast-server start
    ```

2. En otra terminal, conecta el cliente:

    ```bash
    broadcast-server connect
    ```

3. Envía mensajes desde el cliente escribiendo directamente en la consola:

    - Mensaje público:

        ```bash
        Hola a todos
        ```

    - Mensaje privado:

        ```bash
        /private Este es un mensaje privado
        ```

4. Observa cómo los mensajes se muestran en ambas consolas (la del servidor y la del cliente).


## Dependencias
Este proyecto utiliza las siguientes dependencias:

- ws: WebSocket para Node.js.
- commander: Para crear un CLI personalizado.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar el proyecto o agregar nuevas características, siéntete libre de hacer un fork y enviar un pull request.

## Licencia
Este proyecto está bajo la licencia MIT.