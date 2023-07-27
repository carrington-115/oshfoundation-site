/*
 * TIC Bootcamp code
 * Date: 27/07/2023
 * 
 * control LEDs with push buttons 
 * by reading the states of the buttons
 * 
 * tutor: Fru mark
 * 
 */



// setting the led pins
int led1 = 2;
int led2 = 3;
int led3 = 4;
int led4 = 5;

// setting the push button pins
int button1 = 6;
int button2 = 7;
int button3 = 8;
int button4 = 9;

  
void setup(){
  for (int i = 2; i<=5; i++){
    pinMode(i, OUTPUT);
  }
  for (int i = 6; i<=9; i++){
    pinMode(i, INPUT_PULLUP);
  }
  // Starting the Serial monitor
  Serial.begin(9600);
  Serial.println("Starting the program...");
  for (int i = 2; i<=5; i++) digitalWrite(i, LOW); 

}

void loop(){
  
  // getting the push button states
  bool state1 = digitalRead(button1);
  bool state2 = digitalRead(button2);
  bool state3 = digitalRead(button3);
  bool state4 = digitalRead(button4);

  if (state1 == 0){
    digitalWrite(led1, HIGH);
    Serial.println("led 1 is on");
  }
  else if (state2 == 0){
    digitalWrite(led2, HIGH);
    Serial.println("led 2 is on");

  }
  else if (state3 == 0){
    digitalWrite(led3, HIGH);
    Serial.println("led 3 is on");

  }
  else if (state4 == 0){
    digitalWrite(led4, HIGH);
    Serial.println("led 1 is on");

  }
  else{
   for (int i = 2; i<=5; i++) digitalWrite(i, LOW); 
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
