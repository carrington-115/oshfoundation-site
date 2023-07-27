#include <Servo.h>

Servo motor;
int servoPin = A2;

// char letter = "a";

void setup() {
  Serial.begin(9600);
  motor.attach(servoPin);

}

void loop() {
  for (int i = 0; i<=180; i++){
    motor.write(i);
    Serial.println(i);
    //delay(250);
  }
  for (int i = 180; i>=0; i--){
    motor.write(i);
    Serial.println(i);
    //delay(250);
  }

}
