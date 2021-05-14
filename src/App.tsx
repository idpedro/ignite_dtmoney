import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionNewModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseTransactionNewModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenTransactionNewModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onAfterOpen={handleOpenTransactionNewModal}
        onRequestClose={handleCloseTransactionNewModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}
