import React, { Suspense } from "react";
import Code from "./../../components/Code";
import { Button, Container, Row, Col } from "react-bootstrap";

function Lesson() {
  return (
   
      <div id="main-content" className="my-5 text-left">
        {/* Zde je Hlavní Kontent */}
        <h3>PROMĚNNÉ</h3>
        <p>
          Proměnné jsou v podstatě takové nosiče informací. Do těchto nosičů
          uložíme informaci takto
        </p>
        <Code codeString={`x = 1`} language="python" />
        <p>
          Názvy proměnných mají svá Pravidla - Musí to být jedno slovo a nesmí
          obsahovat žádné Speciální znaky (*-"/# atd.), ale může obsahovat malá,
          velká písmena, čísla, nebo podtržítko(_)
        </p>
        <Code
          codeString={`
x_1 # ANO
x *- 2 # NE`}
          language="python"
        />

        <hr style={{ margin: "3rem 0", backgroundColor: "white" }} />
        <h3>ZÁKLADNÍ FUNKCE</h3>
        <p>
          {" "}
          Funkci poznáš tak, že má za sebou závorky () a do těch závorek se
          většinou něco píše.
        </p>
        <h4>funkce print()</h4>
        <p>Nejzákladnější funkcí je určitě funkce print()</p>
        <p>Do závorek píšeme to co chceme vytisknou uživateli na obrazovku</p>
        <p>
          {" "}
          Například Když chci vytisknout hodnotu dříve deklarované proměnné x
          udělám to takto:
        </p>
        <Code
          codeString={`
print(x)
`}
          language="python"
        />

        <p>Co když chceme ale vytisknout nějaký text?</p>
        <p>I to je možné a je to velmi jednoduché...</p>
        <p>
          Do Závorek napíšeme text, který chceme, ale musíme ho vložit do
          uvozovek "Text" - Takto:
        </p>
        <Code
          codeString={`
print("Toto je 2. řádek")
`}
          language="python"
        />
        <p>Uvozovky se dají napsat jako SHIFT + klávesa o 1 napravo od L</p>
        <p>
          Když chceme zkombinovat Text a hodnotu proměnné oddělíme vše čárkou -
          takto:
        </p>
        <Code
          codeString={`
print("Toto je hodnota Proměnné x: ", x)
`}
          language="python"
        />

        <hr style={{ margin: "3rem 0", backgroundColor: "white" }} />
        <h3>Cvičení</h3>
        <p>Vytvoř Proměnnou y a přiřaď ji hodnotu 27</p>

        <p>Potom vytiskni větu: Sněhurka a (Hodnota y) Trpaslíků</p>
        {/* <video width="320" height="240" controls src="https://youtu.be/Fg8TV8Sq4W8"></video> */}
        <hr style={{ margin: "3rem 0", backgroundColor: "white" }} />

        <h3>Řešení</h3>

        <Code
          codeString={`
# Vytvoř Proměnnou y a přiřaď ji hodnotu 27
y = 27

# Potom vytiskni větu: Sněhurka a (Hodnota y) Trpaslíků
print("Sněhurka a ", y, " Trpaslíků")

# Otevřít Terminál = CTRL + ;
# Rozběhnout program = python (název souboru).py
`}
          language="python"
        />
        <Row>
          <Col md={6} sm={12}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UONtz9a0x-8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col md={6} sm={12}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3i8ambOM2V8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>

        {/* Zde je Hlavní Kontent */}
      </div>
  );
}

export default Lesson;
