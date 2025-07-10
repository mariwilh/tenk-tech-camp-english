import React from "react";
import { P, FormRow, Dialog, Input } from "@dnb/eufemia";
import "./styles.css";
import confetti from "canvas-confetti";

export default function InputField() {
  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 200,
      zIndex: 9999, // ensure that confetti is on top
      scalar: 1.2,
    });
  };

  return (
    <FormRow>
      <Input
        space
        type="text"
        onChange={handleInputText}
        value={inputText}
        placeholder="Name"
        stretch
        style={{ minWidth: "200px" }}
        suffix={
          <Dialog
            triggerAttributes={{
              text: "Report person",
              tooltip: "Report to the police",
            }}
            onOpen={() => {
              if (
                inputText.toLowerCase().split(" ").join("") === "jonasgahrstøre" || inputText.toLowerCase().split(" ").join("") === "jonasgahrstore"
              ) {
                triggerConfetti();
              }
            }}
            title={
              inputText.toLowerCase().split(" ").join("") === "jonasgahrstøre" || inputText.toLowerCase().split(" ").join("") === "jonasgahrstore"
                ? "Congratulations!"
                : "Try again!"
            }
          >
            { inputText.toLowerCase().split(" ").join("") === "jonasgahrstøre" || inputText.toLowerCase().split(" ").join("") === "jonasgahrstore" ? (
              <P>
                You have solved the case!
                <br />
                <br />
                Jonas Gahr Støre, the Prime Minister of Norway, has illegally transferred money to Russia. 

                Luckily you were able to detect this illegal activity and report it to the police!  
                <br />
                <br />
                Well done and thank you for your help! 
              </P>
            ) : (
              <P>
                The name you entered is not correct. 
                <br />
                <br />
                Try to look through the transactions again to find the correct person!
              </P>
            )}
          </Dialog>
        }
      />
    </FormRow>
  );
}
