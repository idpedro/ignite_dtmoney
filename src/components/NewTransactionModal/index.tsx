import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { Container, TransactionTypeConteiner, RadioBox } from "./styles";

import CloseImg from "../../assets/close.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import { Api } from "../../services/api";

interface NewTransacrionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransacrionModal({
  isOpen,
  onRequestClose,
}: NewTransacrionModalProps) {
  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handrerCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    };
    Api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={"react-modal-overlay"}
      className={"react-modal-content"}
    >
      <Container onSubmit={handrerCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => {
            setValue(Number(event.target.value));
          }}
        />
        <TransactionTypeConteiner>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor={"green"}
          >
            <img src={IncomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor={"red"}
          >
            <img src={OutcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeConteiner>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button type="submit">Cadastrar</button>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={CloseImg} alt="Fechar modal" />
        </button>
      </Container>
    </Modal>
  );
}
