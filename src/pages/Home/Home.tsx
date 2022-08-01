import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            type="text" 
            id="task" 
            placeholder="De um nome para o seu projeto"
          />

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minutesAmount"
            placeholder="00"  
          />
          
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
            <Play size={24} /> 
            Começar
          </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
