import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransacrionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from "./TransactionsContext";

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
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenTransactionNewModal} />
      <Dashboard />
      <NewTransacrionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionNewModal}
      />
    </TransactionProvider>
  );
}
