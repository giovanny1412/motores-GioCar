namespace motores {

    // Enumeración para las direcciones del motor
    enum MotorDirection {
        Adelante,
        Atras
    }

    // Definición del bloque para activar el motor 1
    //% blockId=activarMotor1 block="activar motor 1 en dirección %direccion|con velocidad %velocidad"
    export function activarMotor1(direccion: MotorDirection, velocidad: number): void {
        let pinMotor1A = DigitalPin.P0; // Pin para el motor 1
        let pinMotor1B = DigitalPin.P1; // Pin para el motor 1

        // Configurar pines como salidas
        pins.digitalWritePin(pinMotor1A, 0);
        pins.digitalWritePin(pinMotor1B, 0);

        // Controlar motor 1
        if (direccion == MotorDirection.Adelante) {
            pins.digitalWritePin(pinMotor1A, 1);
            pins.digitalWritePin(pinMotor1B, 0);
        } else if (direccion == MotorDirection.Atras) {
            pins.digitalWritePin(pinMotor1A, 0);
            pins.digitalWritePin(pinMotor1B, 1);
        }

        // Controlar velocidad (PWM)
        controlMotorVelocidad(pinMotor1A, velocidad);
    }

    // Definición del bloque para activar el motor 2
    //% blockId=activarMotor2 block="activar motor 2 en dirección %direccion|con velocidad %velocidad"
    export function activarMotor2(direccion: MotorDirection, velocidad: number): void {
        let pinMotor2A = DigitalPin.P2; // Pin para el motor 2
        let pinMotor2B = DigitalPin.P3; // Pin para el motor 2

        // Configurar pines como salidas
        pins.digitalWritePin(pinMotor2A, 0);
        pins.digitalWritePin(pinMotor2B, 0);

        // Controlar motor 2
        if (direccion == MotorDirection.Adelante) {
            pins.digitalWritePin(pinMotor2A, 1);
            pins.digitalWritePin(pinMotor2B, 0);
        } else if (direccion == MotorDirection.Atras) {
            pins.digitalWritePin(pinMotor2A, 0);
            pins.digitalWritePin(pinMotor2B, 1);
        }

        // Controlar velocidad (PWM)
        controlMotorVelocidad(pinMotor2A, velocidad);
    }

    // Función para controlar la velocidad del motor usando PWM
    function controlMotorVelocidad(pin: DigitalPin, velocidad: number): void {
        let pwmValue = Math.map(velocidad, 0, 100, 0, 1023); // Mapea la velocidad de 0-100 a PWM de 0-1023
        pins.analogWritePin(pin, pwmValue); // Escribe el valor PWM al pin
    }
}
